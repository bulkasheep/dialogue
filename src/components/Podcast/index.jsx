import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { Path, secondsToString } from "../../functions";
import ModalContext from "../ModalContext";
import User from "../User";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    cover: [presets.cover, styles.cover].join(" "),
    title: {
        default: [typography.h3, styles.title].join(" "),
        modal: [typography.h4, styles.title].join(" "),
    },
    description: [typography.body, styles.description].join(" "),
    duration: [typography.body2, styles.duration].join(" "),
};

function Podcast({ data }) {
    const navigate = useNavigate();
    const { showModal } = useContext(ModalContext);
    const url = data.discussion ? Path.discussion(data.discussion.slug) : "";

    const onClick = () => {
        if (data.mediaUrl) showModal(
            <div className={styles.modal}>
                <img className={styles.image} src={data.coverUrl} alt="Обложка" />
                <h3 className={classNames.title.modal}>{data.title}</h3>
                <audio controls autoPlay src={data.mediaUrl} />
            </div>
        );
        else navigate(url);
    };

    return <article className={styles.podcast}>
        <div className={classNames.cover}
            onClick={onClick}>
            <img className={styles.image} src={data.coverUrl} alt="Обложка" />
        </div>
        <section className={styles.section}>
            <article className={styles.content}>
                <article className={styles.info}>
                    <Link to={url}>
                        <h3 className={classNames.title.default}>{data.title}</h3>
                    </Link>
                    <p className={classNames.description}>{data.subtitle}</p>
                </article>
                <ul className={styles.participants}>
                    {data.participants.map((participant, index) =>
                        <li className={styles.participant} key={index}>
                            <User data={participant} />
                        </li>
                    )}
                </ul>
            </article>
            <span className={styles.duration}>
                {secondsToString(data.duration)}
            </span>
        </section>
    </article>
}

export default Podcast;