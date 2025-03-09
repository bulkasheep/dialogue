import { Link } from "react-router";
import { Path } from "../../../../../functions";
import typography from "../../../../../typography.module.css";
import presets from "../../../../../presets.module.css";
import styles from "./styles.module.css";


const classNames = {
    title: [typography.h3, styles.title].join(" "),
    body: [typography.body, styles.body].join(" "),
    login: {
        primary: [typography.button, presets.login, presets.primary, presets.color].join(" "),
        secondary: [typography.button, presets.login, presets.secondary, presets.color].join(" "),
    },
};

function Banner() {
    return <article className={styles.banner}>
        <article className={styles.head}>
            <h3 className={classNames.title}>
                Ещё <span className={styles.hilight}>больше мнений</span> после регистрации
            </h3>
            <p className={classNames.body}>
                Откройте все возможности платформы
            </p>
        </article>
        <div className={styles.logins}>
            <Link to={Path.login}>
                <div className={classNames.login.primary}>Вход</div>
            </Link>
            <Link to={Path.login}>
                <div className={classNames.login.secondary}>Регистрация</div>
            </Link>
        </div>
    </article>
}

export default Banner;