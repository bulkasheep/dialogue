import { useParams } from "react-router";
import DialogueAPI from "../../api";
import { useFetch, loadList } from "../../hooks";
import { ParticipantContext, ParticipantReviewsContext } from "../ParticipantContext";
import ErrorPage from "../../pages/ErrorPage";

function ParticipantProvider({ children }) {
    const [participant] = useFetch(DialogueAPI.getParticipant, useParams());

    return <ParticipantContext.Provider value={{ participant }}>
        {participant.errorCode ? <ErrorPage /> : children}
    </ParticipantContext.Provider>
}

function ParticipantReviewsProvider({ children }) {
    const [reviews, loadMoreReviews, { data }] = loadList(DialogueAPI.getParticipantReview, useParams());

    return <ParticipantReviewsContext.Provider value={{ reviews, loadMoreReviews, data }}>
        {children}
    </ParticipantReviewsContext.Provider>
}

export {
    ParticipantProvider,
    ParticipantReviewsProvider
};