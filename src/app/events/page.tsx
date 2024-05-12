"use client";
import {backendHost} from "@/lib/const";
import * as React from "react";
import "./style.scss";
import EventsComponent from "@/app/_components/events/page";
import EventsFilter from "@/app/events/filter";
import {useAppSelector} from "@/lib/hooks";
import {useEffect, useState} from "react";

async function getEvents(style) {
    const res = await fetch(
        `${backendHost}/api/event?style_id=${style}`,
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

async function getStyles() {
    const res = await fetch(`${backendHost}/api/styles`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function EventsPage() {
    const style = useAppSelector((state) => state.style.style);
    const events = await getEvents(style);
    const styles = await getStyles();
    return (
        <div className="events-page">
            <h1 className="events-page__title">
                Мероприятия
            </h1>
            <div className="events-page__filter">
                <EventsFilter styles={styles} />
            </div>
            <EventsComponent events={events} />
        </div>
    )
}