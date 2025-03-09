import styles from "./styles.module.css";

const classNames = {
    group: {
        menu: [styles.navigation, styles.menu].join(" "),
        header: [styles.navigation, styles.header].join(" "),
    }
};

function Group({ children, style = "menu" }) {

    return <ul className={classNames.group[style]}>
        {children}
    </ul>
}

export default Group;