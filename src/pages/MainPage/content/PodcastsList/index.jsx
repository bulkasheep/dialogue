import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import Podcast from "../../../../components/Podcast";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: [typography.button, presets.button, presets.primary, presets.color, styles.button].join(" "),
};

function PodcastsList() {
    const [list, loadMore] = loadList(DialogueAPI.getPodcasts);
    return <>
        <ul className={styles.podcasts}>
            {list.map((podcast, index) =>
                <li className={styles.podcast} key={index}>
                    <Podcast data={podcast} />
                </li>
            )}
        </ul>
        <button className={classNames.button}
            onClick={loadMore}
            type="button">
            Больше диалогов
        </button>
    </>
}

export default PodcastsList;