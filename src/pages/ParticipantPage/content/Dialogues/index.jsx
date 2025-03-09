import { useParams } from "react-router";
import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import Dialogue from "../../../../components/Dialogue";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: [typography.button, presets.button, presets.primary, presets.blue, styles.button].join(" "),
}

function Dialogues() {
    const [dialogues, loadMoreDialogues] = loadList(DialogueAPI.getParticipantDialogues, { ...useParams(), amountOfItems: 2 });

    return <>
        <ul className={styles.dialogues}>
            {dialogues.map((dialogue, index) =>
                <li key={index}>
                    <Dialogue data={dialogue} />
                </li>
            )}
        </ul>
        <button className={classNames.button}
            onClick={loadMoreDialogues}
            type="button">
            Показать ещё
        </button>
    </>
}

export default Dialogues;