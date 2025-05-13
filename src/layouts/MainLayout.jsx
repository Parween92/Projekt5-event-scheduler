import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

//Outlet ist Platzhalter für den Body von allen Seiten

function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
