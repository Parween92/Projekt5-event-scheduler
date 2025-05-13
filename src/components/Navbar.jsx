import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthProvider';

function Navbar() {
// Das Login wird in der Regel nur einmal pro Sitzung aufgerufen (wenn sich der Benutzer einloggt)
// DESWGEN ist nur bei Login.jsx
  const { isAuthenticated, logout } = useAuth();
// Wenn isAuthenticated auf true gesetzt ist, bedeutet das, dass der Benutzer eingeloggt ist. Andernfalls ist der Benutzer nicht eingeloggt (d.h., isAuthenticated wäre false)
    const navigate = useNavigate();

    const handleLogout = () => {
    logout();
    navigate('/login');
  };


   return (
    <nav className=" p-2 gap-8  bg-[#476488] text-white flex justify-between items-center">
      <div>
        <NavLink to='/'>Event Scheduler</NavLink>
      </div>

      <div className="flex gap-2">
        {isAuthenticated ? (
          <div className="flex gap-2" >
            <NavLink to='/createEvent'
             className="text-white hover:bg-[#769ac6] px-4 py-2 rounded-md transition-all duration-300 ease-in-out"> 
             Create your Event</NavLink>

             {/* <button onClick={handleLogout}
                 className="text-white hover:bg-[#769ac6] px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
                  LOGOUT</button> */}
    <button
  onClick={handleLogout}
  className="group flex items-center gap-2 rounded border-2 border-[#fb7e72] px-4 py-2 text-[#fb7e72] font-bold transition-all duration-300 hover:bg-[#fb7e72] hover:text-white"
>
  <span className="transition-transform duration-300 group-hover:-translate-x-1">
    ⇦
  </span>
  LOGOUT
</button>
         
          </div>
          
        ) : (
          <div className="flex gap-8 ">
            <NavLink to='/login' 
             className="text-white hover:bg-[#769ac6] px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
              Login</NavLink>
            <NavLink to='/register'  className="text-white hover:bg-[#769ac6] px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
            Register</NavLink>
        
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
//  Wenn eingeloggt (isAuthenticated === true):
//  DAS Zeige nur den LOGOUT-Button. Benutzer kann sich ausloggen (über handleLogout())

// Wenn nicht eingeloggt (isAuthenticated === false):
// Zeige die Links zu Login und Register




// 	NavLink muss immer von react-router-dom importiert werden
//  Navlink: Für Navigation + aktiven Zustand
//  useNavigate():  Um nach einer Aktion weiterzuleiten
// useNavigate()  programmgesteuert zu einer anderen Route zu navigieren
// handleLogout(): Diese Funktion wird aufgerufen, um den Benutzer abzumelden.