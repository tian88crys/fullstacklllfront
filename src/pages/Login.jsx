import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/axiosClient';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Usamos las variables que tu compañera configuró
            const response = await axiosClient.post('/usuarios/login', {
                correo: identifier,
                contrasenaVal: password
            });

            // Guardamos en el localStorage lo que ella programó
            if (response.data) {
                localStorage.setItem('usuarioNombre', response.data.nombreCompleto || 'Usuario');
                localStorage.setItem('usuarioRol', response.data.rol || 'DOCENTE');
            }

            console.log('Login exitoso:', response.data);
            navigate('/dashboard');
        } catch (err) {
            console.error('Error de login:', err);
            setError('Credenciales inválidas o problema de conexión.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col justify-center items-center p-6 pb-28">
            <main className="w-full max-w-[440px] flex flex-col items-center">
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container text-white shadow-ambient">
                        <span className="material-symbols-outlined text-4xl" data-icon="school">school</span>
                    </div>
                    <h2 className="font-headline font-extrabold text-2xl tracking-tight text-primary">
                        Colegio Bernardo O’Higgins
                    </h2>
                </div>

                <div className="w-full bg-surface-container-lowest rounded-xl p-10 shadow-ambient">
                    <div className="mb-8">
                        <h1 className="font-headline font-bold text-xl text-on-surface">Inicio de Sesión</h1>
                        <p className="text-on-surface-variant text-sm mt-2 mb-4">
                            Bienvenido al Portal de Educación. Por favor, ingrese sus credenciales para continuar.
                        </p>
                        {error && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md text-sm font-semibold">
                                {error}
                            </div>
                        )}
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline" htmlFor="identifier">
                                Correo Electrónico
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]" data-icon="person">person</span>
                                </div>
                                <input
                                    className="w-full pl-11 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-0 text-on-surface transition-all border-b-2 border-transparent focus:border-primary"
                                    id="identifier"
                                    name="identifier"
                                    placeholder="mail@ejemplo.cl"
                                    type="email"
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="font-label text-xs font-semibold uppercase tracking-wider text-outline" htmlFor="password">
                                Contraseña
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]" data-icon="lock">lock</span>
                                </div>
                                <input
                                    className="w-full pl-11 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-0 text-on-surface transition-all border-b-2 border-transparent focus:border-primary"
                                    id="password"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            className="w-full btn-gradient text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:scale-100"
                            type="submit"
                            disabled={isLoading}
                        >
                            <span>{isLoading ? 'Iniciando...' : 'Iniciar Sesión'}</span>
                            {!isLoading && <span className="material-symbols-outlined text-[20px]" data-icon="login">login</span>}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;
