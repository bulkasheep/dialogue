import { useContext } from "react";
import { useNavigate } from "react-router";
import ModalVideo from "../ModalVideo";
import VideoContext from "../VideoContext";
import ModalContext from "../ModalContext";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";
import { Path } from "../../functions";

const classNames = {
    title: [typography.h3, styles.title].join(" "),
    description: [typography.body, styles.description].join(" "),
    cover: [presets.cover, styles.cover].join(" "),
};

function Opinion({ data }) {
    const navigate = useNavigate();
    const { setVideo } = useContext(VideoContext);
    const { showModal } = useContext(ModalContext);

    const onClick = () => {
        if (data.video) {
            setVideo(data.video);
            showModal(<ModalVideo />);
        }
        else navigate(Path.discussion(data.discussion.slug));
    };

    return <article className={styles.opinion}>
        <div className={classNames.cover}
            onClick={onClick}>
            <img className={styles.image}
                src={data.coverUrl}
                alt="Обложка" />
        </div>
        <article className={styles.info}>
            <h3 className={classNames.title}>{data.title}</h3>
            <p className={classNames.description}>{data.description}</p>
        </article>
    </article>
}

export default Opinion;