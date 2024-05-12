import "./style.scss";
import * as React from "react";
import Image from 'next/image';
import star from "../../../../public/star.svg";
import {backendHost} from "@/lib/const";
import Link from "next/link";

export default function Card({organizators}) {
    return (
        <div className="card-component">
            {
                organizators.map(organizator =>
                    <Link href={`/organizators/${organizator.id}`} className="card-component__container">
                        <div className="card-component__container_images">
                            <Image src={`${backendHost}${organizator.image}`} alt="фотография" width="200" height="200"  className="card-component__container_images_img" />
                        </div>
                        <div className="card-component__container_text">
                            <p className="card-component__container_text__name" suppressHydrationWarning>
                                {organizator.rating} <Image src={star} alt="рейтинг"  height="20" /> {organizator.name}
                            </p>
                            <p className="card-component__container_text__address" suppressHydrationWarning>
                                {organizator.address}
                            </p>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}