'use client';
import "./footer.scss";
import * as React from "react";
import arrow from "../../../../public/arrow.svg";
import vk from "../../../../public/footerIcon1.svg";
import ok from "../../../../public/footerIcon2.svg";
import tg from "../../../../public/footerIcon3.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const scrollToTop = (e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <footer className="footer">
            <div className="containerAll">
                <div className="footer__mail">
                    <p className="footer__mail_p">связаться с нами</p>
                    <a href="mailto:godance@godance.ru" className="footer__mail_text">
                        godance@godance.ru
                    </a>
                </div>
            </div>
            <div className="footer__line"></div>
            <div className="containerAll">
                <div className="footer__navigation">
                <div className="footer__navigation_column">
                    <div className="footer__navigation_column__mobile">
                        <div className="footer__navigation_column__mobile_items">
                            <Link href="/" className="footer__navigation_column__a">
                                Главная
                            </Link>
                            <Link href="/organizators" className="footer__navigation_column__a">
                                Школы и преподаватели
                            </Link>
                            <Link href="/events" className="footer__navigation_column__a">
                                Мероприятия
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer__navigation_column">
                    <p className="footer__navigation_column__text">
                        для клиентов
                    </p>
                    <a href="mailto:godance-clients@godance.ru" className="footer__navigation_column__a">
                        godance-clients@godance.ru
                    </a>
                    <p className="footer__navigation_column__text">
                        для партнеров
                    </p>
                    <a href="mailto:godance-partners@godance.ru" className="footer__navigation_column__a">
                        godance-partners@godance.ru
                    </a>
                </div>
                <div className="footer__navigation_column">
                    <a href="/" className="footer__navigation_column__a">
                        telegram@godancce.project
                    </a>
                    <div className="footer__navigation_column__socialNetwork">
                        <Link href="/" target="_blank">
                            <Image src={vk} alt="Вконтакте" className="footer__navigation_column__socialNetwork_a" />
                        </Link>
                        <Link href="/" target="_blank">
                            <Image src={ok} alt="Одноклассники" className="footer__navigation_column__socialNetwork_a" />
                        </Link>
                        <Link href="/" target="_blank">
                            <Image src={tg} alt="Телеграмм" className="footer__navigation_column__socialNetwork_a" />
                        </Link>
                    </div>
                </div>
                <div className="footer__navigation_column">
                    <button onClick={scrollToTop} className="footer__navigation_column__button">
                        вверх <Image src={arrow} alt="ввверх" />
                    </button>
                </div>
                <div className="footer__navigation_column footer__navigation_first">
                    <p className="footer__navigation_column__down">
                        ©2024 GODANCE
                    </p>
                </div>
                <div className="footer__navigation_column">
                    <a href="/privacy-policy" className="footer__navigation_column__down">
                        политика конфиденциальности
                    </a>
                </div>
            </div>
            </div>
        </footer>
    );
}