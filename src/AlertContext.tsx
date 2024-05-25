import { FC, ReactNode, createContext, useState } from 'react';


interface alertInterface {
  message: string,
  color: string
}
interface contextInterface{
  alert : alertInterface | null,
  showAlert: (message: string, color: string) => void;
  clearAlert: () => void;
}

interface AlertProviderProps {
  children: ReactNode;
}

const AlertContext = createContext<contextInterface | null> (null);

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {


  const [alert, setAlert] = useState<alertInterface | null>(null);

  const showAlert = (message : string, color: string) => {
    setAlert({ message, color });
  };

  const clearAlert = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, clearAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
