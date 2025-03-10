import EventCard from "../EventCard/EventCard";
import styles from "./EventSection.module.css";

const EventSection = ({ title, events }) => {
  return (
    <section className={styles.eventSection}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventSection;