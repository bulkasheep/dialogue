import { useContext } from "react";
import { ParticipantReviewsContext } from "../../../../components/ParticipantContext";
import Stars from "../../../../components/Stars";
import styles from "./styles.module.css";

function AverageRating() {
    const { data } = useContext(ParticipantReviewsContext);

    return <>
        <span>
            {(data.averageRating || 0).toFixed(1)}
        </span>
        <div className={styles.stars}>
            <Stars filled={data.averageRating || 0} />
        </div>
    </>
}

export default AverageRating;