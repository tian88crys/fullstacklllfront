import React, { useContext } from 'react';
import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NotificationContext, NotificationProvider } from '../NotificationContext';

// Componente helper para consumir el contexto dentro del ambiente de pruebas
const TestComponent = () => {
  const { notifications, unreadCount, addNotification, markAllAsRead, updatedGrades } = useContext(NotificationContext);

  return (
    <div>
      <div data-testid="unread-count">{unreadCount}</div>
      <div data-testid="updated-grades">{updatedGrades.join(',')}</div>
      <button data-testid="btn-mark-read" onClick={markAllAsRead}>Mark All Read</button>
      <button 
        data-testid="btn-add-system" 
        onClick={() => addNotification({ type: 'SYSTEM', message: 'Alerta del sistema', notaId: null })}
      >
        Add System Notif
      </button>
      <button 
        data-testid="btn-add-grade" 
        onClick={() => addNotification({ type: 'GRADE_UPDATE', message: 'Nueva nota', notaId: 45 })}
      >
        Add Grade Notif
      </button>
      <ul data-testid="notif-list">
        {notifications.map((n, i) => (
          <li key={i}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
};

describe('NotificationContext & Provider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('debe inicializar el estado con los valores por defecto', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    expect(screen.getByTestId('unread-count')).toHaveTextContent('1');
    expect(screen.getByTestId('notif-list')).toHaveTextContent('Sistema de notificaciones inicializado.');
    expect(screen.getByTestId('updated-grades')).toHaveTextContent('');
  });

  it('debe incrementar el contador e insertar una nueva notificación cuando se llama a addNotification', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const addBtn = screen.getByTestId('btn-add-system');
    act(() => {
      addBtn.click();
    });

    expect(screen.getByTestId('unread-count')).toHaveTextContent('2');
    expect(screen.getByTestId('notif-list')).toHaveTextContent('Alerta del sistema');
  });

  it('debe marcar todas las notificaciones como leídas reseteando unreadCount a 0', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const markBtn = screen.getByTestId('btn-mark-read');
    act(() => {
      markBtn.click();
    });

    expect(screen.getByTestId('unread-count')).toHaveTextContent('0');
  });

  it('debe registrar el notaId en updatedGrades y quitarlo tras 5 segundos al recibir GRADE_UPDATE', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    const addGradeBtn = screen.getByTestId('btn-add-grade');
    act(() => {
      addGradeBtn.click();
    });

    // Debe contener el ID de la nota (45) inmediatamente
    expect(screen.getByTestId('updated-grades')).toHaveTextContent('45');

    // Avanzar el tiempo 5 segundos (5000 ms)
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    // Debe haberse removido del listado de notas actualizadas tras cumplirse el timeout
    expect(screen.getByTestId('updated-grades')).toHaveTextContent('');
  });
});
