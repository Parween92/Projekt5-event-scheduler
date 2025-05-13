import { createContext, useContext, useEffect, useState } from 'react';
// createContext(eine React-Funktion, aber kein Hook.
// ➡️ Man benutzt sie außerhalb von Komponenten, um einen neuen Context zu erstellen.)
// useContext(echter React Hook)


const AuthContext = createContext();
// Ein „globaler Speicher“ wird erstellt – er heißt AuthContext

// „Ich kümmere mich um den Login-Zustand und gebe ihn an alle Kinder-Komponenten weiter
// { children } was sie umschließt (z. B. <App />, <Routes />
export const AuthProvider = ({ children }) => {
    // expot in { children } als Prop 
 const [isAuthenticated, setIsAuthenticated] = useState(false);
  // status für Login speichern


  // Token = mein digitaler Pass
  //  Holt Token aus localStorage, wenn da → isAuthenticated = true
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    // !!token	Dreht das ! nochmal um → ergibt true, wenn token vorhanden ist
  }, []);


  // Funktion zum Einloggen
  // Wenn jemand sich anmeldet:Das Token wird gespeichert. und true
  const login = (token) => {
    localStorage.setItem('token', token);
// muss zweimal token Wert übergeben, weil:einen neuen Token speichern muss (z. B. nach Login).
    setIsAuthenticated(true);
  };


  // Funktion zum Ausloggen: Das Token wird gelöscht. und false
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };


  // Werte an die App weitergeben ALso :
// vallue = ...Werte-Korb: diesen Korb an alles weiter, was man als children reingesteckt hat
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



// Custom Hook useAuth
// Diese Zeile erstellt eine eigene kleine Hilfsfunktion
// damit man einfach auf die Login-Daten zugreifen kann.
export const useAuth = () => useContext(AuthContext);
// useContext(AuthContext)
// → Holt sich den Inhalt vom AuthContext (also: isAuthenticated, login, logout).

// () => useContext(...)
// → Eine Funktion wird erstellt, die das zurückgibt.

// export const useAuth = ...
// → Diese Funktion bekommt den Namen useAuth und kann überall in deiner App benutzt werden.

// Jede Komponente innerhalb dieses AuthContext.Provider kann später mit useAuth() auf diese Werte zugreifen.