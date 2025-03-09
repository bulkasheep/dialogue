import FilledStar from "../../../../../assets/icons/48px/FilledStar.svg";
import { useContext } from "react";
import { declination } from "../../../../../functions";
import { ParticipantReviewsContext } from "../../../../../components/ParticipantContext";
import typography from "../../../../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    averageRating: [typography.h5, styles.title].join(" "),
    reviewsCount: [typography.h5, styles.link].join(" "),
};

function Rating() {
    const { data } = useContext(ParticipantReviewsContext);
    const rating = (data.averageRating || 0).toFixed(1);
    const count = declination(
        data.totalCount || 0,
        ["голос", "голоса", "голосов"]
    );

    return <>
        <img className={styles.star} src={FilledStar}
            alt={"★"} />
        <span className={classNames.averageRating}>
            {rating}
        </span>
        <div className={styles.dot} />
        <span className={classNames.reviewsCount}>
            {count}
        </span>
    </>
}

export default Rating;