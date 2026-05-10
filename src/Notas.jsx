import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/estilos.css';

const Notas = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [cursoInfo, setCursoInfo] = useState({ nombre: '', semestre: '' });

    useEffect(() => {

        const mockData = [
            { id: 1, nombre: "Juan Pérez", nota1: 5.5, nota2: 6.0, nota3: 4.5, promedio: 5.3, estado: "Aprobado" },
            { id: 2, nombre: "María García", nota1: 3.5, nota2: 4.0, nota3: 3.8, promedio: 3.8, estado: "Reprobado" }
        ];
        setAlumnos(mockData);
        setCursoInfo({ nombre: "Ingeniería de Software", semestre: "Primer Semestre 2026" });
    }, []);

    const handleGradeChange = (id, field, value) => {
        const updatedAlumnos = alumnos.map(alumno => {
            if (alumno.id === id) {
                return { ...alumno, [field]: value };
            }
            return alumno;
        });
        setAlumnos(updatedAlumnos);
    };

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Encabezado */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-[#00113a] font-headline">
                            Gestión de Calificaciones
                        </h1>
                        <p className="text-[#444650] mt-1">
                            {cursoInfo.nombre} • {cursoInfo.semestre}
                        </p>
                    </div>
                    <button className="btn-gradient flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all">
                        <span className="material-symbols-outlined">save</span>
                        Guardar Cambios
                    </button>
                </div>

                {/* Tabla de Notas */}
                <div className="bg-white rounded-2xl shadow-ambient overflow-hidden border border-[#c5c6d2]">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#f3f4f5] border-b border-[#c5c6d2]">
                                    <th className="px-6 py-4 text-left text-sm font-bold text-[#00174a]">Estudiante</th>
                                    <th className="px-4 py-4 text-center text-sm font-bold text-[#00174a]">Nota 1</th>
                                    <th className="px-4 py-4 text-center text-sm font-bold text-[#00174a]">Nota 2</th>
                                    <th className="px-4 py-4 text-center text-sm font-bold text-[#00174a]">Nota 3</th>
                                    <th className="px-4 py-4 text-center text-sm font-bold text-[#00174a]">Promedio</th>
                                    <th className="px-6 py-4 text-center text-sm font-bold text-[#00174a]">Estado</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#edeeef]">
                                {alumnos.map((alumno) => (
                                    <tr key={alumno.id} className="hover:bg-[#f8f9fa] transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="font-medium text-[#191c1d]">{alumno.nombre}</span>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <input
                                                type="number"
                                                step="0.1"
                                                value={alumno.nota1}
                                                onChange={(e) => handleGradeChange(alumno.id, 'nota1', e.target.value)}
                                                className="grade-input w-16 px-2 py-1 border border-[#c5c6d2] rounded-lg text-center font-semibold text-[#00113a]"
                                            />
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <input
                                                type="number"
                                                step="0.1"
                                                value={alumno.nota2}
                                                onChange={(e) => handleGradeChange(alumno.id, 'nota2', e.target.value)}
                                                className="grade-input w-16 px-2 py-1 border border-[#c5c6d2] rounded-lg text-center font-semibold text-[#00113a]"
                                            />
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <input
                                                type="number"
                                                step="0.1"
                                                value={alumno.nota3}
                                                onChange={(e) => handleGradeChange(alumno.id, 'nota3', e.target.value)}
                                                className="grade-input w-16 px-2 py-1 border border-[#c5c6d2] rounded-lg text-center font-semibold text-[#00113a]"
                                            />
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <span className="text-lg font-bold text-[#00113a]">
                                                {alumno.promedio}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                                alumno.promedio >= 4.0 ? 'nota-aprobado' : 'nota-reprobado'
                                            }`}>
                                                {alumno.promedio >= 4.0 ? 'Aprobado' : 'Reprobado'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notas;