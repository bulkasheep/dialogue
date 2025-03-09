import { useContext } from "react";
import { Link } from "react-router";
import { ParticipantContext } from "../../components/ParticipantContext";
import { ParticipantProvider, ParticipantReviewsProvider } from "../../components/ParticipantProvider";
import Breadcrumbs from "../../components/Breadcrumbs";
import Participant from "./content/Participant";
import Dialogues from "./content/Dialogues";
import AverageRating from "./content/AverageRating";
import Reviews from "./content/Reviews";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    back: [typography.body2, presets.back, styles.back].join(" "),
    title: [typography.h2, styles.title].join(" "),
    description: [typography.subtitle, styles.description].join(" "),
    section: {
        default: styles.section,
        withPagination: [styles.section, styles.paginated].join(" "),
    },
};

function CurrentParticipant() {
    const { participant } = useContext(ParticipantContext);

    return <>
        {participant.firstName} {participant.lastName}
    </>
}

function ParticipantPage() {
    return <ParticipantProvider>
        <ParticipantReviewsProvider>
            <nav className={styles.navigation}>
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
                        <CurrentParticipant />
                    </li>
                </Breadcrumbs>
            </nav>
            <section className={styles.sections}>
                <section className={classNames.section.default}>
                    <Participant />
                </section>
                <section className={classNames.section.default}>
                    <article className={styles.head}>
                        <h2 className={classNames.title}>
                            Диалоги
                        </h2>
                        <p className={classNames.description}>
                            В которых принимал участие эксперт
                        </p>
                    </article>
                    <section className={styles.content}>
                        <Dialogues />
                    </section>
                </section>
                <section id="rating" className={classNames.section.withPagination}>
                    <article className={styles.head}>
                        <h2 className={classNames.title}>
                            Рейтинг
                        </h2>
                        <p className={classNames.description}>
                            Как зрители, слушатели, читатели оценили эксперта
                        </p>
                    </article>
                    <article className={styles.rating}>
                        <AverageRating />
                    </article>
                    <section className={styles.content}>
                        <Reviews />
                    </section>
                </section>
            </section>
        </ParticipantReviewsProvider>
    </ParticipantProvider>
}

export default ParticipantPage;