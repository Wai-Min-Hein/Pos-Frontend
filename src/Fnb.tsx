import { useEffect, useState, useContext } from 'react';
import FnbComponent from "./Components/FnbComponent";
import SideNav from "./Components/SideNav";
import TopBar from "./Components/TopBar";
import { Notification } from '@mantine/core';
import AlertContext from './AlertContext';
import { tokenData } from "./utils/getDataFromToken";
import { User } from './utils/User';

const Fnb = () => {
  const [user, setUser] = useState<User | null>(null); 
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => { 
    const fetchUser = async () => {
      if (token) {
        try {
          const userData = await tokenData(token);
          setUser(userData);
          console.log("userData", userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUser(null);  
        } finally {
          setLoading(false);
        }
      } else {
        setUser(null);
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("No context provided");
  }

  const { alert, clearAlert } = context;

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        clearAlert();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [alert, clearAlert]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="w-full h-screen">
      <TopBar />
      {alert && (
        <Notification title="Success" color={alert.color} onClose={clearAlert}>
          {alert.message}
        </Notification>
      )}
      <div className="flex justify-start items-start">
        <SideNav />
        <FnbComponent user={user} /> 
      </div>
    </div>
  );
};

export default Fnb;
