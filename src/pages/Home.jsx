import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';


const Home = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/events');
        // Überprüfen, ob Events vorhanden sind
        if (response.data.results && response.data.results.length > 0) {
// prüft zwei Dinge gleichzeitig:ob das Feld results existiert in der Antwort & ob results mindestens ein Element enthält
// Nur wenn die Länge größer als 0 ist, wird der Block ausgeführt.
          setEvents(response.data.results); // Events setzen
        } else {
          setError('No events found.');
        }

      } catch (err) {
        setError('Error retrieving events: ');
      }
    };

    fetchEvents();
  }, []);

  
const handleEventClick = (id) => {
  // Weiterleitung zur Event-Detailseite mit der ID
 navigate(`/event-details/${id}`);
  };

  return (
    <div className="px-4 py-8">
      {/* {error && <p>{error}</p>} */}
      <div className="events-list grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length === 0 ? (
           <p className="text-center text-gray-500">Loading or no events available.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} 
           className="event-card flex flex-col flex-wrap justify-between cursor-pointer bg-[white] rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            onClick={() => handleEventClick(event.id)}>

              <h2 className="text-[color:rgba(71,100,136,0.8)] text-2xl font-bold mb-2">
                {event.title}</h2>

                   

              <p className="text-gray-600 mb-1">
                {event.description}</p>

                <p className="text-gray-600 mb-1">
                {event.location}</p>

              {/* <p className="text-sm text-gray-400">
                {event.date}</p> */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[#476488] bg-[#f0f4fa] px-3 py-1 rounded-full w-fit mb-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-[#476488]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
 <span>{format(new Date(event.date), "dd MMM yyyy, HH:mm")}</span>
</div>

                 <p className="text-sm text-gray-400">
                {event.latitude}</p>

                <p className="text-sm text-gray-400">
                {event.longitude}</p>

                  <button className="mt-4 border-2 border-[#769ac6] group flex h-10 items-center gap-2 rounded  bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-[#769ac6] hover:pl-2 hover:text-white active:bg-neutral-700">
  <span className="rounded-full bg-[#769ac6] p-1 text-sm transition-colors duration-300 group-hover:bg-white">
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-[#769ac6] group-active:-rotate-45"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  </span>
  <span className='text-[#374151]'>Learn More</span>
</button>

            </div>
          ))
        )}
        
      </div>
    </div>
  );
};

export default Home;
