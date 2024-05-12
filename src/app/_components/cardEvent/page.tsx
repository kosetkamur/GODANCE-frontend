import "./style.scss";
import Image from "next/image";
import Link from "next/link";

export default function EventCard({event}) {
    return (
        <div key={event.id} className="event-card">
            <Link href={`/events/${event.id}`} scroll={true}>
                <Image
                    src={`${event.image}`}
                    alt="кейс"
                    width="100"
                    height="100"
                    className="event-card__images"
                />
                <div className="event-card__buttons">
                    <button className="event-card__buttons_button">
                        {event.type}
                    </button>
                    <button className="event-card__buttons_button">
                        {event.date}
                    </button>
                </div>
                <p className="event-card__title">
                    {event.name}
                </p>
            </Link>
        </div>
    );
}

