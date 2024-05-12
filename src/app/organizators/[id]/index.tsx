import "./style.scss";
import Image from "next/image";
import star from "../../../../public/star.svg";
import {backendHost} from "@/lib/const";
import EventCard from "@/app/_components/cardEvent/page";
import CourseCard from "@/app/_components/cardCourses/page";
import TeacherCard from "@/app/_components/cardTeacher/page";


export default function Organizator({ organizator }) {
    return (
        <>
            <div className="organizator-component">
                <div className="organizator-component__info">
                    <div className="organizator-component__info_image">
                        <Image
                            src={`${backendHost}${organizator.image}`}
                            alt="картинка мероприятия"
                            width="500"
                            height="500"
                            className="organizator-component__info_image__img"
                        />
                    </div>
                    <div className="organizator-component__info_description">
                        <div className="organizator-component__info_description__title">
                            <h1 className="organizator-component__info_description__title_h1">{organizator.name}</h1>
                            <p>{organizator.organizator_type === "teacher" && "Преподаватель"}</p>
                        </div>
                        <p className="organizator-component__info_description__text">
                            Адрес: {organizator.address}
                        </p>
                        <p className="organizator-component__info_description__text">
                            Расписание: {organizator.schedule}
                        </p>
                        <p className="organizator-component__info_description__text">
                            vk: {organizator.vk_ref}
                        </p>
                        <p className="organizator-component__info_description__text">
                            tg: {organizator.telegram_ref}
                        </p>
                    </div>
                </div>
                <div className="organizator-component__container">
                    <div className="organizator-component__container_block">
                        <h2>Описание</h2>
                        <p>
                            {organizator.description}
                        </p>
                    </div>
                </div>
                {
                    (organizator.teachers && organizator.teachers.length > 0) &&
                    <div className="organizator-component__teacher">
                        <h2>Преподаватели</h2>
                        <div className="organizator-component__teacher_cards">
                            {
                                organizator?.teachers?.map(teacher =>
                                    <TeacherCard teacher={teacher} />
                                )}
                        </div>
                    </div>
                }
                {
                    (organizator.courses && organizator.courses.length > 0) &&
                    <div className="organizator-component__container">
                        <h2>Курсы</h2>
                        <div className="organizator-component__container_cards">
                            {
                                organizator.courses?.map(course =>
                                    <CourseCard course={course} key={course.id} />
                                )}
                        </div>
                    </div>
                }
                {
                    (organizator.master_classes && organizator.master_classes.length > 0) &&
                    <div className="organizator-component__container">
                        <h2>Мастер-классы</h2>
                        <div className="organizator-component__container_cards">
                            {
                                organizator.master_classes?.map(master_class =>
                                    <CourseCard course={master_class} key={master_class.id} />
                                )}
                        </div>
                    </div>
                }
                {
                    (organizator.events && organizator.events.length > 0) &&
                    <div className="organizator-component__container">
                        <h2>Мероприятия</h2>
                        <div className="organizator-component__container_cards">
                            {
                                organizator.events?.map(event =>
                                    <EventCard event={event} />
                                )
                            }
                        </div>
                    </div>
                }
                {
                    (organizator.reviews && organizator.reviews.length > 0) &&
                    <div className="organizator-component__reviews">
                        <h2>Отзывы</h2>
                        <div className="organizator-component__reviews_container">
                            <div className="organizator-component__reviews_container__item">
                                {/*{*/}
                                {/*    organizator.reviews?.reduce((accumulator, currentValue) =>*/}
                                {/*        Math.floor(accumulator.rating) + Math.floor(currentValue.rating), 0*/}
                                {/*    ) /organizator.reviews?.length*/}
                                {/*}*/}
                                <div className="organizator-component__reviews_container__item_rating">
                                    5 <Image
                                        src={star}
                                        alt="рейтинг"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                            <div className="organizator-component__reviews_container__item">
                                <div className="organizator-component__reviews_container__item_cards">
                                    {
                                        organizator.reviews?.map(review =>
                                            <div className="organizator-component__reviews_container__item_cards__item">
                                                <div className="organizator-component__reviews_container__item_cards__item_autor">
                                                    <p>{review.author}</p>
                                                    <Image
                                                        src={star}
                                                        alt="рейтинг"
                                                        width={20}
                                                        height={20}
                                                    />
                                                    <p>{review.rating}</p>
                                                </div>
                                                <p className="organizator-component__reviews_container__item_cards__item_date">
                                                    {review.date}
                                                </p>
                                                <p className="organizator-component__reviews_container__item_cards__item_body">
                                                    {review.body}
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}