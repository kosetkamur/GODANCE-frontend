import "./style.scss";
import * as React from "react";
import Image from 'next/image';

export default  function CardsComponent() {
    const cards = [
        {
            order: 1,
            title: "наши преимущества",
            description: "мы помогаем объеденить танцоров, найти идеального преподавателя, а также успешно строить свой бизнес",
            events: "хип-хоп, high hills, джаз-модерн, зумба, сontemporary, восточные танцы, бальные танцы, аргентинское танго, латиноамериканские танцы, балет, хип-хоп, frame up"
        },
        {
            order: 2,
            title: "для бизнеса",
            description: "Поможем выделиться и достичь своих целей в мире бизнеса, подчеркнув свой индивидуальный стиль",
            events: "хип-хоп, high hills, джаз-модерн, зумба, сontemporary, восточные танцы, бальные танцы, аргентинское танго, латиноамериканские танцы, балет, хип-хоп, frame up"
        },
        {
            order: 3,
            title: "организация мероприятий",
            description: "Здесь любой тацнор сможет для себя найти подходящие мероприятия",
            events: "хип-хоп, high hills, джаз-модерн, зумба, сontemporary, восточные танцы, бальные танцы, аргентинское танго, латиноамериканские танцы, балет, хип-хоп, frame up"
        },
        {
            order: 4,
            title: "для танцоров",
            description: "здесь каждый найдет что-то для себя",
            events: "хип-хоп, high hills, джаз-модерн, зумба, сontemporary,восточные танцы, бальные танцы, аргентинское танго, латиноамериканские танцы, балет, хип-хоп, frame up"
        },
    ]
    return (
        <div className="cards-components">
            {
                cards.map(card => (
                    <div className={`cards-components_item cards-components_item${card.order}`}>
                        <div className="cards-components_item__container">
                            <div className="cards-components_item__container_num">
                                {"0"+card.order}
                            </div>
                            <div className="cards-components_item__container_title">
                                {card.title}
                            </div>
                            <div className="cards-components_item__container_subtitle">
                                {card.description}
                            </div>
                        </div>
                        <div className="cards-components_item__container">
                            <div className="cards-components_item__container_image">
                                {/*{ card.background_image &&*/}
                                {/*    <Image*/}
                                {/*        src={card.background_image}*/}
                                {/*        width="100"*/}
                                {/*        height="100"*/}
                                {/*        className="cards-components_item__container_image__img"*/}
                                {/*        alt="иконка" />}*/}
                            </div>
                        </div>
                        <div className="cards-components_item__container">
                            <div className="cards-components_item__container_runStroke">
                                <div className="cards-components_item__container_runStroke__text">
                                    {card.events} {card.events}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}