import {backendHost} from "@/lib/const";
import Link from "next/link";
import * as React from "react";
import Image from 'next/image';

import "./style.scss";
import CardComponent from "@/app/_components/cardMain/organizators";

async function getOrganizators() {
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

export default async function OrganizatorsPage() {
    const organizators = await getOrganizators();

    return (
        <div className="organizatos-page">
            <h1 className="organizatos-page__title">
                Школы и преподаватели
            </h1>
            <CardComponent />
        </div>
    )
}