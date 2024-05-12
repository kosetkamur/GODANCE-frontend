import "./style.scss";
import Image from "next/image";
import mainArrow from "../../../../public/mainArrow.svg";
import Link from "next/link";
import {backendHost} from "@/lib/const";

async function getEvents() {
    const res = await fetch(
        `${backendHost}/api/event`,
        {
            method: 'GET',
            cache: "force-cache"
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function EventsMainComponent() {
    const data = await getEvents();

    const events = data.slice(0, 7);
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
            <a href={`/events`} className="case-component__showAll">
                <p className="case-component__showAll_title">
                    смотреть все мероприятия
                </p>
                <Image
                    src={mainArrow} alt="стрелка" width="100" height="15" className="case-component__showAll_arrow" />
            </a>
        </div>
    );
}

