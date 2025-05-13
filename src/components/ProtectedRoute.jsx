import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
// {} --->bestimmte Werte aus einem Objekt zu extrahieren und direkt als Eigenschaften zuzuweisen
   // Abruf des Auth-Status aus AuthProvider
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
  // Wenn der Nutzer eingeloggt ist (isAuthenticated === true), wird die Seite angezeigt,
  // andernfalls wird der Nutzer zur 401-Seite weitergeleitet

export default ProtectedRoute;

// isAuthenticated === true ---->Zeige das children-Element (z. B. CreateEvent-Seite)




