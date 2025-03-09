import { useContext } from "react";
import { secondsToString } from "../../../functions";
import TimelineContext from "../TimelineContext";
import typography from "../../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    time: [typography.body2, styles.time].join(" "),
};

function Time() {
    const { progress } = useContext(TimelineContext);

    return <span className={classNames.time}>
        {secondsToString(progress.time) + " / " + secondsToString(progress.duration)}
    </span>
}

export default Time;