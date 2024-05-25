import FnbComponent from "./Components/FnbComponent";
import SideNav from "./Components/SideNav";
import TopBar from "./Components/TopBar";

import { useContext, useEffect } from 'react';
import { Notification } from '@mantine/core';
import AlertContext from './AlertContext';

const Fnb = () => {

  const context = useContext(AlertContext)
  if(!context) {
    throw new Error("No context provided")
  }

  const { alert, clearAlert } = context;

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        clearAlert();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alert, clearAlert]);

  return (
    <div className="w-full min-h-screen">
      <TopBar />
      <div>
        {alert && (
          <Notification title="Success" color={alert.color} onClose={clearAlert}>
            {alert.message}
          </Notification>
          )}
      </div>

      <div className="  flex justify-start items-start">
        <SideNav />

        <FnbComponent />
      </div>
    </div>
  );
};

export default Fnb;
