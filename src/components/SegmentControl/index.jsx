import Segment from "./Segment";
import styles from "./styles.module.css";

const classNames = {
    control: {
        fit: [styles.control, styles.fit].join(" "),
        grid: [styles.control, styles.grid].join(" ")
    },
};

function SegmentControl({ style = "grid", list, checkedValue, onChange }) {
    return <div className={classNames.control[style]}>
        {list.map((item, index) =>
            <Segment key={index}
                title={item.title}
                value={item.value}
                checked={(checkedValue === item.value)}
                onClick={onChange} />
        )}
    </div>
}

export default SegmentControl;