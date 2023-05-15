import React from 'react';

import styles from './styles/modalSection.module.css';

function ModalSection({
    modalToggle,
    modalOn,
    modalIsClicked
}) {

    const onCloseModalHandle = () => {
        modalToggle(false);
    }

    return (
        <>
            <section
                className={`${styles['modal-section']} 
        ${(modalOn && modalIsClicked) && styles['slide-in']}
        ${(!modalOn && modalIsClicked) && styles['slide-out']}
        `}
            >
                <div onClick={onCloseModalHandle} className={styles['top']}></div>
                <div onClick={onCloseModalHandle} className={styles['left']}></div>
                <div onClick={onCloseModalHandle} className={styles['right']}></div>
                <div onClick={onCloseModalHandle} className={styles['bottom']}></div>
                <div className={styles['modal']}>
                    <h2>Subscribe to our premium content</h2>

                    <form>
                        <input type="text" name="email" />
                        <input type="text" name="password" />

                        <button type='button' onClick={onCloseModalHandle}>SEND</button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default ModalSection
