import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    breadcrumbs: [typography.body2, styles.breadcrumbs].join(" "),
}

function Breadcrumbs({ children }) {
    return <ul className={classNames.breadcrumbs}>
        {children}
    </ul>
}

export default Breadcrumbs;