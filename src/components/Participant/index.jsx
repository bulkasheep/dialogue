import User from "../User";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    about: [typography.overline, styles.about].join(" "),
};

function Participant({ data }) {
    return <article className={styles.participant}>
        <User style="participant" data={data} />
        <p className={classNames.about}>{data.about}</p>
    </article>
}

export default Participant;