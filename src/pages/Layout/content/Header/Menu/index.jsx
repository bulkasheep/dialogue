import { useContext } from "react";
import { navigation, constLink, links } from "../constants";
import Avatar from "../../../../../components/Avatar";
import AuthContext from "../../../../../components/AuthContext";
import Group from "../Group";
import Item from "../Item";
import typography from "../../../../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    menu: {
        close: [styles.menu, styles.close].join(" "),
        show: [styles.menu, styles.show].join(" "),
    },
    button: {
        default: styles.button,
        const: [styles.button, styles.const].join(" "),
    },
};

function Menu({ show = false }) {
    const { account, logout } = useContext(AuthContext);

    return <nav className={classNames.menu[show ? "show" : "close"]}>
        {
            // Если есть данные аккаунта - отобраем аватар
            // и связанные с ним ссылки

            account ? <>
                <div className={styles.account}>
                    <div className={styles.accountData}>
                        <Avatar data={account.profile} />
                        <div className={styles.data}>
                            <span className={typography.button}>
                                {account.profile.firstName} {account.profile.lastName}
                            </span>
                            <span className={typography.body}>
                                {account.email}
                            </span>
                        </div>
                    </div>
                    <button className={styles.logout}
                        type="button"
                        onClick={logout} />
                </div>
                {
                    // Связанные с аккаунтами ссылки
                    // В противном случае - только "постоянную" кнопку

                    links.map((group, index) =>
                        <Group key={index}>
                            {group.map(button =>
                                <Item key={button.text} {...button} />
                            )}
                        </Group>
                    )}
            </> :
                <Group>
                    <Item {...constLink} />
                </Group>
        }
        <Group>
            {
                // Дублируется навыигация из хедера
                navigation.map((button, index) =>
                    <Item key={index} {...button} />
                )}
        </Group>

        {!account &&
            <Group>
                <Item url="login" style="default" text="Вход" />
                <Item url="login" style="default" text="Регистрация" />
            </Group>
        }
    </nav>
}

export default Menu;