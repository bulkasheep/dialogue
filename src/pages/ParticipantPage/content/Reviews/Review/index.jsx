import { useContext } from "react";
import ModalContext from "../../../../../components/ModalContext";
import User from "../../../../../components/User";
import Stars from "../../../../../components/Stars";
import typography from "../../../../../typography.module.css";
import presets from "../../../../../presets.module.css";
import styles from "./styles.module.css";

const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
};

const classNames = {
    review: {
        mini: [styles.review, styles.mini].join(" "),
        full: [styles.review, styles.full].join(" "),
    },
    date: [typography.overline, styles.date].join(" "),
    message: [typography.body, styles.message].join(" "),
    link: [presets.link, typography.button, styles.link].join(" "),
};

function Review({ data, style = "mini" }) {
    const date = new Date(data.createdAt);
    const { showModal } = useContext(ModalContext);

    const onClick = () => showModal(
        <Review data={data} style="full" />
    );

    return <article className={classNames.review[style]}>
        <article className={styles.head}>
            <User data={data.author} type="user" />
            <div className={styles.rating}>
                <div className={styles.stars}>
                    <Stars filled={data.rating} />
                </div>
                <span className={classNames.date}>
                    {date.toLocaleDateString("ru-RU", options)}
                </span>
            </div>
        </article>
        <p className={classNames.message}>
            {data.message}
        </p>
        <button className={classNames.link}
            type="button"
            onClick={onClick}>
            Читать
        </button>
    </article>
}

export default Review;