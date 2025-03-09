import { useState } from "react";
import VideoContext from "../VideoContext";

function VideoProvider({ children }) {
    const [video, setVideo] = useState({});

    return <VideoContext.Provider value={{ video, setVideo }}>
        {children}
    </VideoContext.Provider>
}

export default VideoProvider;