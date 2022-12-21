import React, {useContext} from 'react';
import styles from "./Button.module.css";
import {AppContext} from "../context/AppContext";

const DrawPolygonButton = () => {

    const appStore = useContext(AppContext);

    const onClick = (isDrawingPolygon) => {
        appStore.drawingPolygon(isDrawingPolygon)
    }

    return (
        <button className={styles.button} onClick={() => onClick(true)}>
            <span>&#9649;</span><span>Рисовать контур</span>
        </button>
    );
}

export default DrawPolygonButton;