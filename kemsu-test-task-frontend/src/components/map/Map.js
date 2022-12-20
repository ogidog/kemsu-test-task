import React, {useEffect, useRef} from 'react';

import L from 'leaflet/dist/leaflet.js';

const Map = () => {

    const mapRef = useRef(null);
    const drawnItemsRef = useRef(null);

    const onStartDrawing = () => {
        return;
    }
    const onStopDrawing = () => {
        return;
    }
    const initMap = (onCreateRoi, onDeleteRoi) => {

        const map = L.map('map', {
            center: [54.59259559138274, 86.15035018461239],
            zoom: 7,
            zoomControl: true,
            zoomDelta: 0.05,
            zoomSnap: 0,
            wheelPxPerZoomLevel: 240,
            attributionControl: false
        });


        map.on('draw:created', function (e) {
            // onCreateRoi(e.layer.getLatLngs())
        });

        map.on('draw:deleted', function (e) {
            // drawnItems.clearLayers();
            // onDeleteRoi()
        });

        // OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        let polygonDrawer = new L.Draw.Polygon(map);
        polygonDrawer.enable()

        mapRef.current = map;

    }

    useEffect(() => {
        initMap(onStartDrawing, onStopDrawing);

        return function () {
            mapRef.current.off();
            mapRef.current.remove();
        }
    }, []);

    return (
        <div id={"map"} style={{width: '100%', height: '100%', zIndex: 1}}></div>
    );
}

export default Map;