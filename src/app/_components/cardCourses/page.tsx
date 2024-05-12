import "./style.scss";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({course}) {
    return (
        <Link href={`/course/${course.id}`} scroll={true} className="course-card">
            <Image
                src={`${course.image}`}
                alt="кейс"
                width="100"
                height="100"
                className="course-card__image"
            />
            <div className="course-card__description">
                <div className="course-card__description_title">
                    <strong>{course.name}</strong>
                </div>
                <div className="course-card__description_style">
                    {course.style.name}
                </div>
                <div className="course-card__description_text">
                     Длительность {course.duration} минут
                </div>
                <div className="course-card__description_text">
                    Дата начала {course.date}
                </div>
            </div>
        </Link>
    );
}

