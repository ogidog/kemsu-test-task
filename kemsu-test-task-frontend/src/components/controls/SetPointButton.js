import React from 'react';

import styles from "./Button.module.css"

const SetPointButton = () => {

    const onClick=()=>{
        document.querySelector('.leaflet-draw-draw-polygon').click()
    }
    return (
        <button className={styles.button} onClick={onClick}><span>&#9679;</span><span>Ставить точки</span></button>
    );
}

export default SetPointButton;