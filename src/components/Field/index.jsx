import { useState } from "react";
import Input from "../Input";
import Label from "../Label";
import styles from "./styles.module.css";

function Field({ label, name, type = "text", placeholder = "", value = "", children, onChange = function () { }, onEnterKeyDown = function () { } }) {
    const [currentType, changeType] = useState(type);

    const onEyeClick = () => {
        changeType(currentType === "password" ? "text" : "password");
    };

    return <Label label={label}>
        <div className={styles.field}>
            <Input name={name}
                placeholder={placeholder}
                value={value}
                type={currentType}
                onChange={onChange}
                onEnterKeyDown={onEnterKeyDown} />
            {type === "password" &&
                <button className={styles.eye}
                    type="button"
                    onClick={onEyeClick} />
            }
        </div>
        {children}
    </Label>
}

export default Field;