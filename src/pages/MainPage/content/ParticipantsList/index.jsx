import { useState } from "react";
import DialogueAPI from "../../../../api";
import { loadList } from "../../../../hooks";
import SegmentControl from "../../../../components/SegmentControl";
import Pagination from "../../../../components/Pagination";
import Participant from "../../../../components/Participant";
import styles from "./styles.module.css";

const filter = [
    { title: "Все", value: "null" },
    { title: "Родители", value: "parent" },
    { title: "Дети", value: "children" },
    { title: "Эксперты", value: "expert" },
];

function ParticipantsList() {
    const [option, setOption] = useState(filter[0].value);
    const [list, loadMore, { setParams }] = loadList(DialogueAPI.getParticipants, { role: option });

    const onClick = (value) => {
        setOption(value);
        setParams({ role: value });
    };

    return <section className={styles.participants}>
        <div className={styles.filter}>
            <SegmentControl style="fit"
                list={filter}
                checkedValue={option}
                onChange={onClick} />
        </div>
        <Pagination onScrollEnd={loadMore}>
            {list.map((item, index) =>
                <li key={index}>
                    <Participant data={item} />
                </li>
            )}
        </Pagination>
    </section>
}

export default ParticipantsList;