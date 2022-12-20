import React from 'react';
import styles from "./Button.module.css";

const DrawPolygonButton = () => {
    return (
        <button className={styles.button} id={"drawing-polygon"}><span>&#9649;</span><span>Рисовать контур</span></button>
    );
}

export default DrawPolygonButton;