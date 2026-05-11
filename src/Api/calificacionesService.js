import axios from 'axios';

const API_URL = "http://localhost:8082/api/calificaciones";

export const getNotasByEstudiante = async (idEstudiante) => {
    try {
        const response = await axios.get(`${API_URL}/estudiante/${idEstudiante}`);
        return response.data;
    } catch (error) {
        throw new Error("Error al obtener las calificaciones");
    }
};