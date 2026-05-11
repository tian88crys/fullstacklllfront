import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotificationContext } from "../contexts/NotificationContext";
import useNotificationObserver from "../hooks/useNotificationObserver";

const Asistencia = () => {
    // Suscripción al stream de eventos
    useNotificationObserver(1);
    const { unreadCount, notifications, markAllAsRead, addNotification } = useContext(NotificationContext);
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    // Datos iniciales de los 3 estudiantes
    const initialStudents = [
        { id: 1, rut: "21.458.324-K", name: "Alvarado Arancibia, Antonia", initials: "AA", status: "P" },
        { id: 2, rut: "22.102.873-4", name: "Bustamante Cárcamo, Claudio", initials: "BC", status: "A" },
        { id: 3, rut: "21.994.002-1", name: "Díaz Morales, Marcela", initials: "DM", status: "P" }
    ];

    const [students, setStudents] = useState(initialStudents);
    const [isSaving, setIsSaving] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Cargar datos de localStorage
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('colegio-asistencia')) || {};
        if (Object.keys(savedData).length > 0) {
            const updatedStudents = initialStudents.map((student, idx) => {
                const rut = student.rut;
                if (savedData[rut] !== undefined) {
                    const statusMap = { 0: 'P', 1: 'A', 2: 'At', 3: 'J' };
                    return { ...student, status: statusMap[savedData[rut]] || 'P' };
                }
                return student;
            });
            setStudents(updatedStudents);
        }
    }, []);

    const handleStatusChange = (studentId, newStatus) => {
        setStudents(prev => prev.map(student => {
            if (student.id === studentId) {
                return { ...student, status: newStatus };
            }
            return student;
        }));
    };

    const handleSave = () => {
        setIsSaving(true);
        const dataToSave = {};
        const statusReverseMap = { 'P': 0, 'A': 1, 'At': 2, 'J': 3 };
        
        students.forEach(student => {
            dataToSave[student.rut] = statusReverseMap[student.status];
        });
        
        localStorage.setItem('colegio-asistencia', JSON.stringify(dataToSave));
        
        addNotification({
            type: 'SYSTEM',
            message: 'Registro de asistencia actualizado y guardado correctamente.',
            notaId: null
        });
        
        setShowToast(true);
        
        setTimeout(() => {
            setShowToast(false);
        }, 3000);

        setTimeout(() => {
            setIsSaving(false);
        }, 2000);
    };

    // Calcular estadísticas
    const total = students.length;
    const presentes = students.filter(s => s.status === 'P').length;
    const ausentes = students.filter(s => s.status === 'A').length;
    const atrasos = students.filter(s => s.status === 'At').length;

    const presentesPorcentaje = total > 0 ? ((presentes / total) * 100).toFixed(1) : 0;
    const ausentesPorcentaje = total > 0 ? ((ausentes / total) * 100).toFixed(1) : 0;
    const atrasosPorcentaje = total > 0 ? ((atrasos / total) * 100).toFixed(1) : 0;

    return (
        <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
            {/* SideNavBar Shell */}
            <aside className="h-screen w-64 fixed left-0 top-0 bg-[#002366] dark:bg-[#0d141c] flex flex-col py-8 z-40 hidden md:flex">
                <div className="px-6 mb-10 flex items-center gap-4">
                    <img alt="Prof. Juan Pérez" className="w-12 h-12 rounded-full border-2 border-secondary/30"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu_MoDGK-8JENcmplS8NMCkfPfORmYMLSkImjcZKlHK0dOQZ8ETdO_e2Yc1vaoPehuWo8lX-vSA03pGoxFtPr-YragfgmQWRd-tAdUjSGOV4mRV3vZkVU7iBh7EnbqZmn3gyhTxotmc2TtA93zE0lOAQgVxKqE1YpwyVA4el7Mk5k4hU6oFsCJvbdH01IdGMQS2Nbe4VcK2ZxXX5L_YXL90MkL_XDtjfXx0lxvfIr-hCeeabo2ArzKUDQ10clom2NJ6OSEYxJWijdF" />
                    <div className="overflow-hidden">
                        <p className="text-white font-medium text-sm truncate">Juan Pérez</p>
                        <p className="text-slate-300 text-xs opacity-80 truncate">Docente de Matemáticas</p>
                    </div>
                </div>
                <nav className="flex-1 space-y-1">
                    <Link className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/dashboard">
                        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                        <span className="font-inter font-medium text-sm tracking-wide">Dashboard</span>
                    </Link>
                    <Link className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/cursos">
                        <span className="material-symbols-outlined" data-icon="school">school</span>
                        <span className="font-inter font-medium text-sm tracking-wide">Mis Cursos</span>
                    </Link>
                    <Link className="flex items-center gap-3 text-white border-l-4 border-[#745b00] bg-white/10 px-6 py-4 transition-all translate-x-1"
                        to="/asistencia">
                        <span className="material-symbols-outlined text-secondary" data-icon="fact_check" style={{ fontVariationSettings: "'FILL' 1" }}>fact_check</span>
                        <span className="font-inter font-medium text-sm tracking-wide">Asistencia</span>
                    </Link>
                    <Link className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/notas">
                        <span className="material-symbols-outlined" data-icon="grade">grade</span>
                        <span className="font-inter font-medium text-sm tracking-wide">Notas</span>
                    </Link>
                    <a className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        href="#">
                        <span className="material-symbols-outlined" data-icon="mail">mail</span>
                        <span className="font-inter font-medium text-sm tracking-wide">Mensajes</span>
                    </a>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="md:pl-64 min-h-screen pb-20">
                <header className="bg-white/80 backdrop-blur-md flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 shadow-sm shadow-slate-200/50">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary md:hidden" data-icon="menu">menu</span>
                        <h1 className="text-xl font-bold tracking-tight text-[#00113a] font-manrope">Colegio Bernardo O’Higgins</h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full gap-2 border border-outline-variant/20">
                            <span className="material-symbols-outlined text-outline text-sm" data-icon="search">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Buscar..." type="text" />
                        </div>
                        <div className="flex items-center gap-2 relative">
                            <button 
                                onClick={() => {
                                    setShowNotifications(!showNotifications);
                                    if (unreadCount > 0) markAllAsRead();
                                }}
                                className="p-2 text-slate-600 hover:bg-slate-100 transition-colors rounded-full relative"
                            >
                                <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                                {unreadCount > 0 && (
                                    <span className="absolute top-0 right-0 w-4 h-4 bg-secondary text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                        {unreadCount > 9 ? '9+' : unreadCount}
                                    </span>
                                )}
                            </button>
                            
                            {/* Dropdown de Notificaciones */}
                            {showNotifications && (
                                <div className="absolute top-12 right-0 w-80 bg-white shadow-xl rounded-xl border border-outline-variant/20 z-50 overflow-hidden origin-top-right animate-in fade-in zoom-in duration-200">
                                    <div className="p-4 bg-surface-container-lowest border-b border-outline-variant/10 flex justify-between items-center">
                                        <h3 className="font-bold text-sm text-primary font-headline">Notificaciones</h3>
                                    </div>
                                    <div className="max-h-80 overflow-y-auto">
                                        {notifications.length === 0 ? (
                                            <div className="p-6 text-center text-sm text-on-surface-variant">
                                                No hay notificaciones
                                            </div>
                                        ) : (
                                            notifications.map((notif, idx) => (
                                                <div key={idx} className="p-4 border-b border-outline-variant/5 hover:bg-surface-container-lowest transition-colors flex gap-3 items-start">
                                                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                                                        <span className="material-symbols-outlined text-on-secondary-container text-sm">grade</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-primary leading-tight">{notif.message}</p>
                                                        <span className="text-[10px] text-on-surface-variant mt-1 block font-medium">Reciente</span>
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    <div className="p-3 bg-surface-container-lowest border-t border-outline-variant/10 text-center">
                                        <button className="text-xs font-bold text-secondary hover:text-primary transition-colors">Ver todas</button>
                                    </div>
                                </div>
                            )}

                            <button className="p-2 text-slate-600 hover:bg-slate-100 transition-colors rounded-full">
                                <span className="material-symbols-outlined" data-icon="settings">settings</span>
                            </button>
                            <div className="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>
                            <div className="flex items-center gap-3 pl-2">
                                <img alt="Prof. Juan Pérez" className="w-8 h-8 rounded-full"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMccHPVlSRe8ajkQcm4zoYF8l5fC9YMdk9qVfQQRLsgrb-zmTBSgN5MarkiGD-DkSqSOYNhZbeVhFKa8pYzhvdZxj7ayBgMkHmmwzVA-PVmsM0VNKY7zSW6OHq8SlhQFxz5PFiahIRyeses3ctWEI73SuIKaNu-QzQ8njjtEaYU_OhiDcJ1gzC6RRIkT52tXuZ2dsKNP4RhVOCaEyngVpif6qQkMLUfI9w_gKAHZv-kCmbG6Jot_W8QEBE_RD8t8yypPHattMcajjc" />
                                <span className="text-primary font-bold font-manrope text-sm hidden sm:inline">Prof. Juan Pérez</span>
                                <span className="material-symbols-outlined text-slate-400 hover:text-red-500 cursor-pointer transition-colors" data-icon="logout" onClick={handleLogout}>logout</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-8 space-y-8 max-w-7xl mx-auto">
                    <section className="space-y-1">
                        <h2 className="font-headline font-bold text-3xl text-primary tracking-tight">Control de Asistencia</h2>
                        <p className="text-on-surface-variant font-medium">Gestiona el registro diario de tus estudiantes.</p>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Filtros */}
                        <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 space-y-4">
                            <h3 className="font-headline font-bold text-lg text-primary flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-secondary">filter_list</span>
                                Parámetros de Clase
                            </h3>
                            <div className="space-y-4">
                                <div className="group">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Curso</label>
                                    <div className="relative">
                                        <select className="w-full bg-surface-container-low border-none rounded-lg py-3 pl-4 pr-10 text-sm font-semibold text-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                                            <option>2º Medio A</option>
                                            <option>2º Medio B</option>
                                            <option>1º Medio C</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Asignatura</label>
                                    <div className="relative">
                                        <select className="w-full bg-surface-container-low border-none rounded-lg py-3 pl-4 pr-10 text-sm font-semibold text-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                                            <option>Matemáticas</option>
                                            <option>Física</option>
                                            <option>Álgebra</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Fecha</label>
                                    <div className="relative">
                                        <input className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 text-sm font-semibold text-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                            type="date" defaultValue="2024-05-24" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-primary p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between text-white relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="z-10 flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-full bg-white/10">
                                        <span className="material-symbols-outlined">groups</span>
                                    </div>
                                    <span className="font-bold text-3xl">{total}</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="font-headline font-bold text-sm uppercase tracking-widest opacity-80">Total Alumnos</h4>
                                </div>
                                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                                </div>
                            </div>

                            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-md transition-shadow border-l-4 border-green-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-full bg-green-50 text-green-600">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    </div>
                                    <span className="text-primary font-bold text-3xl">{presentes}</span>
                                </div>
                                <div>
                                    <h3 className="font-headline font-bold text-sm text-primary uppercase tracking-widest opacity-60">Presentes</h3>
                                    <p className="text-green-600 text-[10px] font-bold mt-1">{presentesPorcentaje}% Asistencia</p>
                                </div>
                            </div>

                            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-md transition-shadow border-l-4 border-error">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-full bg-red-50 text-error">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                                    </div>
                                    <span className="text-primary font-bold text-3xl">{ausentes}</span>
                                </div>
                                <div>
                                    <h3 className="font-headline font-bold text-sm text-primary uppercase tracking-widest opacity-60">Ausentes</h3>
                                    <p className="text-error text-[10px] font-bold mt-1">{ausentesPorcentaje}% Inasistencia</p>
                                </div>
                            </div>

                            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-md transition-shadow border-l-4 border-amber-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-full bg-amber-50 text-amber-500">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                                    </div>
                                    <span className="text-primary font-bold text-3xl">{atrasos}</span>
                                </div>
                                <div>
                                    <h3 className="font-headline font-bold text-sm text-primary uppercase tracking-widest opacity-60">Atrasos</h3>
                                    <p className="text-amber-600 text-[10px] font-bold mt-1">{atrasosPorcentaje}% Puntualidad</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
                        <div className="px-8 py-5 flex justify-between items-center bg-surface-container-low/30 border-b border-outline-variant/10">
                            <div className="flex items-center gap-4">
                                <h2 className="font-headline font-extrabold text-primary text-lg">Listado de Estudiantes</h2>
                                <div className="flex gap-2">
                                    <span className="bg-primary/5 text-primary text-[10px] px-2 py-1 rounded font-bold uppercase">2º Medio A</span>
                                    <span className="bg-amber-500/10 text-amber-700 text-[10px] px-2 py-1 rounded font-bold uppercase">Matemáticas</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-primary hover:bg-surface-container-high transition-colors rounded-lg">
                                    <span className="material-symbols-outlined text-lg">download</span>
                                    Exportar Informe
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-low/20 text-on-surface-variant font-bold text-[10px] uppercase tracking-[0.15em]">
                                        <th className="px-8 py-4 w-48">RUT</th>
                                        <th className="px-8 py-4">Nombre Estudiante</th>
                                        <th className="px-8 py-4 text-center">Registro de Estado</th>
                                        <th className="px-8 py-4 text-right">Observación</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10 text-sm">
                                    {students.map(student => (
                                        <tr key={student.id} className="hover:bg-surface-container-low transition-colors group">
                                            <td className="px-8 py-5 font-mono text-slate-500">{student.rut}</td>
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center font-bold text-primary text-[10px]">
                                                        {student.initials}
                                                    </div>
                                                    <span className="font-semibold text-primary">{student.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="flex justify-center items-center gap-1 p-1 bg-surface-container-low rounded-full w-fit mx-auto">
                                                    {[
                                                        { val: 'P', bg: 'peer-checked:bg-green-600' },
                                                        { val: 'A', bg: 'peer-checked:bg-error' },
                                                        { val: 'At', bg: 'peer-checked:bg-amber-500' },
                                                        { val: 'J', bg: 'peer-checked:bg-blue-500' }
                                                    ].map(op => (
                                                        <label key={op.val} className="cursor-pointer relative">
                                                            <input 
                                                                type="radio" 
                                                                name={`st-${student.id}`} 
                                                                className="sr-only peer"
                                                                checked={student.status === op.val}
                                                                onChange={() => handleStatusChange(student.id, op.val)}
                                                            />
                                                            <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs transition-all ${op.bg} peer-checked:text-white text-slate-500 hover:bg-slate-200`}>
                                                                {op.val}
                                                            </div>
                                                        </label>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <button className="text-slate-400 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined text-xl">chat_bubble</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-8 border-t border-outline-variant/10 flex justify-end items-center bg-surface-container-low/20">
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-medium text-slate-500">{students.length} de {students.length} registros completados</span>
                                <button 
                                    onClick={handleSave}
                                    className="bg-primary hover:bg-[#002366] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-primary/20 active:scale-95"
                                >
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        {isSaving ? 'check' : 'save'}
                                    </span>
                                    {isSaving ? 'Guardado' : 'Guardar Registro de Asistencia'}
                                </button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* Mobile Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant/10 h-16 flex items-center justify-around px-4 z-50">
                <Link className="flex flex-col items-center text-slate-600" to="/dashboard">
                    <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    <span className="text-[10px]">Dashboard</span>
                </Link>
                <Link className="flex flex-col items-center text-slate-600" to="/cursos">
                    <span className="material-symbols-outlined" data-icon="school">school</span>
                    <span className="text-[10px]">Cursos</span>
                </Link>
                <Link className="flex flex-col items-center text-[#745b00] font-bold" to="/asistencia">
                    <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
                    <span className="text-[10px]">Asistencia</span>
                </Link>
                <Link className="flex flex-col items-center text-slate-600" to="/notas">
                    <span className="material-symbols-outlined" data-icon="grade">grade</span>
                    <span className="text-[10px]">Notas</span>
                </Link>
            </nav>

            {/* Toast Notification */}
            <div className={`fixed bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl z-[100] flex items-center gap-3 transition-all duration-500 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 
                <span className="font-bold font-inter">Asistencia registrada</span>
            </div>
        </div>
    );
};

export default Asistencia;
