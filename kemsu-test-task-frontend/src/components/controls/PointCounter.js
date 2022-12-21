import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";
import {observer} from "mobx-react-lite";

import styles from "./PointCounter.module.css";

const PointCounter = observer(() => {

    const appStore = useContext(AppContext);

    return (
        <div className={styles.container}>
            <div>Точек в контуре:</div>
            <div className={styles.counter}>{appStore.countNumPointsInContour}</div>
        </div>
    );
});

export default PointCounter;