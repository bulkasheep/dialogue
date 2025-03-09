import { Link } from "react-router";
import { Path } from "../../functions";
import VideoPlayer from "../VideoPlayer";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: [typography.button, presets.button, presets.primary, presets.color, styles.button].join(" "),
};

function ModalVideo({ slug }) {
    return <div className={styles.container}>
        <VideoPlayer light={false} />
        {slug &&
            <Link to={Path.discussion(slug)} className={classNames.button}>
                Перейти к диалогу
            </Link>
        }
    </div>
}

export default ModalVideo;