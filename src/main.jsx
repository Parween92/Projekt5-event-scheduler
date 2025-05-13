import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
// render --->„Zeig meine App im HTML-Element mit der ID id.“


// man darf selber entscheiden was bei Authprovide children-Prop übergeben also
//  Authprovider bleibt stehen und App oben kann man beliebig ändern
//  Hier wird <App /> als children an AuthProvider übergeben. 