import { useContext, useRef } from "react";
import { clamp } from "../../../functions";
import TimelineContext from "../TimelineContext";
import PlayerContext from "../PlayerContext";
import presets from "../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    timeline: {
        player: [presets.timeline, styles.timeline, styles.player].join(" "),
        list: [styles.timeline, styles.list].join(" "),
    },
};

function Timeline({ type = "player", children }) {

    return (type === "player" ?
        <PlayerTimeline>
            {children}
        </PlayerTimeline> :
        <TimelineBase type="list">
            {children}
        </TimelineBase>
    )
}

function PlayerTimeline({ children }) {
    const { state, setState } = useContext(PlayerContext);
    const fraction = useRef(0);
    const timeline = useRef(null);

    const calcFraction = (event) => {
        const track = timeline.current.getBoundingClientRect();
        const cursorPosX = event.clientX || event.touches[0].clientX;
        fraction.current = clamp((cursorPosX - track.left) / track.width);

        timeline.current.style.setProperty("--played-fr", fraction.current);
    };

    const handleCursorMove = calcFraction;

    const handleCursorUp = () => {
        document.removeEventListener("mousemove", handleCursorMove);
        document.removeEventListener("mouseup", handleCursorUp);
        setState({
            ...state,
            seek: fraction.current
        });
    };

    const handleCursorDown = (event) => {
        document.addEventListener("mousemove", handleCursorMove);
        document.addEventListener("mouseup", handleCursorUp);
        calcFraction(event);
        setState({
            ...state,
            playing: false,
            seeking: true
        });
    };

    return <TimelineBase type="player"
        innerRef={timeline}
        onMouseDown={handleCursorDown}
        onTouchStart={handleCursorDown}>
        {children}
    </TimelineBase>
}

function TimelineBase({ type, innerRef, ...props }) {
    const { progress } = useContext(TimelineContext);

    return <div className={classNames.timeline[type]}
        ref={innerRef}
        style={{ "--played-fr": progress.played, "--loaded-fr": progress.loaded }}
        {...props} />
}

export default Timeline;