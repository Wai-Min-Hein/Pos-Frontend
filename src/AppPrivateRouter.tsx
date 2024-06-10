import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from './store/store';

const PrivateRoute = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
