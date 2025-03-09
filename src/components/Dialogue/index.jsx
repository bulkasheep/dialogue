import { useContext, useState } from "react";
import { Link } from "react-router";
import { Path } from "../../functions";
import ModalContext from "../ModalContext";
import VideoContext from "../VideoContext";
import User from "../User";
import ModalVideo from "../ModalVideo";
import SegmentControl from "../SegmentControl";
import typography from "../../typography.module.css";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    cover: [presets.cover, styles.cover].join(" "),
    title: [typography.h3, styles.title].join(" "),
    description: [typography.body, styles.description].join(" "),
};

const segments = [
    { title: "Трейлер", value: true },
    { title: "Полная версия", value: false },
];

function Dialogue({ data }) {
    const { setVideo } = useContext(VideoContext);
    const { showModal } = useContext(ModalContext);
    const [checked, setChecked] = useState(segments[0].value);

    const onClick = () => {
        setVideo(data.videos.find(video => video.isPromo === checked));
        showModal(<ModalVideo slug={data.discussion.slug} />);
    };

    return <article className={styles.dialogue}>
        <div className={classNames.cover}
            onClick={onClick}>
            <img className={styles.image} src={data.coverUrl} alt="Обложка" />
        </div>
        <section className={styles.section}>
            <article className={styles.content}>
                <article className={styles.info}>
                    <Link to={Path.discussion(data.discussion.slug)}>
                        <h3 className={classNames.title}>{data.title}</h3>
                    </Link>
                    <p className={classNames.description}>{data.description}</p>
                </article>
                <ul className={styles.participants}>
                    {data.participants.map((participant, index) =>
                        <li key={index} className={styles.participant}>
                            <User data={participant} />
                        </li>
                    )}
                </ul>
            </article>
            <SegmentControl list={segments} checkedValue={checked} onChange={setChecked} />
        </section>
    </article>;
}

export default Dialogue;