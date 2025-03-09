import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import Pagination from "../../../../components/Pagination";
import CelebrityOpinion from "./CelebrityOpinion";

function CelebrityOpinions() {
    const [list, loadMore] = loadList(DialogueAPI.getCelebrityOpinions);

    return <>
        <Pagination onScrollEnd={loadMore}>
            {list.map((opinion, index) =>
                <li key={index}>
                    <CelebrityOpinion data={opinion} />
                </li>
            )}
        </Pagination>
    </>
}

export default CelebrityOpinions;