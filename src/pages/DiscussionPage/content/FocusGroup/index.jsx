import { useContext } from "react";
import { DiscussionContext } from "../../../../components/DiscussionContext";
import Pagination from "../../../../components/Pagination";
import Card from "./Card";
import Banner from "./Banner";
import styles from "./styles.module.css";

function FocusGroup() {
    const { dialogue } = useContext(DiscussionContext);

    return <article className={styles.focusGroup}>
        <Pagination buttons={false} style="rotatable">
            {(dialogue.focusGroup || []).map((item, index) =>
                <li key={index}>
                    <Card data={item} />
                </li>
            )}
            <li>
                <Banner />
            </li>
        </Pagination>
    </article>
}

export default FocusGroup;