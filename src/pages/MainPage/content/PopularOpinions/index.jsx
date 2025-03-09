import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import Pagination from "../../../../components/Pagination";
import Opinion from "../../../../components/Opinion";
import AuthBanner from "../../../../components/AuthBanner";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: [typography.button, presets.button, presets.primary, presets.color, styles.button].join(" "),
};

function PopularOpinions() {
    const [list, loadMore] = loadList(DialogueAPI.getPopularOpinions);

    return <>
        <Pagination buttons={false} onScrollEnd={loadMore}>
            {list.map((opinion, index) =>
                <li key={index} className={styles.opinion}>
                    {index !== 0 && index % 3 === 0 ? <AuthBanner style="white" /> : ""}
                    <Opinion data={opinion} />
                </li>
            )}
        </Pagination>
        <button className={classNames.button}
            onClick={loadMore}
            type="button">
            Больше мнений
        </button>
    </>
}

export default PopularOpinions;