import { useNavigate } from "react-router-dom";
import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/event/${event.id}`)}>
      <div className={styles.badge}>{event.status}</div>
      <img src={event.image} alt={event.title} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{event.title}</h3>
        <div className={styles.details}>
          <div>{event.location}</div>
          <div>{event.date}</div>
        </div>
        <div className={styles.price}>{event.price}</div>
      </div>
    </div>
  );
};

export default EventCard;