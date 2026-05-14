import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NotificationContext } from "../contexts/NotificationContext";
import useNotificationObserver from "../hooks/useNotificationObserver";

const Dashboard = () => {
    // Suscripción al stream de eventos (simulado con userId = 1)
    useNotificationObserver(1);
    const { unreadCount, notifications, markAllAsRead } = useContext(NotificationContext);
    const [showNotifications, setShowNotifications] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };
    return (
        <div className="bg-surface font-body text-on-surface antialiased">
            {/* SideNavBar Shell */}
            <aside className="h-screen w-64 fixed left-0 top-0 bg-[#002366] dark:bg-[#0d141c] flex flex-col py-8 z-40 hidden md:flex">
                {/* Header Profile */}
                <div className="px-6 mb-10 flex items-center gap-4">
                    <img
                        alt="Prof. Juan Pérez"
                        className="w-12 h-12 rounded-full border-2 border-secondary/30"
                        data-alt="portrait of a professional mature male teacher with a friendly expression in a formal blue shirt"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu_MoDGK-8JENcmplS8NMCkfPfORmYMLSkImjcZKlHK0dOQZ8ETdO_e2Yc1vaoPehuWo8lX-vSA03pGoxFtPr-YragfgmQWRd-tAdUjSGOV4mRV3vZkVU7iBh7EnbqZmn3gyhTxotmc2TtA93zE0lOAQgVxKqE1YpwyVA4el7Mk5k4hU6oFsCJvbdH01IdGMQS2Nbe4VcK2ZxXX5L_YXL90MkL_XDtjfXx0lxvfIr-hCeeabo2ArzKUDQ10clom2NJ6OSEYxJWijdF"
                    />
                    <div className="overflow-hidden">
                        <p className="text-white font-medium text-sm truncate">Juan Pérez</p>
                        <p className="text-slate-300 text-xs opacity-80 truncate">
                            Docente de Matemáticas
                        </p>
                    </div>
                </div>
                {/* Main Navigation */}
                <nav className="flex-1 space-y-1">
                    <Link
                        className="flex items-center gap-3 text-white border-l-4 border-[#745b00] bg-white/10 px-6 py-4 transition-all translate-x-1"
                        to="/dashboard"
                    >
                        <span className="material-symbols-outlined" data-icon="dashboard">
                            dashboard
                        </span>
                        <span className="font-inter font-medium text-sm tracking-wide">
                            Dashboard
                        </span>
                    </Link>
                    <Link
                        className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/cursos"
                    >
                        <span className="material-symbols-outlined" data-icon="school">
                            school
                        </span>
                        <span className="font-inter font-medium text-sm tracking-wide">
                            Mis Cursos
                        </span>
                    </Link>
                    <Link
                        className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/asistencia"
                    >
                        <span className="material-symbols-outlined" data-icon="fact_check">
                            fact_check
                        </span>
                        <span className="font-inter font-medium text-sm tracking-wide">
                            Asistencia
                        </span>
                    </Link>
                    <Link
                        className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/notas"
                    >
                        <span className="material-symbols-outlined" data-icon="grade">
                            grade
                        </span>
                        <span className="font-inter font-medium text-sm tracking-wide">
                            Notas
                        </span>
                    </Link>
                    <Link
                        className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        to="/mensajes"
                    >
                        <span className="material-symbols-outlined" data-icon="mail">
                            mail
                        </span>
                        <span className="font-inter font-medium text-sm tracking-wide">
                            Mensajes
                        </span>
                    </Link>
                </nav>
                {/* CTA */}
                <div className="px-6 py-6">
                    <button className="w-full bg-secondary-container text-on-secondary-container font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-95 transition-all active:scale-95">
                        <span className="material-symbols-outlined" data-icon="add">
                            add
                        </span>
                        <span>Nuevo Registro</span>
                    </button>
                </div>
                {/* Footer Navigation */}
                <div className="mt-auto border-t border-white/10 pt-4">
                    <a
                        className="flex items-center gap-3 text-slate-300 px-6 py-3 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        href="#"
                    >
                        <span className="material-symbols-outlined" data-icon="help">
                            help
                        </span>
                        <span className="font-inter font-medium text-sm tracking-wide">
                            Centro de Ayuda
                        </span>
                    </a>
                    <a
                        className="flex items-center gap-3 text-slate-300 px-6 py-3 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                        href="#"
                    >
                        <span className="material-symbols-outlined" data-icon="settings">
                            settings
                        </span>
                        <span className="font-inter font-medium text-sm tracking-wide">
                            Configuración
                        </span>
                    </a>
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <div className="md:pl-64 min-h-screen">
                {/* TopAppBar */}
                <header className="bg-white/80 backdrop-blur-md flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 shadow-sm shadow-slate-200/50">
                    <div className="flex items-center gap-4">
                        <span
                            className="material-symbols-outlined text-primary md:hidden"
                            data-icon="menu"
                        >
                            menu
                        </span>
                        <h1 className="text-xl font-bold tracking-tight text-[#00113a] font-manrope">
                            Colegio Bernardo O’Higgins
                        </h1>
                    </div>
                    <div className="flex items-center gap-6">
                        {/* Search */}
                        <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full gap-2 border border-outline-variant/20">
                            <span
                                className="material-symbols-outlined text-outline text-sm"
                                data-icon="search"
                            >
                                search
                            </span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-sm w-48"
                                placeholder="Buscar..."
                                type="text"
                            />
                        </div>
                        {/* Actions */}
                        <div className="flex items-center gap-2 relative">
                            <button 
                                onClick={() => {
                                    setShowNotifications(!showNotifications);
                                    if (unreadCount > 0) markAllAsRead();
                                }}
                                className="p-2 text-slate-600 hover:bg-slate-100 transition-colors rounded-full relative"
                            >
                                <span
                                    className="material-symbols-outlined"
                                    data-icon="notifications"
                                >
                                    notifications
                                </span>
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
                                <span className="material-symbols-outlined" data-icon="settings">
                                    settings
                                </span>
                            </button>
                            <div className="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>
                            <div className="flex items-center gap-3 pl-2">
                                <img
                                    alt="Prof. Juan Pérez"
                                    className="w-8 h-8 rounded-full"
                                    data-alt="headshot of a professional man in his 40s with a welcoming demeanor"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMccHPVlSRe8ajkQcm4zoYF8l5fC9YMdk9qVfQQRLsgrb-zmTBSgN5MarkiGD-DkSqSOYNhZbeVhFKa8pYzhvdZxj7ayBgMkHmmwzVA-PVmsM0VNKY7zSW6OHq8SlhQFxz5PFiahIRyeses3ctWEI73SuIKaNu-QzQ8njjtEaYU_OhiDcJ1gzC6RRIkT52tXuZ2dsKNP4RhVOCaEyngVpif6qQkMLUfI9w_gKAHZv-kCmbG6Jot_W8QEBE_RD8t8yypPHattMcajjc"
                                />
                                <span className="text-primary font-bold font-manrope text-sm hidden sm:inline">
                                    Prof. Juan Pérez
                                </span>
                                <span
                                    className="material-symbols-outlined text-slate-400 hover:text-red-500 cursor-pointer transition-colors"
                                    data-icon="logout"
                                    onClick={handleLogout}
                                >
                                    logout
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Canvas */}
                <main className="p-8 space-y-8 max-w-7xl mx-auto">
                    {/* Dashboard Greeting */}
                    <section className="space-y-1">
                        <h2 className="font-headline font-bold text-3xl text-primary tracking-tight">
                            Bienvenido de vuelta, Juan.
                        </h2>
                        <p className="text-on-surface-variant font-medium">
                            Hoy es lunes 21 de Octubre. Tienes 4 clases programadas.
                        </p>
                    </section>

                    {/* Bento Grid Dashboard Widgets */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Widget: Cursos Hoy (Linear High Depth) */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-full bg-primary/5 text-primary">
                                    <span className="material-symbols-outlined" data-icon="schedule">
                                        schedule
                                    </span>
                                </div>
                                <span className="text-primary font-bold text-2xl">4</span>
                            </div>
                            <div>
                                <h3 className="font-headline font-bold text-lg text-primary">
                                    Cursos hoy
                                </h3>
                                <p className="text-on-surface-variant text-sm mt-1">
                                    Próxima: 2° Medio B - 10:15 AM
                                </p>
                            </div>
                        </div>

                        {/* Widget: Mensajes no leídos (Tonal Stack) */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                                    <span
                                        className="material-symbols-outlined"
                                        data-icon="unread_messages"
                                    >
                                        notifications_unread
                                    </span>
                                </div>
                                <span className="text-secondary font-bold text-2xl">12</span>
                            </div>
                            <div>
                                <h3 className="font-headline font-bold text-lg text-primary">
                                    Mensajes no leídos
                                </h3>
                                <p className="text-on-surface-variant text-sm mt-1">
                                    8 de Apoderados, 4 de Dirección
                                </p>
                            </div>
                        </div>

                        {/* Widget: Próximas Evaluaciones (Institutional Pride) */}
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
                                    <span
                                        className="material-symbols-outlined"
                                        data-icon="assignment"
                                    >
                                        assignment
                                    </span>
                                </div>
                                <span className="text-on-surface font-bold text-2xl">2</span>
                            </div>
                            <div>
                                <h3 className="font-headline font-bold text-lg text-primary">
                                    Próximas Evaluaciones
                                </h3>
                                <p className="text-on-surface-variant text-sm mt-1">
                                    Ensayo Simce: Jueves 24
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access & Main Layout Split */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Main Body Content (3/4) */}
                        <div className="lg:col-span-3 space-y-8">
                            {/* Schedule / List section without dividers */}
                            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="font-headline font-bold text-xl text-primary">
                                        Horario del Día
                                    </h3>
                                    <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
                                        Ver semana completa{" "}
                                        <span
                                            className="material-symbols-outlined text-sm"
                                            data-icon="arrow_forward"
                                        >
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {/* Class Item 1 */}
                                    <div className="flex items-center p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                                        <div className="w-20 text-center border-r border-outline-variant/30 mr-6">
                                            <span className="block text-primary font-bold">08:00</span>
                                            <span className="text-xs text-on-surface-variant">AM</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-primary">
                                                Matemáticas Avanzadas
                                            </h4>
                                            <p className="text-sm text-on-surface-variant">
                                                4° Medio A · Sala 102
                                            </p>
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold">
                                                Ver lista
                                            </button>
                                            <button className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                                                Iniciar Clase
                                            </button>
                                        </div>
                                    </div>

                                    {/* Class Item 2 */}
                                    <div className="flex items-center p-4 rounded-xl bg-surface-container-low/50 border-l-4 border-secondary shadow-sm">
                                        <div className="w-20 text-center border-r border-outline-variant/30 mr-6">
                                            <span className="block text-primary font-bold">10:15</span>
                                            <span className="text-xs text-on-surface-variant">AM</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-bold text-primary">Álgebra Elemental</h4>
                                                <span className="px-2 py-0.5 bg-secondary/10 text-on-secondary-container text-[10px] font-bold rounded uppercase tracking-wider">
                                                    Actual
                                                </span>
                                            </div>
                                            <p className="text-sm text-on-surface-variant">
                                                2° Medio B · Sala 204
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold shadow-sm">
                                                Pasar Asistencia
                                            </button>
                                        </div>
                                    </div>

                                    {/* Class Item 3 */}
                                    <div className="flex items-center p-4 rounded-xl hover:bg-surface-container-low transition-colors group">
                                        <div className="w-20 text-center border-r border-outline-variant/30 mr-6">
                                            <span className="block text-primary font-bold">12:30</span>
                                            <span className="text-xs text-on-surface-variant">PM</span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-primary">
                                                Tutoría Individual
                                            </h4>
                                            <p className="text-sm text-on-surface-variant">
                                                Bibliteca Central
                                            </p>
                                        </div>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-semibold">
                                                Detalles
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Section - Student Progress (Editorial Style) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="rounded-xl overflow-hidden relative h-48 group">
                                    <img
                                        alt="Students learning"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        data-alt="a bright classroom with focused students collaborating around desks with sunlight streaming through large windows"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTnkWvVU2elKfocd3tFdA-b_i1JB3ur3V-gJ3vXjE6DKXMsawfWbmBpjjIW8HvVxp3w1LoIgFPVhtwzSeTgspR64UWtZpFhcGz3maGfp8ZTOKinYaJcGTk2fI_UqJZywd01Kr5fP9yBwlLgSOfjVDiIS7N0wIm4AQUeo6w9YkIWLKteYsUTqO8-caGFshEYJXHKORPHI7skagR27qNIJ1fAtPMKyQS3Lq-mGnntAfwBPS7aiiQ71_ifFes0vB2L3smbCyuat1GFwLA"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-6 flex flex-col justify-end">
                                        <h4 className="text-white font-headline font-bold text-lg">
                                            Guía de Exámenes Finales
                                        </h4>
                                        <p className="text-slate-200 text-sm">
                                            Actualizado hace 2 horas
                                        </p>
                                    </div>
                                </div>
                                <div className="rounded-xl overflow-hidden relative h-48 group">
                                    <img
                                        alt="Classroom board"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        data-alt="a blackboard filled with complex mathematical equations and sketches in white chalk, cinematic lighting"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW9Zof3A2kPRZvD4H-ZrDfNjacez0Y4SZOJB5h-KpXQxlQcDFGXYcuBCJnWpGQM8m_qejmhXdxRPuiq4CXDsCDQhsHi5QcUFvgqJzkLUUWB37ft2rW9lj8bjuuT09yBP4jPEt38ALB9ymmB6s1zzd47LYtxIOVR3yE_6fPGR66KcBKis8RHTCNW7iky_8xBvYt5_HsA13sjJFOF3-yUl40MNwj2GqCB9wBQ9dVWw-ZrIfhVtZwnM10dC2GfYOmYRkcMIExv-th0HjG"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent p-6 flex flex-col justify-end">
                                        <h4 className="text-white font-headline font-bold text-lg">
                                            Reporte Académico Mensual
                                        </h4>
                                        <p className="text-slate-200 text-sm">Generar nuevo reporte</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar Content (1/4) */}
                        <aside className="space-y-8">
                            {/* Accesos Rápidos (Secondary Actions) */}
                            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
                                <h3 className="font-headline font-bold text-lg text-primary mb-6">
                                    Accesos Rápidos
                                </h3>
                                <div className="space-y-3">
                                    <Link to="/asistencia" className="w-full flex items-center gap-3 p-4 bg-surface-container-lowest rounded-xl hover:bg-primary hover:text-white transition-all group shadow-sm">
                                        <span
                                            className="material-symbols-outlined text-secondary group-hover:text-white"
                                            data-icon="how_to_reg"
                                        >
                                            how_to_reg
                                        </span>
                                        <span className="font-medium text-sm">Pasar Asistencia</span>
                                    </Link>
                                    <Link to="/notas" className="w-full flex items-center gap-3 p-4 bg-surface-container-lowest rounded-xl hover:bg-primary hover:text-white transition-all group shadow-sm">
                                        <span
                                            className="material-symbols-outlined text-secondary group-hover:text-white"
                                            data-icon="upload_file"
                                        >
                                            upload_file
                                        </span>
                                        <span className="font-medium text-sm">Subir Nota</span>
                                    </Link>
                                    <a href="#" className="w-full flex items-center gap-3 p-4 bg-surface-container-lowest rounded-xl hover:bg-primary hover:text-white transition-all group shadow-sm">
                                        <span
                                            className="material-symbols-outlined text-secondary group-hover:text-white"
                                            data-icon="campaign"
                                        >
                                            campaign
                                        </span>
                                        <span className="font-medium text-sm">Enviar Anuncio</span>
                                    </a>
                                </div>
                            </div>

                            {/* Upcoming Events Calendar-like widget */}
                            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                                <h3 className="font-headline font-bold text-lg text-primary mb-6">
                                    Próximos Eventos
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary-fixed rounded-xl flex flex-col items-center justify-center">
                                            <span className="text-[10px] font-bold text-primary uppercase">
                                                Oct
                                            </span>
                                            <span className="text-lg font-bold text-primary leading-tight">
                                                24
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-primary">
                                                Reunión de Apoderados
                                            </h4>
                                            <p className="text-xs text-on-surface-variant mt-0.5">
                                                18:30 · Comedor Principal
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high rounded-xl flex flex-col items-center justify-center">
                                            <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                                                Nov
                                            </span>
                                            <span className="text-lg font-bold text-on-surface-variant leading-tight">
                                                02
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-primary">
                                                Feria Científica
                                            </h4>
                                            <p className="text-xs text-on-surface-variant mt-0.5">
                                                Todo el día · Gimnasio
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>

            {/* Mobile Navigation (BottomNavBar Fallback) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant/10 h-16 flex items-center justify-around px-4 z-50">
                <Link className="flex flex-col items-center text-[#745b00] font-bold" to="/dashboard">
                    <span className="material-symbols-outlined" data-icon="dashboard">
                        dashboard
                    </span>
                    <span className="text-[10px]">Dashboard</span>
                </Link>
                <Link className="flex flex-col items-center text-slate-600" to="/cursos">
                    <span className="material-symbols-outlined" data-icon="school">
                        school
                    </span>
                    <span className="text-[10px]">Cursos</span>
                </Link>
                <Link className="flex flex-col items-center text-slate-600" to="/asistencia">
                    <span className="material-symbols-outlined" data-icon="fact_check">
                        fact_check
                    </span>
                    <span className="text-[10px]">Asistencia</span>
                </Link>
                <Link className="flex flex-col items-center text-slate-600" to="/notas">
                    <span className="material-symbols-outlined" data-icon="grade">
                        grade
                    </span>
                    <span className="text-[10px]">Notas</span>
                </Link>
                <Link className="flex flex-col items-center text-slate-600" to="/mensajes">
                    <span className="material-symbols-outlined" data-icon="mail">
                        mail
                    </span>
                    <span className="text-[10px]">Mensajes</span>
                </Link>
            </nav>
        </div>
    );
};

export default Dashboard;
