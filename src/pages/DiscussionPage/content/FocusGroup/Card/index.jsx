import { useContext } from "react";
import ModalContext from "../../../../../components/ModalContext";
import User from "../../../../../components/User";
import typography from "../../../../../typography.module.css";
import presets from "../../../../../presets.module.css";
import styles from "./styles.module.css";


const classNames = {
    card: {
        full: [styles.card, styles.full].join(" "),
        mini: [styles.card, styles.mini].join(" "),
    },
    content: [typography.body, styles.content].join(" "),
    link: [presets.link, typography.button, styles.link].join(" "),
};

function Card({ data, style = "mini" }) {
    const { showModal } = useContext(ModalContext);

    const onClick = () => showModal(
        <Card data={data} style="full" />
    );

    return <article className={classNames.card[style]}>
        <User data={data} />
        <p className={classNames.content}>
            {data.content}
        </p>
        <button className={classNames.link}
            type="button"
            onClick={onClick}>
            Читать
        </button>
    </article>
}

export default Card;