import BannerImage from "../../assets/images/a8671e915a4e9ad77ff374273ffd5098.png";
import { Link } from "react-router";
import { Path } from "../../functions";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    h3: [typography.h3, styles.h3].join(" "),
    body: [typography.body, styles.body].join(" "),
    login: {
        primary: [typography.button, presets.login, presets.primary, presets.color].join(" "),
        secondary: [typography.button, presets.login, presets.secondary, presets.color].join(" "),
    },
    container: {
        white: [styles.container, styles.white].join(" "),
        grey: [styles.container, styles.grey].join(" "),
        modal: [styles.container, styles.modal].join(" "),
    }
};

function AuthBanner({ style = "grey" }) {
    return <article className={classNames.container[style]}>
        <img className={styles.banner} src={BannerImage} alt="Баннер" />
        <article className={styles.content}>
            <h3 className={classNames.h3}>Комментируйте, оценивайте, сохраняйте</h3>
            <p className={classNames.body}>Откройте все возможности платформы после простой регистрации</p>
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

export default AuthBanner;