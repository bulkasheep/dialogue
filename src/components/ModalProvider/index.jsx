import ModalContext from "../ModalContext";
import { useState } from "react";
import styles from "./styles.module.css";

function ModalProvider({ children }) {
    const [modal, setModalData] = useState({
        visibility: false,
        children: undefined
    });

    const closeModal = () => setModalData({
        visibility: false,
        children: undefined
    });

    const showModal = (children) => setModalData({
        visibility: true,
        children: children
    });

    const onClick = (event) => event.stopPropagation();

    return <ModalContext.Provider value={{ showModal }}>
        {children}
        {modal.visibility &&
            <div className={styles.background}
                onClick={closeModal}>
                <div className={styles.modal}
                    onClick={onClick}>
                    <button className={styles.button}
                        type="button"
                        onClick={closeModal} />
                    {modal.children}
                </div>
            </div>
        }
    </ModalContext.Provider>
}

export default ModalProvider;