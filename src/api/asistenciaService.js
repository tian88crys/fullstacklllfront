import axios from 'axios';

const API_URL = "http://localhost:8083/api/asistencia";

export const registrarAsistencia = async (datosAsistencia) => {
    try {
        const response = await axios.post(API_URL, datosAsistencia);
        return response.data;
    } catch (error) {
        throw new Error("Error al registrar la asistencia");
    }
};