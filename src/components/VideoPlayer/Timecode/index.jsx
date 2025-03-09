import { useContext, useRef, useState } from "react";
import { secondsToString } from "../../../functions";
import VideoContext from "../../VideoContext";
import typography from "../../../typography.module.css";
import presets from "../../../presets.module.css";
import styles from "./styles.module.css";
import PlayerContext from "../PlayerContext";

const classNames = {
    timecode: {
        timeline: [presets.timecode, styles.timecode, styles.timeline].join(" "),
        list: [presets.timecode, styles.timecode, styles.list].join(" "),
    },
    comment: {
        timeline: [typography.description, styles.comment].join(" "),
        list: [typography.overline, styles.comment].join(" "),
    },
    time: {
        timeline: [typography.description, styles.time].join(" "),
        list: [typography.description, styles.time].join(" "),
    },
};

function Timecode({ data, type }) {
    const { video } = useContext(VideoContext);
    const { state, setState } = useContext(PlayerContext);

    const onClick = () => {
        if (type === "list") setState({
            ...state,
            seek: (data.start / (video.duration / 1000))
        });
    };

    return <article className={classNames.timecode[type]}
        style={{
            "--start": data.start,
            "--end": data.end,
            "--duration": video.duration
        }}>
        <article className={styles.container}
            onClick={onClick}>
            <div className={styles.preview}>
                <img className={styles.image}
                    src={data.imageUrl}
                    alt="Превью" />
            </div>
            <p className={classNames.comment[type]}>
                {data.comment}
            </p>
            <div className={styles.info}>
                <span className={classNames.time[type]}>
                    {secondsToString(data.start)}
                </span>
                <div className={styles.segment}></div>
            </div>
        </article>
    </article>
}

export default Timecode;