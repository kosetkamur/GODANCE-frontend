"use client";
import "./header.scss";
import Link from "next/link";
import * as React from "react";
import {usePathname} from "next/navigation";

export default function Header() {
    const path = usePathname();
    return (
        <header className="header">
            <div className="header__logo">
                <Link href="/">
                    GODANCE
                </Link>
            </div>
            <nav className="header__nav">
                <Link href="/" className={ path === `/` ? `header__nav_item active` : `header__nav_item`}>
                    Главная
                </Link>
                <Link href="/organizators" className={ path === `/organizators` ? `header__nav_item active` : `header__nav_item`}>
                    Школы и преподаватели
                </Link>
                <Link href="/events" className={ path === `/events` ? `header__nav_item active` : `header__nav_item`}>
                    Мероприятия
                </Link>
            </nav>
            <div className="header__auth">
                <a href="/signup" className="header__auth_button">
                    Личный кабинет
                </a>
            </div>
        </header>
    );
}