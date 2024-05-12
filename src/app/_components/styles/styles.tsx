import {backendHost} from "@/lib/const";
import "./styles.scss";

async function getStyles() {
    const res = await fetch(`${backendHost}/api/styles`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Styles() {
    const styles = await getStyles()
    return (
        <>
            {
                styles.map(style =>
                    <button key={style.id} className="style-component">{style.name}</button>
                )
            }
        </>
    )
}