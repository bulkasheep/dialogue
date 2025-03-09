import { useContext, useEffect, useState } from "react";
import TimelineContext from "../TimelineContext";
import VideoContext from "../../VideoContext";

const defaultData = {
    played: 0.0,
    loaded: 0.0,
    time: 0.0,
    duration: 0.0
};

function TimelineProvider({ children }) {
    const { video } = useContext(VideoContext);
    const [progress, setProgress] = useState(defaultData);

    useEffect(() => {
        setProgress(defaultData);
    }, [video.mediaUrl]);

    return <TimelineContext.Provider value={{ progress, setProgress }}>
        {children}
    </TimelineContext.Provider>
}

export default TimelineProvider;