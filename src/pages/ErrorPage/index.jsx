import { Link } from "react-router";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: [typography.button, presets.button, presets.primary, presets.color].join(" "),
};

function ErrorPage() {
    return <section className={styles.section}>
        <span className={typography.h3}>Страница не найдена</span>
        <Link to="/" className={classNames.button}>
            <span>Вернуться на главную</span>
        </Link>
    </section>
}

export default ErrorPage;