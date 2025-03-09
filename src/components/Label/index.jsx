import typography from "../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    label: [typography.body, styles.label].join(" "),
};

function Label({ label, children }) {
    return <label className={styles.container}>
        {label &&
            <p className={classNames.label}>{label}</p>}
        {children}
    </label>
}

export default Label;