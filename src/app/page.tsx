import styles from "./page.module.scss";
import Styles from "@/app/_components/styles/styles";
import CardComponent from "@/app/_components/cardMain/organizators";
import Search from "@/app/_components/search/search";
import EventsMainComponent from "@/app/_components/eventsMain/page";
import CardsComponent from "@/app/_components/cards/page";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1 className={styles.main__title}>
            Танцуй вместе
        </h1>
        <h1 className={styles.main__title}>
            > > > > > с <span className={styles.main__title_border} >GODANCE</span>
        </h1>
        <div className={styles.main__search}>
            <Search />
        </div>
      <div className={styles.main__styles}>
        <Styles />
      </div>
        <h2>
            Школы и преподаватели
        </h2>
      <CardComponent />
        <h2>
            Мероприятия
        </h2>
      <EventsMainComponent />
      <CardsComponent />
    </main>
  );
}
