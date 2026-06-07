import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { registrarAsistencia } from '../asistenciaService';

// Mock del módulo global de axios
vi.mock('axios', () => ({
  default: {
    post: vi.fn(),
  },
}));

describe('asistenciaService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('registrarAsistencia', () => {
    it('debe registrar asistencia exitosamente y retornar la respuesta del servidor', async () => {
      const datosAsistencia = { usuarioId: 1, fecha: '2026-06-07', estado: 'PRESENTE' };
      const mockResponse = { data: { success: true, id: 100 } };
      axios.post.mockResolvedValueOnce(mockResponse);

      const result = await registrarAsistencia(datosAsistencia);

      expect(axios.post).toHaveBeenCalledWith('http://localhost:8083/api/asistencia', datosAsistencia);
      expect(result).toEqual(mockResponse.data);
    });

    it('debe lanzar una excepción con un mensaje de error si la llamada HTTP falla', async () => {
      const datosAsistencia = { usuarioId: 1 };
      axios.post.mockRejectedValueOnce(new Error('Network Fail'));

      await expect(registrarAsistencia(datosAsistencia)).rejects.toThrow(
        'Error al registrar la asistencia'
      );
    });
  });
});
