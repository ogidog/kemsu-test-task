import React, {useContext} from 'react';

import styles from "./Button.module.css"
import {AppContext} from "../context/AppContext";

const AllClearButton = () => {

    const appStore = useContext(AppContext);

    return (
        <button className={styles.button} onClick={() => appStore.setClear()}><span>&#128465;</span><span>Очистить карту</span>
        </button>
    );
}

export default AllClearButton;