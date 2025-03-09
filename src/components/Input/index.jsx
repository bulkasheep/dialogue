import { useState } from "react";
import presets from '../../presets.module.css';
import styles from './styles.module.css';

const classNames = {
    input: [presets.input, styles.input].join(" "),
}

function Input({ name, type = "text", placeholder, value, onChange, onEnterKeyDown }) {
    const [storedValue, setValue] = useState(value);

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };

    const handleEnterKeyDown = (event) => {
        if (event.key === "Enter") onEnterKeyDown(storedValue);
    }

    return <input className={classNames.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={storedValue}
        onChange={handleChange}
        onKeyDown={handleEnterKeyDown} />
}

export default Input;