import styles from "./styles.module.css";

const classNames = {
    avatar: {
        me: [styles.avatar, styles.me].join(" "),
        mini: [styles.avatar, styles.mini].join(" "),
        big: [styles.avatar, styles.big].join(" "),
    }
}

function Avatar({ data, style = "me" }) {
    const initials = data.firstName ? (data.firstName.substring(0, 1) + data.lastName.substring(0, 1)).toUpperCase() : "";
    const image = data.photo || data.image || data.imageUrl || "";

    return (
        image.length === 0 ?
            <div className={classNames.avatar[style]}>
                {initials}
            </div>
            :
            <img className={classNames.avatar[style]}
                src={data.photo || data.image || data.imageUrl}
                alt={initials} />
    )
}

export default Avatar;