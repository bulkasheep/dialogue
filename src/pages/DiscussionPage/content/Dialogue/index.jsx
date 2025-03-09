import { useState, useContext, useEffect } from "react";
import { DiscussionContext } from "../../../../components/DiscussionContext";
import SegmentControl from "../../../../components/SegmentControl";
import VideoPlayer from "../../../../components/VideoPlayer";
import VideoContext from "../../../../components/VideoContext";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    subtitle: [typography.subtitle, styles.description].join(" "),
    title: [typography.h1, styles.title].join(" "),
    description: [typography.body, styles.description].join(" "),
    button: [typography.button, presets.login, presets.primary, presets.color, styles.button].join(" "),
};

const segments = [
    { title: "Трейлер", value: true },
    { title: "Полная версия", value: false },
];

function Dialogue() {
    const { dialogue } = useContext(DiscussionContext);
    const { setVideo } = useContext(VideoContext);

    const [checked, setChecked] = useState(segments[0].value);

    useEffect(() => {
        if (dialogue.videos) setVideo({
            ...(dialogue.videos.find(video => video.isPromo === checked)),
            coverUrl: dialogue.coverUrl
        });
    }, [dialogue.videos, checked]);

    const onClick = setChecked;

    return <article id="dialogue" className={styles.dialogue}>
        <article className={styles.info}>
            <p className={classNames.subtitle}>
                {dialogue.subtitle}
            </p>
            <h1 className={classNames.title}>
                {dialogue.title}
            </h1>
            <p className={classNames.description}>
                {dialogue.description}
            </p>
        </article>
        <div className={styles.filter}>
            <SegmentControl list={segments}
                checkedValue={checked}
                onChange={onClick} />
        </div>
        <button className={classNames.button}
            type="button">
            Скачать конспект
        </button>
        <div className={styles.video}>
            {dialogue.videos && <VideoPlayer timecodes={!checked} />}
        </div>
    </article>
}

export default Dialogue;