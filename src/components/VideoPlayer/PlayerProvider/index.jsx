import { useContext, useEffect, useState } from "react";
import PlayerContext from "../PlayerContext";
import VideoContext from "../../VideoContext";

const defaultState = {
    playing: true,
    wasPaused: false,
    muted: false,
    volume: 1.0,
    timeline: {
        played: 0.0,
        loaded: 0.0,
    },
    fullscreen: false,
    ended: false,
    seek: 0.0
};

function PlayerProvider({ children }) {
    const { video } = useContext(VideoContext);
    const [state, setState] = useState(defaultState);

    useEffect(() => {
        setState({
            ...defaultState,
            muted: state.muted,
            volume: state.volume
        });
    }, [video.mediaUrl]);

    return <PlayerContext.Provider value={{ state, setState }}>
        {children}
    </PlayerContext.Provider>
}

export default PlayerProvider;