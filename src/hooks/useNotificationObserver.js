import { useEffect, useContext } from 'react';
import { NotificationContext } from '../contexts/NotificationContext';

const useNotificationObserver = (userId) => {
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        if (!userId) return;

        // Establecer conexión SSE (Server-Sent Events) con el BFF
        // NOTA: Reemplazar puerto y ruta con la URL correcta del BFF cuando esté disponible
        const eventSource = new EventSource(`http://localhost:8082/api/v1/notifications/stream?userId=${userId}`);

        const handleMessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                addNotification(data);
                window.dispatchEvent(new CustomEvent('data-needs-refresh', { detail: data }));
            } catch (error) {
                console.error("Error al procesar la notificación:", error);
            }
        };

        eventSource.onmessage = handleMessage;
        eventSource.addEventListener('message', handleMessage);

        eventSource.onerror = (error) => {
            console.error("Error en conexión SSE de Notificaciones:", error);
            eventSource.close();
            // Aquí se puede agregar lógica de reconexión automática si el servidor se cae
        };

        return () => {
            eventSource.close();
        };
    }, [userId, addNotification]);
};

export default useNotificationObserver;
