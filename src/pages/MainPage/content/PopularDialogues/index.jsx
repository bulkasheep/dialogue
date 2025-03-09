import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import Dialogue from "../../../../components/Dialogue";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: [typography.button, presets.button, presets.primary, presets.color, styles.button].join(" "),
};

function PopularDialogues() {
    const [list, loadMore] = loadList(DialogueAPI.getPopularDialogues, { amountOfItems: 2 });

    return <>
        <ul className={styles.dialogues}>
            {list.map((item, index) =>
                <li key={index}>
                    <Dialogue data={item} />
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

export default PopularDialogues;