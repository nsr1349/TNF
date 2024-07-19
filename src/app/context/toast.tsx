import React, { createContext, useState, useContext, useCallback } from 'react';
import { Toast } from '../component/Toast';

interface ToastContextType {
  (message: string, duration?: number): void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState({ message: '', duration: 3000 });

  const showToast = useCallback((message: string, duration = 3000) => {
    setToast({ message, duration });
  }, []);

  const closeToast = useCallback(() => {
    setToast({ message: '', duration: 3000 });
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toast message={toast.message} duration={toast.duration} onClose={closeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};