import { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";


function Register() {
    //Damit React weiß, womit es arbeitet, von Anfang an ein Objekt mit diesen zwei leeren Werte geben
const [formData, setFormData] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false); // Zum Steuern der Animation

  const navigate = useNavigate();


// handleSubmit dient dazu, das Absenden des Formulars zu kontrollieren

  const handleSubmit = async (e) => {
    e.preventDefault();
     setIsSubmitting(true); 
    try{
//  formData das Objekt mit den Benutzerdaten ist, die gerade im Formular eingegeben ist 
       await axios.post('http://localhost:3001/api/users', formData);
      alert(
        'successfully registered, you are now being redirected to login page'
      );
      // Warte, bis die Animation abgeschlossen ist und navigiere dann
     setTimeout(() => {
      navigate("/login");
    }, 800);

    } catch (error) {
      console.log(error);
      // alert(error.response.data.error || 'Registration failed');
           alert(error.response.data.error || 'Registration failed');
      setIsSubmitting(false); // Fehlerbehandlung
    }
    // II beduetet oder und Falls der Server keine genaue Fehlermeldung mitliefert, zeigt das alert einfach den Standardtext: „Registration failed
};


// Erfolgreiche Registrierung
  return (
    //  animate-slideOut-Animation zu dem Formular hinzu einfügen, wenn isSubmitting auf true gesetzt ist.
<form
      onSubmit={handleSubmit}
      className={`mt-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md transition-all duration-800 ease-in-out ${
        isSubmitting ? "animate-slideOut" : "" // Animation wird bei Absenden aktiv
      }`}
    >
      
<h2 className="text-center text-2xl font-bold text-gray-700 mb-6">
            Ready to join? Create your account
      </h2>

  <div className="flex flex-col space-y-4">
<input
 type='text'
 placeholder='email'
// aktuellen Wert aus dem State formData
value={formData.email}
//e.target.value---->aktuelle Inhalt des Feldes
//e: Event (z. B. Eingabe im Feld)
// Sobald der Benutzer etwas in das Feld eingibt, wird der neue Wert im formData-State gespeichert.
  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

<input
type="password"
value={formData.password}
      placeholder='password'
onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

   <button
  type="submit"
  className={`btn bg-[rgb(71,100,136)] hover:bg-[rgb(118,154,198)] text-white transition-all duration-300 ease-in-out ${
    isSubmitting ? "opacity-50" : ""
  }`}
>
Register & Start
</button>

</div>
 </form>
  );
}

export default Register;




// 1. Zustand verwalten: Die Eingabedaten (E-Mail und Passwort) werden mit useState im Zustand gehalten.
// 2. Formularabsendung: Wenn der Benutzer auf den "REGISTER"-Button klickt, wird handleSubmit ausgelöst.

// 3. POST-Anfrage: Eine POST-Anfrage wird an den Server gesendet, um den Benutzer zu registrieren.

// 4. Fehlerbehandlung: Tritt ein Fehler auf, wird dieser im Konsolen-Log ausgegeben und eine Fehlermeldung angezeigt.

// 5. Erfolgreiche Registrierung: Bei erfolgreicher Registrierung wird der Benutzer zur Login-Seite weitergeleitet.