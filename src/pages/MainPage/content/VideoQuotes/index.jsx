import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import Pagination from "../../../../components/Pagination";
import AuthBanner from "../../../../components/AuthBanner";
import VideoQoute from "./VideoQuote";
import styles from "./styles.module.css";

function VideoQuotes() {
    const [list, loadMore] = loadList(DialogueAPI.getVideoQuotes);

    return <>
        <Pagination onScrollEnd={loadMore}>
            {list.map((item, index) =>
                <li key={index} className={styles.item}>
                    {(index !== 0) && (index % 3 === 0) &&
                        <AuthBanner key={"a" + index} />
                    }
                    <VideoQoute key={index} data={item} />
                </li>)}
        </Pagination>
    </>
}

export default VideoQuotes;