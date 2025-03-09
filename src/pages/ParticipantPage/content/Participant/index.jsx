import { useContext, useRef, useState } from "react";
import { declination } from "../../../../functions";
import { ParticipantContext } from "../../../../components/ParticipantContext";
import Rating from "./Rating";
import Social from "../../../../components/Social";
import typography from "../../../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    title: [typography.h2, styles.title].join(" "),
    year: [typography.button2, styles.year].join(" "),
    about: {
        mini: [typography.body, styles.about, styles.mini].join(" "),
        all: [typography.body, styles.about].join(" "),
    },
    link: [typography.button, styles.link].join(" "),
};

function Participant() {
    const year = new Date().getFullYear();
    const [showMore, setShowMore] = useState(false);
    const { participant } = useContext(ParticipantContext);
    const aboutRef = useRef(null);

    const onShowMore = () => setShowMore(true);

    return <section className={styles.participant}>
        <article className={styles.info}>
            <article className={styles.personal}>
                <article className={styles.data}>
                    <h2 className={classNames.title}>
                        {participant.firstName} {participant.lastName}
                    </h2>
                    <span className={classNames.year}>
                        {declination(year - (participant.yearOfBirth || year))}
                    </span>
                    <span className={classNames.about[showMore ? "all" : "mini"]}
                        ref={aboutRef}>
                        {participant.about}
                    </span>
                    {!showMore &&
                        (aboutRef.current === null ? false : aboutRef.current.scrollHeight > aboutRef.current.clientHeight) &&
                        <button className={classNames.link}
                            type="button"
                            onClick={onShowMore}>
                            Показать ещё
                        </button>
                    }
                </article>
                <ul className={styles.socials}>
                    {participant.socialWebs &&
                        participant.socialWebs.map((web, index) =>
                            <li key={index}>
                                <a href={web.url}>
                                    <Social type={web.type} />
                                </a>
                            </li>
                        )}
                </ul>
            </article>
            <a className={styles.rating}
                href="#rating">
                <Rating />
            </a>
        </article>
        <img className={styles.avatar}
            src={participant.image}
            alt="Аватар" />
    </section>
}

export default Participant;