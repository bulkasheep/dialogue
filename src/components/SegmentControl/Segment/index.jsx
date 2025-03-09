import typography from "../../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    segment: {
        default: [typography.button2, styles.segment].join(" "),
        checked: [typography.button2, styles.segment, styles.checked].join(" "),
    },
};

function Segment({ title = "", value = "", checked, onClick }) {
    const style = checked ? "checked" : "default";

    const handleClick = () => {
        onClick(value);
    };

    return <button className={classNames.segment[style]}
        type="button"
        onClick={handleClick}>
        {title}
    </button>
}

export default Segment;