import { useContext } from "react";
import { Link, useLocation } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs";
import { DiscussionProvider, DiscussionOpinionsProvider } from "../../components/DiscussionProvider";
import Dialogue from "./content/Dialogue";
import Participants from "./content/Participants";
import Monologues from "./content/Monologues";
import ChildrensOpinion from "./content/ChildrensOpinion";
import Opinions from "./content/Opinions";
import Podcasts from "./content/Podcasts";
import FocusGroup from "./content/FocusGroup";
import { DiscussionContext } from "../../components/DiscussionContext";
import VideoProvider from "../../components/VideoProvider";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    back: [typography.body2, presets.back, styles.back].join(" "),
    chip: {
        default: [typography.button, presets.chip, styles.chip].join(" "),
        selected: [typography.button, presets.chip, presets.selected, styles.chip, styles.selected].join(" "),
    },
    section: {
        default: styles.section,
        withPagination: [styles.section, styles.paginated].join(" "),
        blue: {
            default: [styles.section, styles.blue].join(" "),
            withPagination: [styles.section, styles.paginated, styles.blue].join(" "),
        }
    },
    title: [typography.h2, styles.title].join(" "),
    description: [typography.subtitle, styles.description].join(" "),
    subtitle: [typography.subtitle, styles.description].join(" "),
};

const chips = [
    {
        hash: "#dialogue",
        title: "Смотреть"
    },
    {
        hash: "#podcast",
        title: "Слушать"
    },
];

function CurrentDiscussion() {
    const { dialogue } = useContext(DiscussionContext);

    return <>
        {dialogue.title}
    </>
}

function DiscussionPage() {
    const location = useLocation();

    return <>
        <DiscussionProvider>
            <nav className={styles.navigation}>
                <div className={styles.breadcrumbs}>
                    <Link to="/">
                        <div className={classNames.back}>
                            Назад
                        </div>
                    </Link>
                    <Breadcrumbs>
                        <li>
                            <Link to="/">
                                <span>Главная</span>
                            </Link>
                        </li>
                        <li>
                            <CurrentDiscussion />
                        </li>
                    </Breadcrumbs>
                </div>
                <ul className={styles.chips}>
                    {chips.map((chip, index) =>
                        <li key={index}>
                            <a href={chip.hash}>
                                <span className={classNames.chip[chip.hash === location.hash ? "selected" : "default"]}>
                                    {chip.title}
                                </span>
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
            <section className={classNames.section.default}>
                <VideoProvider>
                    <Dialogue />
                </VideoProvider>
            </section>
            <section className={classNames.section.withPagination}>
                <div className={styles.line6} />
                <article className={styles.head}>
                    <h2 className={classNames.title}>
                        Участники
                    </h2>
                </article>
                <section className={styles.content}>
                    <Participants />
                </section>
            </section>
            <section className={classNames.section.withPagination}>
                <article className={styles.head}>
                    <h2 className={classNames.title}>
                        Монологи
                    </h2>
                    <p className={classNames.description}>
                        Ключевые тезисы участников Диалога
                    </p>
                </article>
                <section className={styles.content}>
                    <Monologues />
                </section>
            </section>
            <DiscussionOpinionsProvider>
                <section className={classNames.section.blue.default}>
                    <article className={styles.head}>
                        <h2 className={classNames.title}>
                            Что думают дети
                        </h2>
                        <p className={classNames.description}>
                            Комментарии детей
                        </p>
                    </article>
                    <section className={styles.content}>
                        <ChildrensOpinion />
                    </section>
                </section>
                <section className={classNames.section.withPagination}>
                    <article className={styles.head}>
                        <h2 className={classNames.title}>
                            Мнения
                        </h2>
                        <p className={classNames.description}>
                            Взгляды людей разных поколений
                        </p>
                    </article>
                    <section className={styles.content}>
                        <Opinions />
                    </section>
                </section>
            </DiscussionOpinionsProvider>
            <section id="podcast" className={classNames.section.default}>
                <div className={styles.line7} />
                <article className={styles.head}>
                    <h2 className={classNames.title}>
                        Подкасты
                    </h2>
                    <p className={classNames.description}>
                        Диалог в аудиоформате
                    </p>
                </article>
                <section className={styles.content}>
                    <Podcasts />
                </section>
            </section>
            <section className={classNames.section.blue.withPagination}>
                <article className={styles.head}>
                    <h2 className={classNames.title}>
                        Фокус-группа
                    </h2>
                </article>
                <section className={styles.content}>
                    <FocusGroup />
                </section>
            </section>
        </DiscussionProvider>
    </>
}

export default DiscussionPage;