import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import CreateEvent from './pages/CreateEvent';
import Register from './components/Register';
import Login from './components/Login';
import EventDetails from './pages/EventDetails'; 


function App() {
  return (
  <>
      <Routes>
       {/* path='/' Er umschließt alle "Kinder-Routen */}
        {/* index ist einfach ein Kürzel für: "path='' */}
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* ODER  <Route path='' element={<Home />} /> */}
<Route path="/events/:id" element={<EventDetails />} />

          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
<Route path="*" element={<div>404 – Page not found</div>} />

{/* createEvent ist protected ----> darf sehen nur wenn eingeloggt ist  */}
          <Route
            path="createEvent"
            element={
              <ProtectedRoute>
                <CreateEvent/>
              </ProtectedRoute>
            }
          /> 

        </Route>
      </Routes>
    </>
  );
}

export default App;
