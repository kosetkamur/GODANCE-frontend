import "./style.scss";
import Image from "next/image";
import Link from "next/link";

export default function EventsComponent({events}) {
    return (
        <div className="case-component">
            <div className="case-component__cases">
                {
                    events.map(event => (
                        <div key={event.id} className="case-component__cases_item">
                            <Link href={`/events/${event.id}`} scroll={true}>
                                <Image
                                    src={`${event.image}`}
                                    alt="кейс"
                                    width="100"
                                    height="100"
                                    className="case-component__cases_item__images"
                                />
                                <div className="case-component__cases_item__buttons">
                                    <button className="case-component__cases_item__buttons_button">
                                        {event.type}
                                    </button>
                                    <button className="case-component__cases_item__buttons_button">
                                        {event.date}
                                    </button>
                                </div>
                                <p className="case-component__cases_item__title">
                                    {event.name}
                                </p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

