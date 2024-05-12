import {backendHost} from "@/lib/const";
import "./style.scss";
import Image from "next/image";

async function getEvent(id) {
    const res = await fetch(
        `${backendHost}/api/event/${id}`,
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

export default async function Page({ params }: { params: {id} }) {
    const event = await getEvent(params.id);

    return (
        <>
            <div className="event">
                <div className="event__container">
                    <div className="event__container_image">
                        <Image
                            src={event.image}
                            alt="картинка мероприятия"
                            width={500}
                            height={500}
                            className="event__container_image__img"
                        />
                    </div>
                    <div className="event__container_description">
                        <div className="event__container_description__title">
                            <h1>{event.name}</h1>
                            <p>{event.type}</p>
                        </div>
                        <p className="event__container_description__text">
                            Адрес: {event.address}
                        </p>
                        <p className="event__container_description__text">
                            Длительность: {event.duration}
                        </p>
                        <p className="event__container_description__text">
                            Дата: {event.date}
                        </p>
                        <p className="event__container_description__text">
                            Количество участников: {event.count_people}
                        </p>
                        <p className="event__container_description__text">
                            Контакты: {event.contact}
                        </p>
                        <p className="event__container_description__text">
                            Цена: {event.price}
                        </p>
                    </div>
                </div>
                <div className="event__container">
                    <div className="event__container_block">
                        <h2>Описание</h2>
                        <p>
                            {event.description}
                        </p>
                    </div>
                    <div className="event__container_block">
                        <h2>Условия</h2>
                        <p>
                            Призы: {event.present}
                        </p>
                        <p>
                            {event.conditions}
                        </p>
                    </div>
                </div>
                <div className="event__container">
                    <div className="event__container_text">
                        <h2>Организатор</h2>
                        <p>Имя: {event.teacher.name}</p>
                        <div className="event__container_cards">
                            {
                            event.teacher.styles.map(style =>
                                <div className="event__container_cards__card">
                                    <p>
                                        {style.style}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}