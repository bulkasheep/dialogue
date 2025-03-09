import { useState } from "react";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    dropdown: {
        closed: [presets.dropdown, styles.dropdown].join(" "),
        opened: [presets.dropdown, styles.dropdown, styles.opened].join(" ")
    },
    list: {
        closed: styles.list,
        opened: [styles.list, styles.opened].join(" ")
    }
};

function Dropdown({ title, children }) {
    const [state, setState] = useState("closed");

    const onClick = () => setState(state === "closed" ? "opened" : "closed");

    return <>
        <button className={classNames.dropdown[state]}
            type="button"
            onClick={onClick}>
            {title}
        </button>
        <div className={classNames.list[state]}>
            {children}
        </div>
    </>
}

export default Dropdown;