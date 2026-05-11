import axiosClient from './axiosClient';

const API_URL = "/usuarios";

export async function loginUsuario(email, password) {
  try {
    const response = await axiosClient.post(`${API_URL}/login`, {
      correo: email,
      contrasenaVal: password
    });

    return response.data; 
  } catch (error) {
    const errorMessage = error.response?.data || "Correo o contraseña incorrectos";
    throw new Error(errorMessage);
  }
}

export async function registrarUsuario(usuario) {
  try {
    const response = await axiosClient.post(API_URL, usuario);
    
    return response.data;
  } catch (error) {
    const msg = error.response?.data || "Error al registrar el usuario";
    throw new Error(msg);
  }
}