import {backendHost} from "@/lib/const";
import "./style.scss";
import Organizator from "@/app/organizators/[id]/index";

async function getOrganizator(id) {
    const res = await fetch(
        `${backendHost}/api/organizator/${id}`,
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

export default async function OrganizatorPage({ params }: { params: {id} }) {
    const organizator = await getOrganizator(params.id);

    return (
        <Organizator organizator={organizator} />
    )
}