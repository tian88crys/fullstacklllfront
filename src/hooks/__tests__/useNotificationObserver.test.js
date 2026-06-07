import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import React from 'react';
import { NotificationContext } from '../../contexts/NotificationContext';
import useNotificationObserver from '../useNotificationObserver';

// Mock de EventSource para simular la conexión SSE en entorno de pruebas
class FakeEventSource {
  static instances = [];
  constructor(url) {
    this.url = url;
    this.listeners = {};
    this.close = vi.fn();
    this.onmessage = null;
    this.onerror = null;
    FakeEventSource.instances.push(this);
  }
  
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  }
  
  emit(event, data) {
    const eventObj = { data: JSON.stringify(data) };
    if (event === 'message' && this.onmessage) {
      this.onmessage(eventObj);
    }
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb(eventObj));
    }
  }
  
  emitError(err) {
    if (this.onerror) {
      this.onerror(err);
    }
  }
}

describe('useNotificationObserver', () => {
  let addNotificationSpy;
  let wrapper;

  beforeEach(() => {
    FakeEventSource.instances = [];
    global.EventSource = FakeEventSource;
    addNotificationSpy = vi.fn();
    
    // Proveedor mocked de contexto
    wrapper = ({ children }) =>
      React.createElement(
        NotificationContext.Provider,
        { value: { addNotification: addNotificationSpy } },
        children
      );
    
    // Silenciar console.error para no llenar los logs durante la prueba del caso de error
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('no debe instanciar EventSource si userId es nulo o indefinido', () => {
    renderHook(() => useNotificationObserver(null), { wrapper });
    expect(FakeEventSource.instances.length).toBe(0);
  });

  it('debe crear EventSource con la URL adecuada si se provee userId', () => {
    renderHook(() => useNotificationObserver('123'), { wrapper });
    expect(FakeEventSource.instances.length).toBe(1);
    expect(FakeEventSource.instances[0].url).toBe('http://localhost:8082/api/v1/notifications/stream?userId=123');
  });

  it('debe llamar a addNotification y emitir un evento data-needs-refresh al recibir mensajes SSE', () => {
    const dispatchSpy = vi.spyOn(window, 'dispatchEvent');
    renderHook(() => useNotificationObserver('123'), { wrapper });

    const client = FakeEventSource.instances[0];
    const mockData = { type: 'GRADE_UPDATE', message: 'Nota 5.5 registrada' };

    client.emit('message', mockData);

    expect(addNotificationSpy).toHaveBeenCalledWith(mockData);
    expect(dispatchSpy).toHaveBeenCalled();
    const eventArg = dispatchSpy.mock.calls[0][0];
    expect(eventArg.type).toBe('data-needs-refresh');
    expect(eventArg.detail).toEqual(mockData);
  });

  it('debe cerrar la conexión EventSource si ocurre un error', () => {
    renderHook(() => useNotificationObserver('123'), { wrapper });
    const client = FakeEventSource.instances[0];
    client.emitError(new Error('SSE connection failed'));
    expect(client.close).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();
  });

  it('debe cerrar la conexión EventSource al desmontar el componente', () => {
    const { unmount } = renderHook(() => useNotificationObserver('123'), { wrapper });
    const client = FakeEventSource.instances[0];
    unmount();
    expect(client.close).toHaveBeenCalled();
  });
});
