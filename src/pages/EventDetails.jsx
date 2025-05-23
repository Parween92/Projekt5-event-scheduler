import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams(); // Hol der ID aus der URL
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

  //fetchen von der API
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/events/${id}`);
        setEvent(response.data); // Setzen der Event-Daten
        setError(null);



      } catch (err) {
        console.error(err); // Für Debugging --->IMPORTANT
        setError('Fehler beim Abrufen der Event-Details: ');
     } finally {
        setLoading(false);
      }
    };

    //aufrufen
    fetchEventDetails();
  }, [id]);

  //Meldungen

  if (loading) return <p className="text-center mt-10 text-gray-500">
  Loading event details...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!event) return <p className="text-center mt-10 text-gray-500">
  No event data available.</p>;


   //Neuuuu: Styling
 return (
  <div className="max-w-xl mx-auto my-8 p-6 border border-gray-300 
  rounded-xl bg-white shadow-md">

    <h1 className="text-[#476488] text-3xl font-bold mb-6">{event.title}</h1>
      <p className="text-gray-700 mb-4">{event.description}</p>

     <p className="text-gray-400 mb-2">
      <span className="font-semibold text-gray-600">Datum: </span>
  {new Date(event.date).toLocaleString()}
    </p>

    <p className="text-gray-400 mb-2">
      <span className="font-semibold text-gray-600">Ort: </span>
      {event.location}
    </p>


    <p className="text-gray-400 mb-2">
      <span className="font-semibold text-gray-600">Breitengrad: </span>
      {event.latitude}
    </p>


    <p className="text-gray-400 mb-4">
      <span className="font-semibold text-gray-600">Längengrad: </span>
      {event.longitude}
    </p>


    <button
      onClick={() => window.history.back()}
      className="mt-4 px-5 py-2 bg-[#476488] text-white rounded hover:bg-[#769ac6] transition-colors duration-300"
    > Back to Overview
    </button>


  </div>
);

};

export default EventDetails;