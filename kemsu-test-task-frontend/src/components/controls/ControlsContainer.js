import React from 'react';

import styles from "./ControlsContainer.module.css"
import DrawPointButton from "./DrawPointButton";
import DrawPolygonButton from "./DrawPolygonButton";
import PointCounter from "./PointCounter";

const ControlsContainer = () => {
    return (
        <div className={styles.container}>
            <DrawPointButton/>
            <DrawPolygonButton/>
            <PointCounter/>
        </div>
    );
}

export default ControlsContainer;