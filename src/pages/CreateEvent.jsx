import axios from "axios";
import { Navigate } from "react-router-dom";
import { useState } from "react";


//  useState für das Formular als Objekt (formData)
function CreateEvent() {
const [formData, setFormData]= useState ({
   title: '',
    description: '',
    date: '',
    location: '',
    latitude: '',
    longitude: '',

});

//  handleSubmit, wo du fetch oder axios mit dem API-Token im Header nutzt
  const handleSubmit = async (e) => {
    e.preventDefault();


// Nutzer ist eingeloggt, bekommt Serve Token zurück, die wird im localStorage gespeicher
 try {
 const token = localStorage.getItem('token');
// axios.post() mit dem Token im Header:
     await axios.post('http://localhost:3001/api/events', formData, {
// muss Frontend dem Server zeigen, dass ich berechtigt bin. Das geschieht durch den Authorization-Header, der den Token enthält
//  Der Server prüft diesen Token und erlaubt die Aktion (POST /api/events) nur, wenn er gültig ist.
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        alert('you did it :)');
  

//  Felder aufrufen, sodass man die Weider ausfüllen kann
setFormData({
        title: '',
        description: '',
        date: '',
        location: '',
        latitude: '',
        longitude: '',
      
});

} catch (error) {
      console.log(error);
      alert(error.response?.data?.error || 'Event creation failed, please try again');
    }
  };


  //Das Formular submitten
  return (
  <form 
  onSubmit={handleSubmit}
 className="flex flex-col gap-4 max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
  >
 <input
        placeholder='Title'
        type="Text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="p-2 border border-[#769ac6] bg-white text-[#476488] rounded-md focus:outline-none focus:ring-2 focus:ring-[#476488]"
      />

 <input
        placeholder='Location'
        value={formData.location}
        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
    className="p-2 border border-[#769ac6] bg-white text-[#476488] rounded-md focus:outline-none focus:ring-2 focus:ring-[#476488]"
      />

    
 <input
        placeholder='Description'
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="p-2 border border-[#769ac6] bg-white text-[#476488] rounded-md focus:outline-none focus:ring-2 focus:ring-[#476488]"
      />

       <input
      type='datetime-local'
        className="p-2 border border-[#769ac6] bg-white text-[#476488] rounded-md focus:outline-none focus:ring-2 focus:ring-[#476488]"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
{/* type="datetime-local" -->dass im Browser ein Datum-Zeit-Auswahlfeld angezeigt wird.
Der Benutzer kann Datum und Uhrzeit direkt eingeben oder über einen Kalender/Picker auswählen.
Der Wert wird in diesem Format gespeichert: 2025-05-12T15:30 */}

<input
        placeholder='Latitude'
        type="number"
        step='any'
        value={formData.latitude}
        onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
        className="p-2 border border-[#769ac6] bg-white text-[#476488] rounded-md focus:outline-none focus:ring-2 focus:ring-[#476488]"
      />
{/* step="any" wie type="number"--->Erlaubt präzise Dezimalwerte (z. B. für Latitude/Longitude) 
also wie 49.01234*/}

<input
        placeholder='Longitude'
        type="number"
        step='any'
        value={formData.longitude}
        onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
        className="p-2 border border-[#769ac6] bg-white text-[#476488] rounded-md focus:outline-none focus:ring-2 focus:ring-[#476488]"
      />

<div>
<button
  type="submit"
  className="btn gap-2 bg-[#476488] hover:bg-[#769ac6] text-white border-none transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
  save
</button>
</div>

  </form>
  );
}

export default CreateEvent;






//  Navigation oder Weiterleitung nach erfolgreicher Erstellung (z. B. navigate('/'))