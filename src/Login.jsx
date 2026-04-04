import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col justify-center items-center p-6 pb-28">
            {/* Login Container */}
            <main className="w-full max-w-[440px] flex flex-col items-center">
                {/* School Branding */}
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container text-white shadow-ambient">
                        <span className="material-symbols-outlined text-4xl" data-icon="school">school</span>
                    </div>
                    <h2 className="font-headline font-extrabold text-2xl tracking-tight text-primary">
                        Colegio Bernardo O’Higgins
                    </h2>
                </div>

                {/* Login Card */}
                <div className="w-full bg-surface-container-lowest rounded-xl p-10 shadow-ambient">
                    <div className="mb-8">
                        <h1 className="font-headline font-bold text-xl text-on-surface">Inicio de Sesión</h1>
                        <p className="text-on-surface-variant text-sm mt-2">
                            Bienvenido al Portal de Educación. Por favor, ingrese sus credenciales para continuar.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        {/* Username Input */}
                        <div className="space-y-2">
                            <label
                                className="font-label text-xs font-semibold uppercase tracking-wider text-outline"
                                htmlFor="identifier"
                            >
                                RUT o Correo Electrónico
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]" data-icon="person">person</span>
                                </div>
                                <input
                                    className="w-full pl-11 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-0 text-on-surface placeholder:text-outline/50 transition-all border-b-2 border-transparent focus:border-primary"
                                    id="identifier"
                                    name="identifier"
                                    placeholder="12.345.678-9 o mail@ejemplo.cl"
                                    type="text"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label
                                    className="font-label text-xs font-semibold uppercase tracking-wider text-outline"
                                    htmlFor="password"
                                >
                                    Contraseña
                                </label>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]" data-icon="lock">lock</span>
                                </div>
                                <input
                                    className="w-full pl-11 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-0 text-on-surface placeholder:text-outline/50 transition-all border-b-2 border-transparent focus:border-primary"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    type="password"
                                />
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            className="w-full btn-gradient text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
                            type="submit"
                        >
                            <span>Iniciar Sesión</span>
                            <span className="material-symbols-outlined text-[20px]" data-icon="login">login</span>
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <a className="text-primary font-medium text-sm hover:underline transition-all" href="#">
                            ¿Olvidé mi contraseña?
                        </a>
                    </div>
                </div>

                {/* Help Section */}
                <div className="mt-8 flex items-center gap-4 text-outline text-sm">
                    <div className="flex items-center gap-1.5 px-4 py-2 bg-surface-container-low rounded-full">
                        <span className="material-symbols-outlined text-[18px]" data-icon="help_outline">help_outline</span>
                        <span>¿Necesitas ayuda?</span>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 w-full bg-transparent text-slate-900 dark:text-slate-100 font-['Inter'] text-sm tracking-wide">
                <div className="flex justify-between items-center px-12 py-8 w-full max-w-7xl mx-auto flex-col md:flex-row gap-4">
                    <div className="font-['Manrope'] font-bold text-slate-900 opacity-80">
                        Colegio Bernardo O’Higgins
                    </div>
                    <div className="flex gap-6 items-center">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-yellow-600 transition-colors duration-200 opacity-80 hover:opacity-100" href="#">
                            Privacidad
                        </a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-yellow-600 transition-colors duration-200 opacity-80 hover:opacity-100" href="#">
                            Soporte Técnico
                        </a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-yellow-600 transition-colors duration-200 opacity-80 hover:opacity-100" href="#">
                            Reglamento Interno
                        </a>
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 opacity-80">
                        © 2024 Colegio Bernardo O’Higgins. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Login;
