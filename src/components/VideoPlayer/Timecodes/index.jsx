import { useContext } from "react"
import VideoContext from "../../VideoContext";
import Timecode from "../Timecode";

function Timecodes({ type = "timeline" }) {
    const { video } = useContext(VideoContext);

    return <>
        {(video.timeCodes || []).map((timecode, index) =>
            <Timecode key={index} data={timecode} type={type} />)
        }
    </>
}

export default Timecodes;