import React, {useContext, useEffect, useRef} from 'react';
import {observer} from "mobx-react-lite";
import L from 'leaflet/dist/leaflet.js';

import useDrawingPolygon from "../custom-hooks/useDrawingPolygon";
import useDrawingPoint from "../custom-hooks/useDrawingPoint";
import ContourLayer from "./CotourLayer";
import {AppContext} from "../context/AppContext";
import PointsLayer from "./PointsLayer";
import useAllClear from "../custom-hooks/useAllClear";

const Map = observer(() => {

    const appStore = useContext(AppContext);

    const mapRef = useRef(null);
    const pointsLayerRef = useRef(null);
    const contourLayerRef = useRef(null);

    const initMap = () => {

        const map = L.map('map', {
            center: [54.59259559138274, 86.15035018461239],
            zoom: 7,
            zoomControl: true,
            zoomDelta: 0.05,
            zoomSnap: 0,
            wheelPxPerZoomLevel: 240,
            attributionControl: false
        });

        const contourLayerGroup = new L.LayerGroup();
        map.addLayer(contourLayerGroup);
        const contourLayer = new ContourLayer(map, contourLayerGroup, appStore);

        const pointsLayerGroup = new L.LayerGroup();
        map.addLayer(pointsLayerGroup);
        const pointsLayer = new PointsLayer(map, pointsLayerGroup, appStore);

        map.on('draw:created', function (e) {
            if (appStore.isDrawingPolygon) {
                contourLayer.add(e.layer);
            }
            if (appStore.isDrawingPoint) {
                pointsLayer.add(e.layer);
            }
        });

        map.on('draw:drawstart', function (e) {
            contourLayer.clear()
        });

        // OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        mapRef.current = map;
        pointsLayerRef.current = pointsLayer;
        contourLayerRef.current = contourLayer;
    }

    useEffect(() => {
        initMap();

        return function () {
            mapRef.current.off();
            mapRef.current.remove();
        }
    }, []);
    useDrawingPolygon(contourLayerRef.current);
    useDrawingPoint(pointsLayerRef.current)
    useAllClear(pointsLayerRef.current, contourLayerRef.current)

    return (
        <div id={"map"} style={{width: '100%', height: '100%', zIndex: 1}}></div>
    );
});

export default Map;