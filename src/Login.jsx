import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from './Api/usuarioService.js';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null); 

        try {
            
            const user = await loginUsuario(email, password);
            
            localStorage.setItem('usuarioNombre', user.nombreCompleto);
            localStorage.setItem('usuarioRol', user.rol);
            
            navigate('/dashboard');
        } catch (err) {
            setError("Correo o contraseña incorrectos. Intente nuevamente.");
            console.error("Error en login:", err.message);
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
                        {error && <p className="text-red-600 text-sm mt-2 font-bold">{error}</p>}
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
                                    placeholder="mail@ejemplo.cl"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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

                        <button className="w-full btn-gradient text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2" type="submit">
                            <span>Iniciar Sesión</span>
                            <span className="material-symbols-outlined text-[20px]" data-icon="login">login</span>
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Login;

