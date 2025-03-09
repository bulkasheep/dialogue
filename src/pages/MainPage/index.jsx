import PopularThemes from "./content/PopularThemes";
import VideoQuotes from "./content/VideoQuotes";
import PopularDialogues from "./content/PopularDialogues";
import AboutProject from "./content/AboutProject";
import ParticipantsList from "./content/ParticipantsList";
import PodcastsList from "./content/PodcastsList";
import PopularOpinions from "./content/PopularOpinions";
import CelebrityOpinions from "./content/CelebrityOpinions";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    title: {
        h1: [typography.h1, styles.title].join(" "),
        h2: [typography.h2, styles.title].join(" "),
    },
    description: [typography.subtitle, styles.description].join(" "),
    section: {
        default: styles.section,
        centered: [styles.section, styles.centered].join(" "),
        withPagination: [styles.section, styles.paginated].join(" "),
        blue: [styles.section, styles.blue].join(" "),
    },
};

function MainPage() {

    return <>
        <section className={classNames.section.centered}>
            <div className={styles.line1} />
            <article className={styles.head}>
                <h1 className={classNames.title.h1}>
                    Диалог поколений
                </h1>
                <p className={classNames.description}>
                    Здесь родители, дети и эксперты обсуждают то, что их волнует, и находят решения
                </p>
            </article>
            <section className={styles.content}>
                <PopularThemes />
            </section>
        </section>

        <section className={classNames.section.withPagination}>
            <div className={styles.line2} />
            <article className={styles.head}>
                <h2 className={classNames.title.h2}>
                    Мысли вслух
                </h2>
                <p className={classNames.description}>
                    Яркие высказывания наших участников
                </p>
            </article>
            <section className={styles.content}>
                <VideoQuotes />
            </section>
        </section>

        <section className={classNames.section.default}>
            <article className={styles.head}>
                <h2 className={classNames.title.h2}>
                    Популярные диалоги
                </h2>
                <p className={classNames.description}>
                    Дисскусия поколений в длинном видео-формате
                </p>
            </article>
            <section className={styles.content}>
                <PopularDialogues />
            </section>
        </section>

        <section className={classNames.section.blue}>
            <article className={styles.head}>
                <h2 className={classNames.title.h2}>
                    О проекте
                </h2>
                <p className={classNames.description}>
                    Мы объединяем представителей разных поколений, чтобы услышать их мнения на важные и острые темы, которые беспокоят всех нас: как учить и воспитывать детей, и стоит ли это делать. Тут нет единого правильного ответа, есть открытая дискуссия. Присоединяйтесь и делайте собственные выводы. Выбирайте удобный для вас формат.
                </p>
            </article>
            <section className={styles.content}>
                <AboutProject />
            </section>
        </section>

        <section className={classNames.section.withPagination}>
            <div className={styles.line3} />
            <article className={styles.head}>
                <h2 className={classNames.title.h2}>
                    Участники
                </h2>
                <p className={classNames.description}>
                    Опытные родители, дети и эксперты
                </p>
            </article>
            <section className={styles.content}>
                <ParticipantsList />
            </section>
        </section>

        <section className={classNames.section.default}>
            <div className={styles.line4} />
            <article className={styles.head}>
                <h2 className={classNames.title.h2}>
                    Подскасты
                </h2>
                <p className={classNames.description}>
                    Дискуссии в аудиоформате
                </p>
            </article>
            <section className={styles.content}>
                <PodcastsList />
            </section>
        </section>

        <section className={classNames.section.withPagination}>
            <article className={styles.head}>
                <h2 className={classNames.title.h2}>
                    Популярные мнения
                </h2>
                <p className={classNames.description}>
                    Короткие высказывания представителей разных поколений на актуальные темы
                </p>
            </article>
            <section className={styles.content}>
                <PopularOpinions />
            </section>
        </section>

        <section className={classNames.section.withPagination}>
            <div className={styles.line5} />
            <article className={styles.head}>
                <h2 className={classNames.title.h2}>
                    Мнение знаменитостей
                </h2>
            </article>
            <section className={styles.content}>
                <CelebrityOpinions />
            </section>
        </section>
    </>
}

export default MainPage;