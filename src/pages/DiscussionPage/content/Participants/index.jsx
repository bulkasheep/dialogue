import { useContext } from "react";
import { DiscussionContext } from "../../../../components/DiscussionContext";
import Pagination from "../../../../components/Pagination";
import Participant from "../../../../components/Participant";

function Participants() {
    const { dialogue } = useContext(DiscussionContext);

    return <>
        <Pagination buttons={false}>
            {(dialogue.participants || []).map((item, index) =>
                <li key={index}>
                    <Participant data={item} />
                </li>
            )}
        </Pagination>
    </>
}

export default Participants;