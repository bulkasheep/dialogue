import Logo from "../../../../assets/icons/Logo.svg";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { Path } from "../../../../functions";
import { navigation } from "./constants";
import Avatar from "../../../../components/Avatar";
import AuthContext from "../../../../components/AuthContext";
import Group from "./Group";
import Item from "./Item";
import Menu from "./Menu";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    login: {
        primary: [typography.button, presets.login, presets.primary].join(" "),
        secondary: [typography.button, presets.login, presets.secondary].join(" ")
    },
};

function Header() {
    const { account } = useContext(AuthContext);
    const [menuState, setMenuState] = useState(false);

    const onBurgerClick = () => setMenuState(!menuState);

    const onAvatarMouseEnter = () => setMenuState(true);
    const onAvatarMouseLeave = () => setMenuState(false);

    return <header className={styles.header}>
        <Link to="/">
            <img src={Logo} />
        </Link>
        <Group style="header">
            {navigation.map(button =>
                <Item key={button.text} {...button} />
            )}
        </Group>
        <section className={styles.rightSection}>
            {account ? (
                <div className={styles.avatar}
                    onMouseEnter={onAvatarMouseEnter}
                    onMouseLeave={onAvatarMouseLeave}
                    onClick={onBurgerClick}>
                    <Avatar data={account.profile} />
                </div>
            ) : (
                <div className={styles.logins}>
                    <Link to={Path.login} className={classNames.login.primary}>Вход</Link>
                    <Link to={Path.login} className={classNames.login.secondary}>Регистрация</Link>
                </div>
            )}
            <button className={styles[menuState ? "x" : "burger"]}
                type="button"
                onClick={onBurgerClick} />

            <Menu show={menuState} />
        </section>
    </header>
}

export default Header;