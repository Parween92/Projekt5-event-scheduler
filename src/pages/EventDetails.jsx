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

    if (loading) return <p>Lade Event-Details...</p>; // Loadingstatus

  return (
    <div>
      {/* error zeigen  */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        {/* die Eventkarte mit den Ihnalten */}
      {event ? (
        <div>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.location}</p>
             <p>{event.longitude}</p>
                <p>{event.latitude}</p>
        </div>
      ) : (
        <p>Loading event details...</p>
      )}
    </div>
  );
};

export default EventDetails;
