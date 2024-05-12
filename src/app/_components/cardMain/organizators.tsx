import "./style.scss";
import * as React from "react";
import {backendHost} from "@/lib/const";
import Card from "@/app/_components/cardMain/index";

async function getData() {
    const res = await fetch(
        `${backendHost}/api/organizator`,
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

export default async function CardComponent() {
    const organizators = await getData();
    return (
        <Card organizators={organizators} />
    );
}