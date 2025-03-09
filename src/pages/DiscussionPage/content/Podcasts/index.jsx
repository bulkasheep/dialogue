import { useFetch } from "../../../../hooks";
import DialogueAPI from "../../../../api";
import { useParams } from "react-router";
import Podcast from "../../../../components/Podcast";
import styles from "./styles.module.css";

function Podcasts() {
    const [podcast] = useFetch(DialogueAPI.getPodcastsBySlug, useParams());

    return <article className={styles.podcast}>
        {podcast.id && <Podcast data={podcast} />}
    </article>
}

export default Podcasts;