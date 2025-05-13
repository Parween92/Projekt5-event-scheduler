import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { PiCursorClick } from "react-icons/pi";



function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();
// login: Eine Funktion aus deinem AuthProvider, die das Token speichert 

  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
      const response = await axios.post(
        'http://localhost:3001/api/auth/login',
        formData
      );
          login(response.data.token);
// Dieses Token wird dann im globalen Zustand gespeichert
  // Nach dem Login zur "Create Event"-Seite weiterleiten
    navigate('/CreateEvent');
} catch (error) {
      console.log(error);
      alert(error.response.data.error || 'Registration failed');
    }
  };


 return (
    <form onSubmit={handleSubmit} className=" mt-4 max-w-md mx-auto p-4">
      <h2 className="text-center text-xl font-bold mb-4 text-[#374151]">Sign In</h2>

      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="p-2 border rounded-md"
        />

        <button
          type="submit"
          className="flex items-center justify-center bg-[rgb(118,154,198)] text-white py-2 rounded-md hover:bg-[rgb(71,100,136)] transition duration-300 ease-in-out"
        >
          <PiCursorClick className="mr-2 text-2xl" />
          LOGIN
        </button>
      </div>
    </form>
  );
}


export default Login;
