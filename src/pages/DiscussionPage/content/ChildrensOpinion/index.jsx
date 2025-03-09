import { useContext } from "react";
import VideoContext from "../../../../components/VideoContext";
import ModalContext from "../../../../components/ModalContext";
import ModalVideo from "../../../../components/ModalVideo";
import Quote from "./Quote";
import { DiscussionOpinionsContext } from "../../../../components/DiscussionContext";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const defaultData = {
    id: 0,
    coverUrl: "",
    title: "",
    description: null,
    video: {
        id: 0,
        duration: 0,
        mediaUrl: "",
        uploadStatus: "success",
        timeCodes: null
    },
    isChildrenOpinion: true,
    quotes: []
};

const classNames = {
    title: [typography.h3, styles.title].join(" "),
    cover: [presets.cover, styles.cover].join(" "),
};

function ChildrensOpinion() {
    const { setVideo } = useContext(VideoContext);
    const { showModal } = useContext(ModalContext);
    const { opinions } = useContext(DiscussionOpinionsContext);
    const childrensOpinion = (opinions.find(opinion => opinion.isChildrenOpinion) || defaultData);

    const onClick = () => {
        setVideo(childrensOpinion.video);
        showModal(<ModalVideo />);
    };

    return <>
        <article className={styles.opinion}>
            <div className={classNames.cover}
                onClick={onClick}>
                <img className={styles.image}
                    src={childrensOpinion.coverUrl}
                    alt="Обложка" />
            </div>
            <article className={styles.content}>
                <h3 className={classNames.title}>
                    {childrensOpinion.title}
                </h3>
                <article className={styles.quotes}>
                    {(childrensOpinion.quotes || []).map((quote, index) =>
                        <Quote key={index} data={quote} />
                    )}
                </article>
            </article>
        </article>
    </>
}

export default ChildrensOpinion;