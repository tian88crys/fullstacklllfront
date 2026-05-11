import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './Styles/estilos.css'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Cursos from './pages/Cursos.jsx'
import Notas from './pages/Notas.jsx'
import Asistencia from './pages/Asistencia.jsx'
import { NotificationProvider } from './contexts/NotificationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/asistencia" element={<Asistencia />} />
        </Routes>
      </BrowserRouter>
    </NotificationProvider>
  </StrictMode>,
)