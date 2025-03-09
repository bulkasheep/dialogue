import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";
import Field from "../../components/Field";
import { useContext, useState } from "react";
import AuthContext from "../../components/AuthContext";

const classNames = {
    section: {
        default: styles.section,
        error: [styles.section, styles.error].join(" "),
    },
    title: [typography.h3, styles.title].join(" "),
    forgot: [presets.body2, styles.forgot].join(" "),
    button: [typography.button2, presets.button, presets.primary, presets.blue, styles.button].join(" "),
};

function AuthorizationPage() {
    const { account, login } = useContext(AuthContext);
    const [isError, setError] = useState(false);

    const onLoginClick = (event) => {
        event.preventDefault();

        login(
            document.forms.login.elements.email.value,
            document.forms.login.elements.password.value
        ).then(() => {
            if (!account) setError(true);
        });
    };

    const onClick = () => {
        if (isError) setError(false);
    };

    return <section className={classNames.section[isError ? "error" : "default"]}
        onClick={onClick}>
        <section className={styles.content}>
            <h2 className={classNames.title}>
                Вход
            </h2>
            <form className={styles.form}
                name="login"
                action="post">
                <div className={styles.fields}>
                    <Field label="Ваш email"
                        name="email"
                        type="email" />
                    <Field label="Введите пароль"
                        name="password"
                        type="password" >
                        <button className={classNames.forgot}
                            type="button">
                            Забыли пароль?
                        </button>
                    </Field>
                </div>
                <button className={classNames.button}
                    type="submit"
                    onClick={onLoginClick}>
                    Войти
                </button>
            </form>
        </section>
    </section>
}

export default AuthorizationPage;