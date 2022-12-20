import React from 'react';

import styles from "./ControlsContainer.module.css"
import SetPointButton from "./SetPointButton";
import DrawPolygonButton from "./DrawPolygonButton";

const ControlsContainer = () => {
    return (
        <div className={styles.container}>
            <SetPointButton/>
            <DrawPolygonButton/>
        </div>
    );
}

export default ControlsContainer;