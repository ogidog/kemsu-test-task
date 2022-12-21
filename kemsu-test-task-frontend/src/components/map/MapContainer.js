import React from 'react';
import Map from "./Map";

import styles from "./MapContainer.module.css"

const MapContainer = () => {
    return (
        <div className={styles.container}>
            <Map/>
        </div>

    );
}

export default MapContainer;