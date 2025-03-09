import { useContext } from "react";
import VideoContext from "../../../../../components/VideoContext";
import ModalContext from "../../../../../components/ModalContext";
import User from "../../../../../components/User";
import ModalVideo from "../../../../../components/ModalVideo";
import presets from "../../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    cover: [presets.cover, styles.cover].join(" "),
};

function VideoQoute({ data }) {
    const { setVideo } = useContext(VideoContext);
    const { showModal } = useContext(ModalContext);

    const onClick = () => {
        setVideo(data.video);
        showModal(<ModalVideo slug={data.discussion.slug} />);
    };

    return <div className={styles.videoQoute}>
        <div key={data.id}
            className={classNames.cover}
            onClick={onClick}>
            <img src={data.coverUrl} alt="Обложка" />
        </div>
        <div className={styles.participant}>
            <User data={data.participant} />
        </div>
    </div>
}

export default VideoQoute;