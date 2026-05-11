import React, { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([{
        type: 'SYSTEM',
        message: 'Sistema de notificaciones inicializado.',
        notaId: null
    }]);
    const [unreadCount, setUnreadCount] = useState(1);
    const [updatedGrades, setUpdatedGrades] = useState([]);

    const addNotification = useCallback((notification) => {
        setNotifications((prev) => [notification, ...prev]);
        setUnreadCount((prev) => prev + 1);
        
        // Si la notificación es sobre una nota
        if (notification.type === 'GRADE_UPDATE' && notification.notaId) {
            setUpdatedGrades((prev) => [...prev, notification.notaId]);
            // Limpiar el resaltado después de unos segundos para efecto temporal
            setTimeout(() => {
                setUpdatedGrades((prev) => prev.filter(id => id !== notification.notaId));
            }, 5000);
        }
    }, []);

    const markAllAsRead = () => {
        setUnreadCount(0);
    };

    return (
        <NotificationContext.Provider value={{ notifications, unreadCount, addNotification, markAllAsRead, updatedGrades }}>
            {children}
        </NotificationContext.Provider>
    );
};
