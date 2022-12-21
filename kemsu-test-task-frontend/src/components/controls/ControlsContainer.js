import React from 'react';

import styles from "./ControlsContainer.module.css"
import DrawPointButton from "./DrawPointButton";
import DrawPolygonButton from "./DrawPolygonButton";
import AllClearButton from "./AllClearButton";
import PointCounter from "./PointCounter";

const ControlsContainer = () => {
    return (
        <div className={styles.container}>
            <DrawPointButton/>
            <DrawPolygonButton/>
            <AllClearButton/>
            <PointCounter/>
        </div>
    );
}

export default ControlsContainer;