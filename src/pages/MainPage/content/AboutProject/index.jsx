import typography from "../../../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    card: {
        title: [typography.h3, styles.cardTitle].join(" "),
        description: [typography.bosy, styles.cardDescription].join(" "),
    }
}

function AboutProject() {
    return <section className={styles.cards}>
        <article className={styles.card}>
            <h3 className={classNames.card.title}>Смотреть</h3>
            <p className={classNames.card.description}>
                <a>Диалоги</a> участников и фокус-группы, нарезки <a>Мнений</a> с основными тезисами и короткие <a>Монологи</a> в видеоформате.
            </p>
        </article>
        <article className={styles.card}>
            <h3 className={classNames.card.title}>Слушать</h3>
            <p className={classNames.card.description}>
                Популярные дискуссии в удобном аудиоформате <a>подкастов</a>, чтобы слушать в дороге или на работе.
            </p>
        </article>
        <article className={styles.card}>
            <h3 className={classNames.card.title}>Читать</h3>
            <p className={classNames.card.description}>
                Каждый <a>Диалог</a> представлен в текстовых форматах — <a>Статье</a> для чтения на сайте и <a>Конспекте</a> для скачивания.
            </p>
        </article>
    </section>
}

export default AboutProject;