import { useParams } from "react-router";
import DialogueAPI from "../../api";
import { useFetch, loadList } from "../../hooks";
import { DiscussionContext, DiscussionOpinionsContext } from "../DiscussionContext";

function DiscussionProvider({ children }) {
    const [dialogue] = useFetch(DialogueAPI.getDialogueBySlug, useParams());

    return <DiscussionContext.Provider value={{ dialogue }}>
        {dialogue.errorCode ? <ErrorPage /> : children}
    </DiscussionContext.Provider>
}

function DiscussionOpinionsProvider({ children }) {
    const [opinions, loadMoreOpinions] = loadList(DialogueAPI.getOpinionsBySlug, useParams());

    return <DiscussionOpinionsContext.Provider value={{ opinions, loadMoreOpinions }}>
        {children}
    </DiscussionOpinionsContext.Provider>
}

export {
    DiscussionProvider,
    DiscussionOpinionsProvider
};