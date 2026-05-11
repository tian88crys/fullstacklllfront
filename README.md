# Portal Educativo - Colegio Bernardo O'Higgins 🏫

Este repositorio contiene el código frontend (y un clon del backend) para el Portal Educativo del Colegio Bernardo O'Higgins. El objetivo del proyecto es construir una plataforma web moderna, interactiva y escalable para la gestión docente.

## Estado del Proyecto: `Fase 2 (Integración Total y SPA)` 🚀

El proyecto ha superado la etapa de maquetación estática y se ha convertido en una **Single Page Application (SPA)** completamente funcional. Ahora incluye conexión real a microservicios backend, patrones arquitectónicos avanzados y gestión de estado en tiempo real.

### Vistas y Funcionalidades Implementadas
1. **Página de Login (`/`)**: Integrada con el backend a través de la API (`/usuarios/login`) para validar credenciales reales enviando peticiones POST mediante **Axios**.
2. **Dashboard Docente (`/dashboard`)**: Panel de Control con navegación interna unificada, logrando transiciones sin recargas de página.
3. **Módulo de Calificaciones (`/notas`)**: Interfaz para el ingreso dinámico de calificaciones, cálculos en tiempo real y conectividad con la campana de notificaciones.
4. **Módulo de Asistencia (`/asistencia`)**: Componente reactivo con cálculo estadístico en vivo (Presentes, Ausentes, Atrasos) y guardado en estado local.
5. **Autenticación (Logout)**: Botón interactivo global que desvincula la sesión y redirige al inicio de sesión.

### 🔔 Patrón Observador (Observer Pattern)
Este proyecto hace un uso destacado del **Patrón Observer** para implementar notificaciones reactivas a través de toda la aplicación:
- **Backend (Publisher)**: El servidor implementa *Server-Sent Events (SSE)* (`SseEmitter`). El servicio despacha eventos (ej. guardar una nota) y avisa automáticamente a los clientes suscritos sin que pidan la actualización.
- **Frontend (Subscriber)**: La aplicación de React usa la API nativa `EventSource` integrada en un Hook (`useNotificationObserver`) para suscribirse. Al recibir señales, un Contexto Global (`NotificationContext`) despacha el evento, provocando que la interfaz (ej. campana de notificaciones) despliegue de inmediato la nueva alerta.

## 🛠 Tecnologías Utilizadas

- **[React](https://react.dev/) / JSX**: Biblioteca base del ecosistema. Todo el proyecto fue refactorizado y purgado de HTMLs estáticos para funcionar con componentes puros de React.
- **[React Router DOM](https://reactrouter.com/)**: Motor que habilita la navegación SPA (Componentes `<Link>` y `useNavigate`).
- **[Axios](https://axios-http.com/)**: Cliente HTTP para consultas directas y organizadas hacia el backend de Spring Boot.
- **[Vite](https://vitejs.dev/)**: Servidor de desarrollo ágil y motor de compilación.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilizado atómico moderno.

## ⚙️ Instalación y Entorno Local

Para levantar el entorno completo:

1. **Clonar este repositorio**:
   ```bash
   git clone https://github.com/tian88crys/fullstacklllfront.git
   cd fullstacklllfront
   ```
2. **Levantar el Frontend**:
   ```bash
   npm install
   npm run dev
   ```
   *Se abrirá en `http://localhost:5173/`*

3. **Levantar el Backend (Microservicio de Usuarios)**:
   Abre una segunda terminal, navega hacia el backend clonado y ejecuta:
   ```bash
   cd backend-clone/usuarios
   sh ./mvnw spring-boot:run
   ```
   *El servidor Java (Spring Boot) se iniciará en el puerto designado (ej. 8081), habilitando el inicio de sesión.*

## 🔙 Backend Estructurado

Se ha realizado un proceso de limpieza profundo en la carpeta `backend-clone/`.
- Todos los servicios (Asistencia, Calificaciones, Conducta, Gestion, Usuarios) se encuentran organizados.
- Los esquemas, scripts y diseños de la Base de Datos Oracle viven ordenadamente en la carpeta `backend-clone/docs/`.
- Se gestiona como un multi-proyecto mediante el `pom.xml` raíz utilizando **Maven**.
