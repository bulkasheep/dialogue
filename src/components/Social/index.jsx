import VK from "../../assets/icons/48px/VK.svg";
import TG from "../../assets/icons/48px/TG.svg";
import Inst from "../../assets/icons/48px/Inst.svg";
import styles from "./styles.module.css";

function Social({ type = "website" }) {
    const scr = type === "vk" ? VK :
        (type === "telegram" ? TG :
            (type === "instagram" ? Inst : ""));

    return <>
        {scr.length === 0 ?
            <div className={styles.social}>···</div>
            :
            <img className={styles.social}
                src={scr}
                alt={type} />
        }
    </>
}

export default Social;