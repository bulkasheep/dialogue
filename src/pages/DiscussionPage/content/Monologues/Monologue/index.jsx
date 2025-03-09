import { useContext } from "react";
import VideoContext from "../../../../../components/VideoContext";
import ModalContext from "../../../../../components/ModalContext";
import ModalVideo from "../../../../../components/ModalVideo";
import User from "../../../../../components/User";
import typography from "../../../../../typography.module.css";
import presets from "../../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    title: [typography.h3, styles.title].join(" "),
    subtitle: [typography.body, styles.subtitle].join(" "),
    cover: [presets.cover, styles.cover].join(" "),
};

function Monologue({ data }) {
    const { setVideo } = useContext(VideoContext);
    const { showModal } = useContext(ModalContext);

    const onClick = () => {
        setVideo(data.video);
        showModal(<ModalVideo />);
    };

    return <article className={styles.monologue}>
        <div className={classNames.cover}
            onClick={onClick}>
            <img className={styles.image} src={data.coverUrl} alt="Обложка" />
        </div>
        <article className={styles.content}>
            <h3 className={classNames.title}>
                {data.title}
            </h3>
            <p className={classNames.subtitle}>
                {data.subtitle}
            </p>
        </article>
        <User data={data.participant} />
    </article>
}

export default Monologue;