import { useContext } from "react";
import { ParticipantReviewsContext } from "../../../../components/ParticipantContext";
import Pagination from "../../../../components/Pagination";
import Review from "./Review";
import typography from "../../../../typography.module.css";
import presets from "../../../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: [typography.button, presets.button, presets.primary, presets.blue, styles.button].join(" "),
};

function Reviews() {
    const { reviews, loadMoreReviews } = useContext(ParticipantReviewsContext);

    return <>
        <Pagination buttons={false}
            onScrollEnd={loadMoreReviews}
            style="rotatable">
            {reviews.map((review, index) =>
                <li key={index}>
                    <Review data={review} />
                </li>
            )}
        </Pagination>

        <button className={classNames.button}
            onClick={loadMoreReviews}
            type="button">
            Показать ещё
        </button>
    </>
}

export default Reviews;