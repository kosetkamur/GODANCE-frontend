import "./style.scss";
import Image from "next/image";
import Link from "next/link";

export default function TeacherCard({teacher}) {
    return (
        <Link href={`/organizators/${teacher.id}`} scroll={true} className="teacher-card">
            <Image
                src={teacher.photo}
                alt="кейс"
                width="100"
                height="100"
                className="teacher-card__image"
            />
            <div className="teacher-card__description">
                <div className="teacher-card__description_title">
                    <strong>{teacher.name}</strong>
                </div>
                <div className="teacher-card__description_style">
                    {
                        teacher.styles.map(style =>
                            <span>
                                {style.style}
                            </span>
                        )
                    }
                </div>
            </div>
        </Link>
    );
}

