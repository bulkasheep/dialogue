import { useContext } from "react";
import PlayerContext from "../PlayerContext";
import Time from "../Time";
import styles from "./styles.module.css";

const classNames = {
    restart: [styles.button, styles.restart].join(" "),
    play: [styles.button, styles.play].join(" "),
    pause: [styles.button, styles.pause].join(" "),
    soundoff: [styles.button, styles.soundoff].join(" "),
    soundon: [styles.button, styles.soundon].join(" "),
    expand: [styles.button, styles.expand].join(" "),
    collapse: [styles.button, styles.collapse].join(" "),
};

function Buttons() {
    const { state, setState } = useContext(PlayerContext);

    const onRestartClick = () => setState({
        ...state,
        playing: true,
        wasPaused: false,
        ended: false
    });

    const onPlayClick = () => setState({
        ...state,
        playing: state.wasPaused,
        wasPaused: !state.wasPaused
    });

    const onMuteClick = () => setState({
        ...state,
        muted: !state.muted,
    });

    const onFullscreenClick = () => setState({
        ...state,
        fullscreen: !state.fullscreen,
    });

    const onVolumeChange = (event) => setState({
        ...state,
        volume: parseFloat(event.target.value)
    });

    return <div className={styles.buttons}>
        {state.ended ?
            <button className={classNames.restart}
                type="button"
                onClick={onRestartClick} />
            :
            <button className={classNames[state.playing ? "pause" : "play"]}
                type="button"
                onClick={onPlayClick} />
        }
        <button className={classNames[state.muted ? "soundoff" : "soundon"]}
            type="button"
            onClick={onMuteClick} />
        <input className={styles.volume}
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={state.volume}
            onChange={onVolumeChange} />
        <Time />
        <button className={classNames[state.fullscreen ? "collapse" : "expand"]}
            type="button"
            onClick={onFullscreenClick} />
    </div>
}

export default Buttons;