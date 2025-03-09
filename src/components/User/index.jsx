import Avatar from "../Avatar";
import { declination, Path } from "../../functions";
import typography from "../../typography.module.css";
import styles from "./styles.module.css";
import { Link } from "react-router";

const classNames = {
    small: {
        user: [styles.user, styles.small].join(" "),
        avatar: "mini",
        info: [styles.info, styles.small].join(" "),
        username: [typography.body2, styles.username, styles.small].join(" "),
        status: [typography.overline, styles.status, styles.small].join(" "),
    },
    participant: {
        user: [styles.user, styles.participant].join(" "),
        avatar: "big",
        info: [styles.info, styles.participant].join(" "),
        username: [typography.body2, styles.username, styles.participant].join(" "),
        status: [typography.overline, styles.status, styles.participant].join(" "),
    },
}

function User({ data, style = "small", type = "participant" }) {
    const year = new Date().getFullYear();
    const age = data.age || (year - (data.yearOfBirth || year));
    const kindOfActivity = (data.kindOfActivity || "").trim();
    const status = type === "participant" ?
        [kindOfActivity, ...(age === 0 ? [] : [declination(age)])].join(", ") :
        "Читатель";

    const url = type === "participant" ? Path.participant(data.id) : "";

    return <Link to={url}>
        <article className={classNames[style].user}>
            <Avatar data={data} style={classNames[style].avatar} />
            <div className={classNames[style].info}>
                <p className={classNames[style].username}>
                    {data.firstName === null ?
                        "Аноним" :
                        (data.firstName + " " + data.lastName)}
                </p>
                <p className={classNames[style].status}>
                    {status}
                </p>
            </div>
        </article>
    </Link>
}

export default User;