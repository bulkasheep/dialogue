import FilledStar from "../../assets/icons/48px/FilledStar.svg";
import Star from "../../assets/icons/48px/Star.svg";
import styles from "./styles.module.css";

function Stars({ filled = 0 }) {
    return <>
        {Array(5).fill(0).map((_, index) =>
            index < filled ?
                <img className={styles.star}
                    key={index}
                    src={FilledStar}
                    alt={"★"} />
                :
                <img className={styles.star}
                    key={index}
                    src={Star}
                    alt={"☆"} />
        )}
    </>
}

export default Stars;