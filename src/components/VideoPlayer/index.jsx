import { useState } from "react";
import PlayerProvider from "./PlayerProvider";
import TimelineProvider from "./TimelineProvider";
import Player from "./Player";
import Timeline from "./Timeline";
import Timecodes from "./Timecodes";
import Buttons from "./Buttons";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    player: [presets.player, styles.player].join(" "),
    controls: [presets.controls, styles.controls].join(" "),
    title: [typography.body, styles.title].join(" "),
    button: {
        default: [presets.dropdown, styles.button].join(" "),
        opened: [presets.dropdown, presets.opened, styles.button].join(" "),
    },
    list: {
        default: styles.list,
        opened: [styles.list, styles.opened].join(" "),
    },
}

function VideoPlayer({ light = true, timecodes }) {
    const [opened, setOpened] = useState(false);
    const onClick = () => setOpened(!opened);

    const buttonStyle = opened ? "opened" : "default";

    return (
        <TimelineProvider>
            <PlayerProvider>
                <div className={styles.videoPlayer}>
                    <div className={classNames.player}>
                        <Player light={light} />
                        <div className={classNames.controls}>
                            <Timeline>
                                <Timecodes />
                            </Timeline>
                            <Buttons />
                        </div>
                    </div>
                    {timecodes &&
                        <section className={styles.timecodes}>
                            <div className={styles.head}>
                                <h6 className={classNames.title}>
                                    Временные метки
                                </h6>
                                <button className={classNames.button[buttonStyle]}
                                    type="button"
                                    onClick={onClick}>
                                    {opened ? "Скрыть" : "Развернуть"}
                                </button>
                            </div>
                            <Timeline type="list">
                                <section className={classNames.list[buttonStyle]}>
                                    <Timecodes type="list" />
                                </section>
                            </Timeline>
                        </section>
                    }
                </div>
            </PlayerProvider>
        </TimelineProvider>
    )
}

export default VideoPlayer;