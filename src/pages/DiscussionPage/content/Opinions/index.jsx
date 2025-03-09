import { useContext } from "react";
import { DiscussionOpinionsContext } from "../../../../components/DiscussionContext";
import Pagination from "../../../../components/Pagination";
import Opinion from "../../../../components/Opinion";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: [typography.button, presets.button, presets.primary, presets.color].join(" "),
};

function Opinions() {
    const { opinions, loadMoreOpinions } = useContext(DiscussionOpinionsContext);

    return <>
        <Pagination buttons={false}>
            {opinions.map((opinion, index) =>
                <li key={index}>
                    <Opinion data={opinion} />
                </li>
            )}
        </Pagination>
        <div className={styles.button}>
            <button className={classNames.button}
                type="button"
                onClick={loadMoreOpinions}>
                Больше мнений
            </button>
        </div>
    </>
}

export default Opinions;