import React, {useContext} from 'react';

import styles from "./Button.module.css"
import {AppContext} from "../context/AppContext";

const DrawPointButton = () => {

    const appStore = useContext(AppContext);

    return (
        <button className={styles.button} onClick={() => appStore.drawingPoint()}><span>&#9679;</span><span>Ставить точки</span>
        </button>
    );
}

export default DrawPointButton;