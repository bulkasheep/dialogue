import { useParams } from "react-router";
import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import Pagination from "../../../../components/Pagination";
import Monologue from "./Monologue";
import styles from "./styles.module.css";

function Monologues() {
    const [monologues, loadMoreMonologues] = loadList(DialogueAPI.getMonologuesBySlug, useParams());

    return <section className={styles.monologues}>
        <Pagination buttons={false} style="rotatable" onScrollEnd={loadMoreMonologues}>
            {monologues.map((item, index) =>
                <li key={index}>
                    <Monologue data={item} />
                </li>
            )}
        </Pagination>
    </section>
}

export default Monologues;