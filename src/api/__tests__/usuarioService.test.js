import { describe, it, expect, vi, beforeEach } from 'vitest';
import axiosClient from '../axiosClient';
import { loginUsuario, registrarUsuario } from '../usuarioService';

// Mock del cliente Axios para evitar llamadas reales a la API
vi.mock('../axiosClient', () => ({
  default: {
    post: vi.fn(),
  },
}));

describe('usuarioService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('loginUsuario', () => {
    it('debe iniciar sesión con éxito y retornar los datos del usuario', async () => {
      const mockResponse = { data: { id: 1, nombre: 'Juan Pérez', token: 'jwt-1234' } };
      axiosClient.post.mockResolvedValueOnce(mockResponse);

      const result = await loginUsuario('juan@correo.com', 'password123');

      expect(axiosClient.post).toHaveBeenCalledWith('/usuarios/login', {
        correo: 'juan@correo.com',
        contrasenaVal: 'password123',
      });
      expect(result).toEqual(mockResponse.data);
    });

    it('debe lanzar un error estructurado cuando las credenciales son incorrectas', async () => {
      const mockError = {
        response: {
          data: 'Credenciales inválidas',
        },
      };
      axiosClient.post.mockRejectedValueOnce(mockError);

      await expect(loginUsuario('juan@correo.com', 'incorrecto')).rejects.toThrow(
        'Credenciales inválidas'
      );
    });

    it('debe lanzar un mensaje genérico por defecto si la respuesta de error no tiene cuerpo', async () => {
      const mockError = new Error('Conexión fallida');
      axiosClient.post.mockRejectedValueOnce(mockError);

      await expect(loginUsuario('juan@correo.com', 'password123')).rejects.toThrow(
        'Correo o contraseña incorrectos'
      );
    });
  });

  describe('registrarUsuario', () => {
    it('debe registrar un nuevo usuario con éxito y retornar los datos registrados', async () => {
      const nuevoUsuario = { nombre: 'Pedro', correo: 'pedro@correo.com', contrasena: '123' };
      const mockResponse = { data: { id: 2, ...nuevoUsuario } };
      axiosClient.post.mockResolvedValueOnce(mockResponse);

      const result = await registrarUsuario(nuevoUsuario);

      expect(axiosClient.post).toHaveBeenCalledWith('/usuarios', nuevoUsuario);
      expect(result).toEqual(mockResponse.data);
    });

    it('debe lanzar un error estructurado si el registro falla por duplicidad o validación', async () => {
      const mockError = {
        response: {
          data: 'El correo electrónico ya se encuentra registrado',
        },
      };
      axiosClient.post.mockRejectedValueOnce(mockError);

      await expect(registrarUsuario({ correo: 'dup@correo.com' })).rejects.toThrow(
        'El correo electrónico ya se encuentra registrado'
      );
    });

    it('debe lanzar un error genérico por defecto ante fallas inesperadas de red en el registro', async () => {
      axiosClient.post.mockRejectedValueOnce(new Error('No response'));

      await expect(registrarUsuario({ correo: 'dup@correo.com' })).rejects.toThrow(
        'Error al registrar el usuario'
      );
    });
  });
});
