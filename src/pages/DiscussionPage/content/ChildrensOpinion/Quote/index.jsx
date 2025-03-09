import typography from "../../../../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    quote: {
        blue: [styles.text, styles.blue].join(" "),
        orange: [styles.text, styles.orange].join(" "),
    },
    author: [typography.body2, styles.name].join(" "),
    position: [typography.overline, styles.position].join(" "),
};

function Quote({ data }) {
    return <blockquote className={styles.quote}>
        <q className={classNames.quote[data.colorScheme]}>
            {data.text}
        </q>
        <hgroup className={styles.author}>
            <h6 className={classNames.author}>
                {data.author}
            </h6>
            <p className={classNames.position}>
                {data.authorPosition}
            </p>
        </hgroup>
    </blockquote>
}

export default Quote;