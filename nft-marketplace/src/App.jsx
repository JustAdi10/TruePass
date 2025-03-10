import { useState } from "react";
import Header from "./components/Header/Header";
import EventSection from "./components/EventSection/EventSection";
import Modal from "./components/Modal/Modal";
import eventsData from "./data/eventsData";
import "./App.css";

function App() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <>
      <Header />
      <main>
        <EventSection 
          title="Concerts" 
          events={eventsData.concerts} 
          onEventClick={setActiveEvent}
        />
        {/* Add other sections */}
      </main>
      <Modal isOpen={!!activeEvent} onClose={() => setActiveEvent(null)}>
        {/* Event details content */}
      </Modal>
    </>
  );
}

export default App;