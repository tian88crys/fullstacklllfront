import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotificationContext } from "../contexts/NotificationContext";
import useNotificationObserver from "../hooks/useNotificationObserver";

const Notas = () => {
    // Suscripción al stream de eventos (simulado con userId = 1)
    useNotificationObserver(1);
    const { updatedGrades, unreadCount, notifications, markAllAsRead, addNotification } = useContext(NotificationContext);
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    // Mock data based on notas.html
    const initialStudents = [
        { id: 1, rut: "19.234.567-K", name: "Alarcón Soto, María Paz", grades: ["6.5", "7.0", "6.8"], attendance: "98%" },
        { id: 2, rut: "20.112.345-3", name: "Bravo Méndez, Joaquín", grades: ["4.2", "3.5", "4.0"], attendance: "85%" },
        { id: 3, rut: "19.887.654-1", name: "Cáceres Silva, Antonia", grades: ["5.8", "6.1", ""], attendance: "100%" },
        { id: 4, rut: "20.554.212-0", name: "Díaz Orellana, Ricardo", grades: ["6.9", "6.7", "7.0"], attendance: "92%" },
        { id: 5, rut: "19.992.334-9", name: "Espinoza Cruz, Valentina", grades: ["5.5", "5.2", "5.4"], attendance: "95%" }
    ];

    const [students, setStudents] = useState(initialStudents);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('colegio-grades')) || {};
        if (Object.keys(savedData).length > 0) {
            const updatedStudents = initialStudents.map(student => {
                if (savedData[student.rut]) {
                    return { ...student, grades: savedData[student.rut] };
                }
                return student;
            });
            setStudents(updatedStudents);
        }
    }, []);

    const handleGradeChange = (studentId, gradeIndex, value) => {
        let val = value.replace(',', '.').replace(/[^0-9.]/g, '');
        const parts = val.split('.');
        if (parts.length > 2) val = parts[0] + '.' + parts.slice(1).join('').replace(/\./g, '');
        if (parts.length === 2 && parts[1].length > 1) val = parts[0] + '.' + parts[1].substring(0, 1);
        if (val !== '' && parseFloat(val) > 7.0) val = "7.0";

        setStudents(prev => prev.map(student => {
            if (student.id === studentId) {
                const newGrades = [...student.grades];
                newGrades[gradeIndex] = val;
                return { ...student, grades: newGrades };
            }
            return student;
        }));
    };

    const handleGradeBlur = (studentId, gradeIndex, value) => {
        let finalVal = value;
        if (value !== '') {
            let num = parseFloat(value);
            if (isNaN(num)) {
                finalVal = '';
            } else {
                if (num < 1.0) num = 1.0;
                if (num > 7.0) num = 7.0;
                finalVal = num.toFixed(1);
            }
        }

        setStudents(prev => prev.map(student => {
            if (student.id === studentId) {
                const newGrades = [...student.grades];
                newGrades[gradeIndex] = finalVal;
                return { ...student, grades: newGrades };
            }
            return student;
        }));
    };

    const calculateAverages = (grades) => {
        let sum = 0;
        let count = 0;
        grades.forEach(grade => {
            const val = parseFloat(grade);
            if (!isNaN(val)) {
                sum += val;
                count++;
            }
        });
        if (count > 0) {
            return (sum / count).toFixed(1);
        }
        return null;
    };

    const handleSave = () => {
        setIsSaving(true);
        const dataToSave = {};
        students.forEach(student => {
            dataToSave[student.rut] = student.grades;
        });
        localStorage.setItem('colegio-grades', JSON.stringify(dataToSave));
        
        addNotification({
            type: 'SYSTEM',
            message: 'Calificaciones guardadas y sincronizadas exitosamente.',
            notaId: null
        });
        
        setTimeout(() => {
            setIsSaving(false);
        }, 2000);
    };

    return (
        <div className="bg-surface font-body text-on-surface antialiased">
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
                    <Link className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/asistencia">
                        <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
                        <span className="font-inter font-medium text-sm tracking-wide">Asistencia</span>
                    </Link>
                    <Link className="flex items-center gap-3 text-white border-l-4 border-[#745b00] bg-white/10 px-6 py-4 transition-all translate-x-1"
                        to="/notas">
                        <span className="material-symbols-outlined" data-icon="grade">grade</span>
                        <span className="font-inter font-medium text-sm tracking-wide">Notas</span>
                    </Link>
                    <Link className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/mensajes">
                        <span className="material-symbols-outlined" data-icon="mail">mail</span>
                        <span className="font-inter font-medium text-sm tracking-wide">Mensajes</span>
                    </Link>
                </nav>
            </aside>

            {/* Main Content Wrapper */}
            <div className="md:pl-64 min-h-screen">
                <header className="bg-white/80 backdrop-blur-md flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 shadow-sm shadow-slate-200/50">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-primary md:hidden" data-icon="menu">menu</span>
                        <h1 className="text-xl font-bold tracking-tight text-[#00113a] font-manrope">Colegio Bernardo O’Higgins</h1>
                        <span className="h-4 w-px bg-slate-200 hidden md:block"></span>
                        <h2 className="font-headline font-bold text-lg text-primary tracking-tight hidden md:block">Gestión de Notas</h2>
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
                    <div className="flex justify-between items-end">
                        <div>
                            <nav className="flex text-xs font-medium text-on-surface-variant mb-2 gap-2">
                                <span>Dashboard</span><span>/</span><span>Mis Cursos</span><span>/</span>
                                <span className="text-primary font-bold">2º Medio A</span>
                            </nav>
                            <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">Matemáticas <span className="text-secondary font-medium">·</span> 2º Medio A</h2>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/20 shadow-sm text-sm font-semibold text-primary hover:bg-surface-container-low transition-all">
                                <span className="material-symbols-outlined text-lg" data-icon="download">download</span> Exportar a Excel
                            </button>
                            <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-br from-primary to-primary-container text-white shadow-md text-sm font-semibold hover:opacity-90 transition-all active:scale-95">
                                <span className="material-symbols-outlined text-lg" data-icon="save">{isSaving ? 'check' : 'save'}</span>
                                {isSaving ? 'Guardado' : 'Guardar Cambios'}
                            </button>
                        </div>
                    </div>

                    <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary text-white font-headline text-xs uppercase tracking-widest">
                                        <th className="px-6 py-5 font-bold">RUT</th>
                                        <th className="px-6 py-5 font-bold">Estudiante</th>
                                        <th className="px-4 py-5 font-bold text-center bg-white/10">Nota 1</th>
                                        <th className="px-4 py-5 font-bold text-center bg-white/10">Nota 2</th>
                                        <th className="px-4 py-5 font-bold text-center bg-white/10">Nota 3</th>
                                        <th className="px-6 py-5 font-bold text-center">Prom. Parcial</th>
                                        <th className="px-6 py-5 font-bold text-center">Prom. Final</th>
                                        <th className="px-6 py-5 font-bold text-center">Asist.</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {students.map((student) => {
                                        const avg = calculateAverages(student.grades);
                                        const isFailing = avg !== null && parseFloat(avg) < 4.0;
                                        
                                        // Efecto de resaltado si el evento llegó con el id del estudiante (o nota simulada)
                                        const isUpdated = updatedGrades.includes(student.id);

                                        return (
                                            <tr key={student.id} className={`${isUpdated ? 'bg-green-100 transition-all duration-700' : 'hover:bg-slate-50'} transition-colors group`}>
                                                <td className="px-6 py-4 text-xs font-mono text-on-surface-variant">{student.rut}</td>
                                                <td className="px-6 py-4 font-body font-semibold text-sm text-primary">{student.name}</td>
                                                {student.grades.map((grade, idx) => (
                                                    <td key={idx} className="px-4 py-4 text-center">
                                                        <input
                                                            className={`grade-input w-12 text-center bg-surface-container-low border-0 rounded-md py-1.5 text-sm font-bold focus:ring-2 ${parseFloat(grade) < 4.0 && grade !== '' ? 'bg-error-container/30 text-error focus:ring-error' : 'focus:ring-primary text-primary'} transition-all group-hover:bg-white`}
                                                            type="text"
                                                            value={grade}
                                                            onChange={(e) => handleGradeChange(student.id, idx, e.target.value)}
                                                            onBlur={(e) => handleGradeBlur(student.id, idx, e.target.value)}
                                                        />
                                                    </td>
                                                ))}
                                                <td className="px-6 py-4 text-center font-bold text-primary">{avg || '--'}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-tight ${avg ? (isFailing ? 'bg-error-container text-error' : 'bg-secondary-container text-on-secondary-container') : 'bg-surface-container text-on-surface-variant'}`}>
                                                        {avg || 'PND.'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-xs font-medium text-slate-400 italic">{student.attendance}</span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
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
                <Link className="flex flex-col items-center text-slate-600" to="/asistencia">
                    <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
                    <span className="text-[10px]">Asistencia</span>
                </Link>
                <Link className="flex flex-col items-center text-[#745b00] font-bold" to="/notas">
                    <span className="material-symbols-outlined" data-icon="grade">grade</span>
                    <span className="text-[10px]">Notas</span>
                </Link>
                <Link className="flex flex-col items-center text-slate-600" to="/mensajes">
                    <span className="material-symbols-outlined" data-icon="mail">mail</span>
                    <span className="text-[10px]">Mensajes</span>
                </Link>
            </nav>
        </div>
    );
};

export default Notas;
