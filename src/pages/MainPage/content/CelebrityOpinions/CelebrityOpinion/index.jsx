import { useContext } from "react";
import ModalContext from "../../../../../components/ModalContext";
import Avatar from "../../../../../components/Avatar";
import typography from "../../../../../typography.module.css";
import presets from "../../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    celebrity: {
        full: [styles.celebrity, styles.full].join(" "),
        mini: [styles.celebrity, styles.mini].join(" "),
    },
    name: [typography.body3, styles.name].join(" "),
    position: [typography.overline, styles.position].join(" "),
    opinion: [typography.body, styles.opinion].join(" "),
    link: [presets.link, typography.button, styles.link].join(" "),
};

function CelebrityOpinion({ data, style = "mini" }) {
    const { showModal } = useContext(ModalContext);

    const onClick = () => showModal(
        <CelebrityOpinion data={data} style="full" />
    );

    return <article className={classNames.celebrity[style]}>
        <Avatar style="big" data={data} />
        <article className={styles.info}>
            <span className={classNames.name}>{data.name}</span>
            <p className={classNames.position}>{data.position}</p>
        </article>
        <p className={classNames.opinion}>{data.opinion}</p>
        <button className={classNames.link}
            type="button"
            onClick={onClick}>
            Читать
        </button>
    </article>
}

export default CelebrityOpinion;