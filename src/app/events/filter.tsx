"use client";
import { useAppSelector, useAppDispatch, useAppStore } from '@/lib/hooks';
import * as React from "react";
import "./style.scss";
import {setStyle} from "@/lib/features/getEventStyles/getEventStyles";

export default function EventsFilter({styles}) {
    // const store = useAppStore();
    // const style = useAppSelector((state) => state.style.style);
    // const dispatch = useAppDispatch();

    return (
        <>
            {
                styles.map(style =>
                    <button onClick={() => dispatch(setStyle(style.name))} className="events-page__filter_button">
                        {style.name}
                    </button>
                )
            }
        </>
    )
}