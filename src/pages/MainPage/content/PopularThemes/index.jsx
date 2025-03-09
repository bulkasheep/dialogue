import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    theme: [typography.body2, presets.theme, styles.theme].join(" "),
    button: [typography.button, presets.button, presets.primary, presets.color, styles.button].join(" "),
};

function PopularThemes() {
    const [list, loadMore] = loadList(DialogueAPI.getPopularThemes);

    return <>
        <ul className={styles.themes}>
            {list.map((item, index) =>
                <li key={index}
                    className={classNames.theme}>
                    {item.title}
                </li>
            )}
        </ul>
        <button className={classNames.button}
            onClick={loadMore}
            type="button">
            Больше тем
        </button>
    </>
}

export default PopularThemes;