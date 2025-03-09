import { Link } from "react-router";
import styles from "./styles.module.css";

const classNames = {
    button: {
        default: styles.button,
        const: [styles.button, styles.const].join(" "),
    },
};

function Item({ style, text, url = undefined }) {
    return <li className={classNames.button[style]}>
        <Link to={url}>{text}</Link>
    </li>
}

export default Item;