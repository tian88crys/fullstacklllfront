# Portal Educativo - Colegio Bernardo O'Higgins 🏫

Este repositorio contiene la fase inicial del frontend para el Portal Educativo del Colegio Bernardo O'Higgins. El objetivo del proyecto es construir una plataforma web moderna, rápida y escalable para la gestión docente.

## Estado del Proyecto: `Fase Inicial` 🚀

Actualmente el proyecto se encuentra en la etapa de maquetación y diseño de la interfaz de usuario. No hay conexión activa a un servidor ni base de datos todavía. 

### Vistas Implementadas
1. **Página de Login (`/`)**: Interfaz de autenticación principal y maquetación de formulario.
2. **Dashboard Docente (`/dashboard`)**: Interfaz principal (Panel de Control) con widgets de agenda diarios, notificaciones, próximos eventos y menús de acceso.

> *Nota: Se puede navegar fluidamente entre ambas vistas ya que se encuentran conectadas e integradas al router local.*

## 🛠 Tecnologías Utilizadas

- **[React](https://react.dev/) / JSX**: Biblioteca esencial para construir los Layouts modulares.
- **[Vite](https://vitejs.dev/)**: Motor de compilación ultrarrápido y servidor de desarrollo ágil.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Para estilizado atómico y personalización del sistema de colores (utilizando el nuevo formato `@theme`).
- **[React Router DOM](https://reactrouter.com/)**: Manejo del enrutamiento de páginas del lado del cliente.
- **Material Symbols Outline**: Set de recursos visuales e iconos dinámicos de Google.

## ⚙️ Instalación y Entorno Local

Es necesario contar con [Node.js](https://nodejs.org/es/) instalado para iniciar el software.

1. **Clonar este repositorio**:
   ```bash
   git clone https://github.com/tian88crys/fullstacklllfront.git
   ```
2. **Navegar a la carpeta del proyecto**:
   ```bash
   cd fullstacklllfront
   ```
3. **Instalar el registro de dependencias**:
   ```bash
   npm install
   ```
4. **Ejecutar en modo desarrollador**:
   ```bash
   npm run dev
   ```
   *Hecho esto, abre tu navegador en la URL `http://localhost:5173/` para visualizar la app y aplicar cambios en tiempo real.*

## 🔜 Próximos Eventos y Mejoras (Roadmap)
Como el proyecto pasará pronto a siguientes etapas, esto se planifica a futuro:
- [ ] Diagramación y construcción del API Backend (Node.js/Python).
- [ ] Conexión a la base de datos empresarial **(Oracle DB)** para inyectar datos reales al Dashboard. 
- [ ] Seguridad, sesiones locales y autenticación viva (JSON Web Tokens).
- [ ] Desarrollo de las demas pantallas del navbar (Subir notas, Gestión de Curso).
