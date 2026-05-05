import React from "react";
import { Link } from "react-router-dom";

const Cursos = () => {
    return (
        <div className="bg-surface font-body text-on-surface antialiased">

    {/*  SideNavBar Shell  */}
    <aside
        className="h-screen w-64 fixed left-0 top-0 bg-[#002366] dark:bg-[#0d141c] flex flex-col py-8 z-40 hidden md:flex">
        {/*  Header Profile  */}
        <div className="px-6 mb-10 flex items-center gap-4">
            <img alt="Prof. Juan Pérez" className="w-12 h-12 rounded-full border-2 border-secondary/30"
                data-alt="portrait of a professional mature male teacher with a friendly expression in a formal blue shirt"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu_MoDGK-8JENcmplS8NMCkfPfORmYMLSkImjcZKlHK0dOQZ8ETdO_e2Yc1vaoPehuWo8lX-vSA03pGoxFtPr-YragfgmQWRd-tAdUjSGOV4mRV3vZkVU7iBh7EnbqZmn3gyhTxotmc2TtA93zE0lOAQgVxKqE1YpwyVA4el7Mk5k4hU6oFsCJvbdH01IdGMQS2Nbe4VcK2ZxXX5L_YXL90MkL_XDtjfXx0lxvfIr-hCeeabo2ArzKUDQ10clom2NJ6OSEYxJWijdF" />
            <div className="overflow-hidden">
                <p className="text-white font-medium text-sm truncate">Juan Pérez</p>
                <p className="text-slate-300 text-xs opacity-80 truncate">Docente de Matemáticas</p>
            </div>
        </div>
        {/*  Main Navigation  */}
        <nav className="flex-1 space-y-1">
            <Link className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                to="/dashboard">
                <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                <span className="font-inter font-medium text-sm tracking-wide">Dashboard</span>
            </Link>
            <Link className="flex items-center gap-3 text-white border-l-4 border-[#745b00] bg-white/10 px-6 py-4 transition-all translate-x-1"
                to="/cursos">
                <span className="material-symbols-outlined" data-icon="school">school</span>
                <span className="font-inter font-medium text-sm tracking-wide">Mis Cursos</span>
            </Link>
            <a className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                href="/asistencia.html">
                <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
                <span className="font-inter font-medium text-sm tracking-wide">Asistencia</span>
            </a>
            <a className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                href="/notas.html">
                <span className="material-symbols-outlined" data-icon="grade">grade</span>
                <span className="font-inter font-medium text-sm tracking-wide">Notas</span>
            </a>
            <a className="flex items-center gap-3 text-slate-300 px-6 py-4 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                href="#">
                <span className="material-symbols-outlined" data-icon="mail">mail</span>
                <span className="font-inter font-medium text-sm tracking-wide">Mensajes</span>
            </a>
        </nav>
        {/*  CTA  */}
        <div className="px-6 py-6">
            <button
                className="w-full bg-secondary-container text-on-secondary-container font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-95 transition-all active:scale-95">
                <span className="material-symbols-outlined" data-icon="add">add</span>
                <span>Nuevo Registro</span>
            </button>
        </div>
        {/*  Footer Navigation  */}
        <div className="mt-auto border-t border-white/10 pt-4">
            <a className="flex items-center gap-3 text-slate-300 px-6 py-3 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                href="#">
                <span className="material-symbols-outlined" data-icon="help">help</span>
                <span className="font-inter font-medium text-sm tracking-wide">Centro de Ayuda</span>
            </a>
            <a className="flex items-center gap-3 text-slate-300 px-6 py-3 opacity-80 hover:bg-white/5 hover:opacity-100 transition-all"
                href="#">
                <span className="material-symbols-outlined" data-icon="settings">settings</span>
                <span className="font-inter font-medium text-sm tracking-wide">Configuración</span>
            </a>
        </div>
    </aside>
    {/*  Main Content Wrapper  */}
    <div className="md:pl-64 min-h-screen">
        {/*  TopAppBar  */}
        <header
            className="bg-white/80 backdrop-blur-md flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 shadow-sm shadow-slate-200/50">
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary md:hidden" data-icon="menu">menu</span>
                <h1 className="text-xl font-bold tracking-tight text-[#00113a] font-manrope">Colegio Bernardo O’Higgins</h1>
            </div>
            <div className="flex items-center gap-6">
                {/*  Search  */}
                <div
                    className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full gap-2 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-outline text-sm" data-icon="search">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Buscar..."
                        type="text" />
                </div>
                {/*  Actions  */}
                <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-600 hover:bg-slate-100 transition-colors rounded-full relative">
                        <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
                        <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
                    </button>
                    <button className="p-2 text-slate-600 hover:bg-slate-100 transition-colors rounded-full">
                        <span className="material-symbols-outlined" data-icon="settings">settings</span>
                    </button>
                    <div className="h-8 w-[1px] bg-outline-variant/30 mx-2"></div>
                    <div className="flex items-center gap-3 pl-2">
                        <img alt="Prof. Juan Pérez" className="w-8 h-8 rounded-full"
                            data-alt="headshot of a professional man in his 40s with a welcoming demeanor"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMccHPVlSRe8ajkQcm4zoYF8l5fC9YMdk9qVfQQRLsgrb-zmTBSgN5MarkiGD-DkSqSOYNhZbeVhFKa8pYzhvdZxj7ayBgMkHmmwzVA-PVmsM0VNKY7zSW6OHq8SlhQFxz5PFiahIRyeses3ctWEI73SuIKaNu-QzQ8njjtEaYU_OhiDcJ1gzC6RRIkT52tXuZ2dsKNP4RhVOCaEyngVpif6qQkMLUfI9w_gKAHZv-kCmbG6Jot_W8QEBE_RD8t8yypPHattMcajjc" />
                        <span className="text-primary font-bold font-manrope text-sm hidden sm:inline">Prof. Juan
                            Pérez</span>
                        <span className="material-symbols-outlined text-slate-400" data-icon="logout">logout</span>
                    </div>
                </div>
            </div>
        </header>
        {/*  Canvas  */}
        <main className="p-8 space-y-8 max-w-7xl mx-auto">
            {/*  Header Section  */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-primary mb-2 font-headline">Mis Cursos</h1>
                    <p className="text-on-surface-variant font-medium">Gestión académica y seguimiento de alumnos para el
                        año lectivo 2024.</p>
                </div>
                {/*  Filters  */}
                <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-xl">
                    <div className="flex bg-white shadow-sm rounded-lg overflow-hidden">
                        <button
                            className="px-4 py-2 text-sm font-semibold text-primary border-r border-surface-container">Todos</button>
                        <button
                            className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container transition-colors">Básica</button>
                        <button
                            className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container transition-colors">Media</button>
                    </div>
                    <div className="flex bg-white shadow-sm rounded-lg overflow-hidden">
                        <button
                            className="px-4 py-2 text-sm font-semibold text-primary border-r border-surface-container">Mañana</button>
                        <button
                            className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-container transition-colors">Tarde</button>
                    </div>
                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-md hover:opacity-90 transition-all">
                        <span className="material-symbols-outlined text-sm">filter_list</span>
                        <span>Más Filtros</span>
                    </button>
                </div>
            </section>
            {/*  Course Grid  */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/*  Card 1: 1º Medio A  */}
                <div
                    className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 transition-all hover:shadow-md">
                    <div className="h-32 w-full relative">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90 z-10">
                        </div>
                        <img alt="Matemáticas" className="absolute inset-0 w-full h-full object-cover"
                            data-alt="abstract mathematical geometry background with glowing lines and numbers on a dark navy space"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVlu33mwfrNmER2t78sWiyBA2cAwNbUnxIGktUwUi8sYYpc3hk_-TU_tlfwPZhBofp8bPeqoqLFkEUbu9RKOZNMhjxPchIXnHDrNGvyFOWK46AWfXtU_pSERWFoVgzThtDdW-vf2eH9sXS2IqHwTycRStbGNwEV1Ox3y6eOl2jNdojJRCMgt3N_ie5SUQZQ8Ku5z_9SBg-GYgAxrFu2KfPgafqKWGjpqOpycn8mdFTG70g4nbm5Hgg0K650JHwWHWn7rXIoAJtoplk" />
                        <div className="absolute bottom-4 left-6 z-20">
                            <span
                                className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block">Educación
                                Media</span>
                            <h3 className="text-white text-2xl font-bold font-headline">1º Medio A</h3>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-primary font-bold text-lg leading-tight">Matemáticas Avanzadas</p>
                                <p className="text-on-surface-variant text-xs font-medium mt-1">Sala 204 • Pabellón B</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-primary font-bold text-xl leading-none">32</span>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase">Alumnos</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low rounded-lg p-4 mb-6 flex items-center gap-4">
                            <div className="bg-white p-2 rounded-md shadow-sm">
                                <span className="material-symbols-outlined text-secondary">schedule</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tight">
                                    Próxima Clase</p>
                                <p className="text-sm font-semibold text-primary">Mañana, 08:30 - 10:00</p>
                            </div>
                        </div>
                        <div className="mt-auto grid grid-cols-3 gap-2">
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">how_to_reg</span>
                                <span className="text-[9px] font-bold uppercase">Asistencia</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">grading</span>
                                <span className="text-[9px] font-bold uppercase">Notas</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">campaign</span>
                                <span className="text-[9px] font-bold uppercase">Avisos</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/*  Card 2: 2º Medio B  */}
                <div
                    className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 transition-all hover:shadow-md">
                    <div className="h-32 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#002366] to-[#0d141c] opacity-90 z-10">
                        </div>
                        <img alt="Álgebra" className="absolute inset-0 w-full h-full object-cover"
                            data-alt="close up of complex algebraic equations handwritten on a classic green chalkboard with chalk dust"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJY-8R0kGUF3Jeo6K6ou51c3O-JZCwllf568NLWaHkOu9uBCSd8zTjU-_NhLlaVm0X2PYUWWjfez-P0_oTNOot0x2PdYkn4-Gy4H9vWqk_Akcy_VfvnREVf9WCtH4ie8uLoLzrzaEs5riuYMIo6iqlTfxhrvVIEiSc0CynF0w6Zhqznykv3agTlAG3nrHeP7MDd3ruAxC8uMiBLod5c95qoUn7iiOBpXHTG6lGNhkTp7PozWpZCME0JWJzSGk5j-_h35rHZESgm45y" />
                        <div className="absolute bottom-4 left-6 z-20">
                            <span
                                className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block">Educación
                                Media</span>
                            <h3 className="text-white text-2xl font-bold font-headline">2º Medio B</h3>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-primary font-bold text-lg leading-tight">Álgebra y Funciones</p>
                                <p className="text-on-surface-variant text-xs font-medium mt-1">Laboratorio 1 • Edificio
                                    Norte</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-primary font-bold text-xl leading-none">28</span>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase">Alumnos</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low rounded-lg p-4 mb-6 flex items-center gap-4">
                            <div className="bg-white p-2 rounded-md shadow-sm">
                                <span className="material-symbols-outlined text-secondary">schedule</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tight">
                                    Próxima Clase</p>
                                <p className="text-sm font-semibold text-primary">Hoy, 14:15 - 15:45</p>
                            </div>
                        </div>
                        <div className="mt-auto grid grid-cols-3 gap-2">
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">how_to_reg</span>
                                <span className="text-[9px] font-bold uppercase">Asistencia</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">grading</span>
                                <span className="text-[9px] font-bold uppercase">Notas</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">campaign</span>
                                <span className="text-[9px] font-bold uppercase">Avisos</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/*  Card 3: 4º Medio A  */}
                <div
                    className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 transition-all hover:shadow-md">
                    <div className="h-32 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#745b00] to-primary opacity-80 z-10"></div>
                        <img alt="Pre-Universitario" className="absolute inset-0 w-full h-full object-cover"
                            data-alt="students in a modern university library environment collaborating over a large table with laptops and books"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB52AJJlDIOctUgh8I8pjqkx0SkdJd922xxQBq5i4-GLYco3lRTaM6Lu2E93qk_7R5Y-ouQu6q8rw63HGZVC_XuL-7Tro3xwzJznO7ReMzaLnEteiHY120Ls7q0taUISI8PwRmJWfuikoXn9Gvvmx8KBNvL7T9G0nQ6XibjcRwitaoPHp2qlOWs5bF-rFp-7KArZMoFx2TEAAWJqor_GKaq9Gs-pyk_Ia1Ejv-j9TSW5XWbTuzII7mjJOAolMFcib5dESps_pTJyDq" />
                        <div className="absolute bottom-4 left-6 z-20">
                            <span
                                className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block">Educación
                                Media</span>
                            <h3 className="text-white text-2xl font-bold font-headline">4º Medio A</h3>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-primary font-bold text-lg leading-tight">Cálculo Diferencial</p>
                                <p className="text-on-surface-variant text-xs font-medium mt-1">Aula Magna • Sector Senior
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="block text-primary font-bold text-xl leading-none">30</span>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase">Alumnos</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low rounded-lg p-4 mb-6 flex items-center gap-4">
                            <div className="bg-white p-2 rounded-md shadow-sm">
                                <span className="material-symbols-outlined text-secondary">schedule</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tight">
                                    Próxima Clase</p>
                                <p className="text-sm font-semibold text-primary">Viernes, 08:30 - 10:45</p>
                            </div>
                        </div>
                        <div className="mt-auto grid grid-cols-3 gap-2">
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">how_to_reg</span>
                                <span className="text-[9px] font-bold uppercase">Asistencia</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">grading</span>
                                <span className="text-[9px] font-bold uppercase">Notas</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">campaign</span>
                                <span className="text-[9px] font-bold uppercase">Avisos</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/*  Card 4: 8º Básico C  */}
                <div
                    className="group relative flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 transition-all hover:shadow-md">
                    <div className="h-32 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#191c1d] to-[#444650] opacity-90 z-10">
                        </div>
                        <img alt="Geometría" className="absolute inset-0 w-full h-full object-cover"
                            data-alt="macro photograph of a compass and geometric tools resting on a blueprints with soft bokeh background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUl7UVn-RIQF3OkSOA-duf2k5CX3eC28Pe2SUwTkczUO7Jldq337WfLIJL7gy5yOJ4t4F_W1lVdsS0dr-2XTAwmYdxlOzWHVd5Xcdo4s8Eh5tdLBJH-3UkxgxdmjlsdpO2dFrpOHZSG1BK-hx1D0Z_Aaf4Ci5f-Pj0boFM9G5xGwrKXg4XOJ_b8hmSzanL9K0YMGhPh3BpIvXePIyDJNI1Q0rsnTiiH8HiLicjly64SigCfTVPKnIQbk4tj2HZTdUhqvMGdwPoVd18" />
                        <div className="absolute bottom-4 left-6 z-20">
                            <span
                                className="bg-surface-variant text-on-surface-variant text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block">Educación
                                Básica</span>
                            <h3 className="text-white text-2xl font-bold font-headline">8º Básico C</h3>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-primary font-bold text-lg leading-tight">Geometría Plana</p>
                                <p className="text-on-surface-variant text-xs font-medium mt-1">Sala 102 • Pabellón A</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-primary font-bold text-xl leading-none">25</span>
                                <span className="text-[10px] text-on-surface-variant font-bold uppercase">Alumnos</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low rounded-lg p-4 mb-6 flex items-center gap-4">
                            <div className="bg-white p-2 rounded-md shadow-sm">
                                <span className="material-symbols-outlined text-secondary">schedule</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tight">
                                    Próxima Clase</p>
                                <p className="text-sm font-semibold text-primary">Lunes, 11:30 - 13:00</p>
                            </div>
                        </div>
                        <div className="mt-auto grid grid-cols-3 gap-2">
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">how_to_reg</span>
                                <span className="text-[9px] font-bold uppercase">Asistencia</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">grading</span>
                                <span className="text-[9px] font-bold uppercase">Notas</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center p-3 rounded-lg border border-outline-variant/20 hover:bg-primary hover:text-white transition-all group/btn">
                                <span
                                    className="material-symbols-outlined text-xl mb-1 group-hover/btn:text-white">campaign</span>
                                <span className="text-[9px] font-bold uppercase">Avisos</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/*  Empty State / Add New Placeholder  */}
                <div
                    className="group border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center p-10 hover:border-primary/50 transition-colors cursor-pointer bg-surface-container-low/30">
                    <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-primary text-3xl">add</span>
                    </div>
                    <p className="text-primary font-bold">Solicitar Nuevo Curso</p>
                    <p className="text-on-surface-variant text-xs text-center mt-2 max-w-[200px]">Si falta alguna de tus
                        asignaturas asignadas, contacta a coordinación.</p>
                </div>
            </section>
            {/*  Stats Section  */}
            <section
                className="bg-primary-container rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative shadow-md">
                <div
                    className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-5 blur-[100px] rounded-full -mr-20 -mt-20">
                </div>
                <div className="z-10 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold font-headline mb-2">Resumen Académico Semanal</h2>
                    <p className="text-on-primary-container max-w-md">Has completado el 85% de los registros de asistencia
                        esta semana. Revisa los avisos pendientes en 4º Medio A.</p>
                </div>
                <div className="z-10 flex gap-8">
                    <div className="text-center">
                        <span className="block text-4xl font-extrabold text-secondary-fixed mb-1">115</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container">Alumnos
                            Totales</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl font-extrabold text-secondary-fixed mb-1">4</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container">Cursos
                            Activos</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-4xl font-extrabold text-secondary-fixed mb-1">12</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-primary-container">Horas
                            Aula/Sem</span>
                    </div>
                </div>
            </section>
        </main>
    </div>
    {/*  Mobile Navigation  */}
    <nav
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-outline-variant/10 h-16 flex items-center justify-around px-4 z-50">
        <Link className="flex flex-col items-center text-slate-600" to="/dashboard">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="text-[10px]">Dashboard</span>
        </Link>
        <Link className="flex flex-col items-center text-[#745b00] font-bold" to="/cursos">
            <span className="material-symbols-outlined" data-icon="school">school</span>
            <span className="text-[10px]">Cursos</span>
        </Link>
        <a className="flex flex-col items-center text-slate-600" href="/asistencia.html">
            <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
            <span className="text-[10px]">Asistencia</span>
        </a>
        <a className="flex flex-col items-center text-slate-600" href="#">
            <span className="material-symbols-outlined" data-icon="mail">mail</span>
            <span className="text-[10px]">Mensajes</span>
        </a>
    </nav>

        </div>
    );
};

export default Cursos;
