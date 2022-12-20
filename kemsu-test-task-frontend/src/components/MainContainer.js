import React from 'react';

import styles from "./MainContainer.module.css"
import MapContainer from "./map/MapContainer";
import ControlsContainer from "./controls/ControlsContainer";

const MainContainer = () => {
    return (
        <div className={styles.container}>
            <MapContainer/>
            <ControlsContainer/>
        </div>
    );
}

export default MainContainer;