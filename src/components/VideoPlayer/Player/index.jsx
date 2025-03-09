import { useContext, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import VideoContext from "../../VideoContext";
import TimelineContext from "../TimelineContext";
import PlayerContext from "../PlayerContext";
import presets from "../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    cover: [presets.cover, styles.cover].join(" "),
};

function Player({ light }) {
    const { video } = useContext(VideoContext);
    const { state, setState } = useContext(PlayerContext);
    const { progress, setProgress } = useContext(TimelineContext);
    ReactPlayer.canPlay(video.mediaUrl);
    const player = useRef(null);

    useEffect(() => {
        if (light) player.current.showPreview();
    }, [video.mediaUrl]);

    useEffect(() => {
        player.current.seekTo(state.seek, "fraction");
    }, [state.seek]);

    const onProgress = (newProgress) => setProgress({
        ...progress,
        played: newProgress.played,
        loaded: newProgress.loaded,
        time: Math.floor(newProgress.playedSeconds)
    });

    const onDuration = (duration) => setProgress({
        ...progress,
        duration: Math.floor(duration)
    });

    const onSeek = () => setState({
        ...state,
        playing: !state.wasPaused
    });

    const onEnded = () => setState({
        ...state,
        playing: false,
        wasPaused: true,
        ended: true
    });

    return <ReactPlayer ref={player}
        url={video.mediaUrl}
        playing={state.playing}
        muted={state.muted}
        volume={state.volume}
        width="100%"
        height="auto"
        light={light}
        progressInterval={350}
        onDuration={onDuration}
        onProgress={onProgress}
        onSeek={onSeek}
        onEnded={onEnded}
        playIcon={video.coverUrl &&
            <div className={classNames.cover}>
                <img src={video.coverUrl} alt="Обложка" />
            </div>
        }
        wrapper={Wrapper} />
}

function Wrapper({ children }) {
    const { progress } = useContext(TimelineContext);
    const { state, setState } = useContext(PlayerContext);

    const onClick = () => {
        if (progress.loaded) setState({
            ...state,
            playing: state.wasPaused,
            wasPaused: !state.wasPaused
        });
    };

    return <div onClick={onClick}>
        {children}
    </div>
}

export default Player;