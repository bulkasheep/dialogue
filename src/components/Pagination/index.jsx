import { useRef } from "react";
import presets from "../../presets.module.css";
import styles from "./styles.module.css";

const classNames = {
    button: {
        left: [styles.navigation, styles.left].join(" "),
        right: [styles.navigation, styles.right].join(" "),
    },
    viewport: {
        default: styles.viewport,
        rotatable: [styles.viewport, styles.rotatable].join(" "),
    }
};

function Pagination({
    onScrollEnd = () => { },
    children,
    buttons = true,
    style = "default"
}) {
    const viewport = useRef(null);
    const scrollSize = 300;

    const onLeftScroll = () => {
        viewport.current.scrollLeft -= scrollSize;
    };
    const onRightScroll = () => {
        viewport.current.scrollLeft += scrollSize;
    };
    const handleScroll = () => {
        const element = viewport.current;
        const scrollPosition = element.scrollLeft;
        const scrollWidth = element.scrollWidth - element.clientWidth;

        if (scrollPosition === scrollWidth && scrollWidth !== 0) onScrollEnd();
    };
    return <section className={styles.pagination}>
        <section className={classNames.viewport[style]}
            ref={viewport}
            onScroll={handleScroll}>
            <ul className={styles.content}>
                {children}
            </ul>
        </section>
        {buttons &&
            <div className={styles.buttons}>
                <button className={classNames.button.left}
                    type="button"
                    onClick={onLeftScroll} />
                <button className={classNames.button.right}
                    type="button"
                    onClick={onRightScroll} />
            </div>
        }
    </section>
}

export default Pagination;