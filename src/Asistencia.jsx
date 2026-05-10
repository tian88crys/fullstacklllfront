import React, { useState, useEffect } from 'react';
import { registrarAsistencia } from './Api/asistenciaService';
import './Styles/estilos.css';

const Asistencia = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [stats, setStats] = useState({ presentes: 0, ausentes: 0, atrasos: 0 });
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        const mockAlumnos = [
            { rut: '21.458.324-K', nombre: 'Alvarado Arancibia, Antonia', estado: 'P' },
            { rut: '22.102.873-4', nombre: 'Bustamante Cárcamo, Claudio', estado: 'A' },
            { rut: '21.994.002-1', nombre: 'Díaz Morales, Marcela', estado: 'P' }
        ];
        setAlumnos(mockAlumnos);
    }, []);

    useEffect(() => {
        const p = alumnos.filter(a => a.estado === 'P').length;
        const a = alumnos.filter(a => a.estado === 'A').length;
        const at = alumnos.filter(a => a.estado === 'At').length;
        setStats({ presentes: p, ausentes: a, atrasos: at });
    }, [alumnos]);

    const handleEstadoChange = (rut, nuevoEstado) => {
        setAlumnos(alumnos.map(al => al.rut === rut ? { ...al, estado: nuevoEstado } : al));
    };

    const handleGuardar = async () => {
        try {
            await Promise.all(alumnos.map(al => 
                registrarAsistencia({ rut: al.rut, fecha: fecha, estado: al.estado })
            ));
            alert("Asistencia guardada con éxito en Oracle Cloud");
        } catch (error) {
            alert("Error al conectar con el microservicio de Asistencia");
        }
    };

    return (
        <div className="md:pl-64 min-h-screen bg-surface">
            <main className="p-8 space-y-8 max-w-7xl mx-auto">
                <section>
                    <h2 className="font-headline font-bold text-3xl text-primary tracking-tight">Control de Asistencia</h2>
                    <p className="text-on-surface-variant font-medium">Registro diario Colegio Bernardo O’Higgins</p>
                </section>

                {/* Widgets de Estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-primary p-6 rounded-xl text-white shadow-ambient">
                        <span className="text-xs font-bold uppercase tracking-widest opacity-80">Presentes</span>
                        <div className="text-4xl font-extrabold">{stats.presentes}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-error shadow-ambient">
                        <span className="text-xs font-bold uppercase tracking-widest text-outline">Ausentes</span>
                        <div className="text-4xl font-extrabold text-primary">{stats.ausentes}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-ambient">
                        <span className="text-xs font-bold uppercase tracking-widest text-outline">Atrasos</span>
                        <div className="text-4xl font-extrabold text-primary">{stats.atrasos}</div>
                    </div>
                </div>

                {/* Tabla de Registro */}
                <section className="bg-white rounded-xl shadow-ambient border border-outline-variant/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-surface-container-low/20 text-[10px] uppercase tracking-widest text-outline">
                                <tr>
                                    <th className="px-8 py-4">RUT</th>
                                    <th className="px-8 py-4">Estudiante</th>
                                    <th className="px-8 py-4 text-center">Estado (P/A/At/J)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/10">
                                {alumnos.map((al) => (
                                    <tr key={al.rut} className="hover:bg-surface-container-low transition-colors">
                                        <td className="px-8 py-5 font-mono text-xs">{al.rut}</td>
                                        <td className="px-8 py-5 font-semibold text-primary">{al.nombre}</td>
                                        <td className="px-8 py-5">
                                            <div className="flex justify-center gap-2 bg-surface-container-low p-1 rounded-full w-fit mx-auto">
                                                {['P', 'A', 'At', 'J'].map((est) => (
                                                    <label key={est} className="cursor-pointer">
                                                        <input 
                                                            type="radio" 
                                                            name={`st-${al.rut}`} 
                                                            className="sr-only peer"
                                                            checked={al.estado === est}
                                                            onChange={() => handleEstadoChange(al.rut, est)}
                                                        />
                                                        <div className={`state-btn state-${est.toLowerCase()}`}>{est}</div>
                                                    </label>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-8 border-t flex justify-end bg-surface-container-low/10">
                        <button onClick={handleGuardar} className="btn-gradient px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg active:scale-95 transition-all">
                            <span className="material-symbols-outlined">save</span>
                            Guardar Registro
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Asistencia;