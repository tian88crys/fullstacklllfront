import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Mensajes = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const messages = [
        {
            id: 1,
            senderInitials: "M",
            senderColor: "bg-secondary-fixed text-on-secondary-container",
            senderName: "María González (Apoderado)",
            time: "AHORA",
            subject: "Consulta sobre Salida Pedagógica 4° Medio",
            preview: "Estimado profesor, le escribo para confirmar si los alumnos deben llevar almuerzo frío para la visita al museo del próximo jueves...",
            isUnread: true,
            email: "m.gonzalez@email.com",
            date: "Hoy, 09:12 AM",
            category: "Apoderados",
            content: (
                <>
                    <p className="mb-4">Estimado profesor Pérez,</p>
                    <p className="mb-4">Junto con saludarlo, quisiera consultarle sobre los preparativos para la salida pedagógica programada para el próximo jueves 12 de Octubre al Museo de Bellas Artes.</p>
                    <p className="mb-4">Específicamente, los apoderados del 4° Medio B tenemos la duda de si los estudiantes deben llevar almuerzo frío para consumir en el recinto, o si se les permitirá comprar comida en los alrededores.</p>
                    <p className="mb-4">Además, ¿es necesario que asistan con el uniforme oficial o pueden llevar el buzo del colegio para mayor comodidad durante el trayecto?</p>
                    <p className="mb-8">Quedo atenta a sus comentarios y agradezco de antemano su gestión.</p>
                    <p className="">Saludos cordiales,<br/><strong>María González</strong><br/>Directiva de Apoderados 4° Medio B</p>
                </>
            ),
            attachments: [
                { name: "autorizacion_salida_4m.pdf", size: "245 KB" }
            ]
        },
        {
            id: 2,
            senderInitials: "D",
            senderColor: "bg-primary-container text-white",
            senderName: "Dirección Académica",
            time: "10:45 AM",
            subject: "Calendario de Evaluaciones Octubre",
            preview: "Se adjunta el calendario oficial de exámenes de cierre de semestre para todas las asignaturas. Por favor revisar...",
            isUnread: false,
            email: "direccion@colegio.cl",
            date: "Hoy, 10:45 AM",
            category: "Dirección",
            content: (
                <>
                    <p className="mb-4">Estimados docentes,</p>
                    <p className="mb-4">Se adjunta el calendario de evaluaciones para el mes de Octubre.</p>
                    <p className="mb-4">Saludos cordiales.</p>
                </>
            ),
            attachments: []
        },
        {
            id: 3,
            senderInitials: "C",
            senderColor: "bg-tertiary-container text-white",
            senderName: "Centro de Alumnos",
            time: "AYER",
            subject: "Solicitud de Uso de Gimnasio",
            preview: "Hola profesor, queríamos consultar por la disponibilidad del gimnasio para el ensayo de la gala folclórica...",
            isUnread: false,
            email: "caal@colegio.cl",
            date: "Ayer, 16:30 PM",
            category: "Alumnos",
            content: (
                <>
                    <p className="mb-4">Hola profesor,</p>
                    <p className="mb-4">Queríamos consultar por la disponibilidad del gimnasio para el ensayo de la gala folclórica...</p>
                </>
            ),
            attachments: []
        },
        {
            id: 4,
            senderInitials: "P",
            senderColor: "bg-secondary-fixed text-on-secondary-container",
            senderName: "Pablo Riquelme (Apoderado)",
            time: "28 SEP",
            subject: "Justificativo de Inasistencia",
            preview: "Adjunto certificado médico por la ausencia de mi hijo el día de ayer debido a un cuadro gripal fuerte...",
            isUnread: false,
            email: "p.riquelme@email.com",
            date: "28 SEP, 08:15 AM",
            category: "Apoderados",
            content: (
                <>
                    <p className="mb-4">Estimado profesor,</p>
                    <p className="mb-4">Adjunto certificado médico por la ausencia de mi hijo el día de ayer debido a un cuadro gripal fuerte...</p>
                </>
            ),
            attachments: []
        }
    ];

    const [selectedMessage, setSelectedMessage] = useState(messages[0]);

    return (
        <div className="bg-surface font-body text-on-surface antialiased h-screen flex flex-col">
            {/* SideNavBar Shell */}
            <aside className="h-screen w-64 fixed left-0 top-0 bg-[#002366] dark:bg-[#0d141c] flex flex-col py-8 z-40 hidden md:flex">
                {/* Header Profile */}
                <div className="px-6 mb-10 flex items-center gap-4">
                    <img
                        alt="Prof. Juan Pérez"
                        className="w-12 h-12 rounded-full border-2 border-secondary/30"
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
                        className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
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
                        className="flex items-center gap-3 text-white border-l-4 border-[#745b00] bg-white/10 px-6 py-4 transition-all translate-x-1"
                        to="/mensajes"
                    >
                        <span className="material-symbols-outlined" data-icon="mail" style={{ fontVariationSettings: "'FILL' 1" }}>
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
                        <span>New Entry</span>
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
            <div className="md:pl-64 flex flex-col h-screen overflow-hidden">
                {/* TopAppBar */}
                <header className="bg-white/80 backdrop-blur-md flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 shadow-sm shadow-slate-200/50 shrink-0">
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
                            <button className="p-2 text-slate-600 hover:bg-slate-100 transition-colors rounded-full relative">
                                <span className="material-symbols-outlined" data-icon="notifications">
                                    notifications
                                </span>
                                <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
                            </button>
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

                {/* Communications Interface: Three-column layout */}
                <main className="flex-1 flex overflow-hidden p-6 gap-6 max-w-[1600px] mx-auto w-full">
                    {/* Left Column: Navigation & Folders */}
                    <section className="w-64 flex flex-col gap-6 shrink-0 overflow-y-auto">
                        <button className="w-full bg-primary py-4 px-6 rounded-xl text-white font-headline font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary-container transition-all active:scale-95">
                            <span className="material-symbols-outlined">edit</span>
                            Redactar Mensaje
                        </button>
                        <div className="bg-surface-container-lowest rounded-xl p-2 flex flex-col shadow-sm border border-outline-variant/10">
                            <span className="px-4 pt-4 pb-2 text-[11px] font-bold text-outline uppercase tracking-widest">
                                Bandejas
                            </span>
                            <a
                                className="flex items-center justify-between px-4 py-3 rounded-lg bg-primary/5 text-primary font-bold transition-all"
                                href="#"
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >
                                        inbox
                                    </span>
                                    <span className="text-sm">Recibidos</span>
                                </div>
                                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">
                                    12
                                </span>
                            </a>
                            <a
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all"
                                href="#"
                            >
                                <span className="material-symbols-outlined">send</span>
                                <span className="text-sm">Enviados</span>
                            </a>
                            <a
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all"
                                href="#"
                            >
                                <span className="material-symbols-outlined">draft</span>
                                <span className="text-sm">Borradores</span>
                            </a>
                        </div>
                        <div className="bg-surface-container-lowest rounded-xl p-2 flex flex-col shadow-sm border border-outline-variant/10">
                            <span className="px-4 pt-4 pb-2 text-[11px] font-bold text-outline uppercase tracking-widest">
                                Filtros
                            </span>
                            <a
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all"
                                href="#"
                            >
                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                <span className="text-sm">Apoderados</span>
                            </a>
                            <a
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all"
                                href="#"
                            >
                                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                                <span className="text-sm">Dirección</span>
                            </a>
                            <a
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all"
                                href="#"
                            >
                                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                                <span className="text-sm">Alumnos</span>
                            </a>
                        </div>
                    </section>

                    {/* Middle Column: Message List */}
                    <section className="flex-1 min-w-0 bg-surface-container-lowest rounded-2xl flex flex-col shadow-sm border border-outline-variant/10">
                        <div className="p-6 border-b border-surface-container-low flex justify-between items-center">
                            <h2 className="font-headline font-bold text-lg text-primary">Recibidos</h2>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                                    <span className="material-symbols-outlined text-outline">refresh</span>
                                </button>
                                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                                    <span className="material-symbols-outlined text-outline">more_vert</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    onClick={() => setSelectedMessage(msg)}
                                    className={`group px-6 py-5 cursor-pointer transition-all flex gap-4 ${
                                        selectedMessage.id === msg.id ? 'bg-surface-container' : msg.isUnread ? 'border-l-4 border-secondary bg-secondary/5 hover:bg-secondary/10' : 'border-b border-surface-container-low hover:bg-surface-container-low'
                                    }`}
                                >
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${msg.senderColor}`}>
                                        {msg.senderInitials}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className={`text-sm ${msg.isUnread ? 'font-bold text-primary' : 'font-medium text-on-surface'}`}>
                                                {msg.senderName}
                                            </span>
                                            <span className={`text-[11px] ${msg.isUnread ? 'font-bold text-secondary' : 'text-outline'}`}>
                                                {msg.time}
                                            </span>
                                        </div>
                                        <h3 className={`text-sm truncate mb-1 ${msg.isUnread ? 'font-bold text-on-surface' : 'font-medium text-on-surface'}`}>
                                            {msg.subject}
                                        </h3>
                                        <p className="text-xs text-on-surface-variant line-clamp-2">
                                            {msg.preview}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Right Column: Message Detail */}
                    {selectedMessage && (
                        <section className="w-[450px] bg-surface-container-lowest rounded-2xl flex flex-col shadow-sm border border-outline-variant/10 overflow-hidden shrink-0">
                            <div className="p-6 border-b border-surface-container-low flex justify-between items-center bg-surface-container-lowest">
                                <div className="flex gap-2">
                                    <button
                                        className="p-2 hover:bg-surface-container rounded-lg transition-colors"
                                        title="Archivar"
                                    >
                                        <span className="material-symbols-outlined text-outline">archive</span>
                                    </button>
                                    <button
                                        className="p-2 hover:bg-surface-container rounded-lg transition-colors"
                                        title="Marcar como SPAM"
                                    >
                                        <span className="material-symbols-outlined text-outline">report</span>
                                    </button>
                                    <button
                                        className="p-2 hover:bg-surface-container rounded-lg transition-colors text-error/60"
                                        title="Eliminar"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors">
                                    <span className="material-symbols-outlined text-outline">print</span>
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto p-8">
                                <div className="mb-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <h2 className="font-headline font-extrabold text-2xl text-primary leading-tight">
                                            {selectedMessage.subject}
                                        </h2>
                                        <span className="bg-secondary/10 text-secondary text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                            {selectedMessage.category}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${selectedMessage.senderColor}`}>
                                                {selectedMessage.senderInitials}
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-on-surface">{selectedMessage.senderName.split(' (')[0]}</p>
                                                <p className="text-xs text-outline">{selectedMessage.email}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-medium text-outline">{selectedMessage.date}</p>
                                            <button className="text-primary text-[11px] font-bold hover:underline">
                                                Ver detalles
                                            </button>
                                        </div>
                                    </div>
                                    <div className="prose prose-sm text-on-surface-variant leading-relaxed font-inter">
                                        {selectedMessage.content}
                                    </div>
                                </div>

                                {/* Attachments */}
                                {selectedMessage.attachments && selectedMessage.attachments.length > 0 && (
                                    <div className="mb-8 p-4 border border-outline-variant/30 rounded-xl bg-white">
                                        <p className="text-[11px] font-bold text-outline uppercase mb-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">attach_file</span>{" "}
                                            {selectedMessage.attachments.length} Archivo(s) adjunto(s)
                                        </p>
                                        {selectedMessage.attachments.map((att, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg hover:bg-surface-container transition-colors cursor-pointer group mb-2 last:mb-0"
                                            >
                                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                                                    picture_as_pdf
                                                </span>
                                                <div className="flex-1">
                                                    <p className="text-xs font-bold text-on-surface">{att.name}</p>
                                                    <p className="text-[10px] text-outline">{att.size}</p>
                                                </div>
                                                <span className="material-symbols-outlined text-outline">download</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {/* Footer Actions */}
                            <div className="p-6 bg-surface-container-low flex gap-3">
                                <button className="flex-1 bg-primary text-white py-3 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary-container transition-all shadow-lg shadow-primary/10">
                                    <span className="material-symbols-outlined text-[18px]">reply</span>
                                    Responder
                                </button>
                                <button className="flex-1 bg-white border border-outline-variant/30 text-primary py-3 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-all">
                                    <span className="material-symbols-outlined text-[18px]">forward</span>
                                    Reenviar
                                </button>
                            </div>
                        </section>
                    )}
                </main>
            </div>

            {/* Mobile Navigation (BottomNavBar Fallback) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant/10 h-16 flex items-center justify-around px-4 z-50">
                <Link className="flex flex-col items-center text-slate-600" to="/dashboard">
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
                <Link className="flex flex-col items-center text-[#745b00] font-bold" to="/mensajes">
                    <span className="material-symbols-outlined" data-icon="mail">
                        mail
                    </span>
                    <span className="text-[10px]">Mensajes</span>
                </Link>
            </nav>
        </div>
    );
};

export default Mensajes;
