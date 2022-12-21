import L from "leaflet/dist/leaflet";

class PointsLayer {

    constructor(map, layerGroup, appStore) {
        this.layerGroup = layerGroup;
        this.appStore = appStore;
        this.pointDrawer = new L.Draw.CircleMarker(map, {
            repeatMode: true,
            stroke: true,
            color: '#f80303',
            radius: 5,
            weight: 1,
            opacity: 0.9,
            fill: true,
            fillColor: null,
            fillOpacity: 0.5,
            clickable: false,
            zIndexOffset: 2000
        });
    }

    getPointGeom = (layer) => {
        return Object.values(layer.getLatLng()).reverse();
    }

    add(layer) {
        this.layerGroup.addLayer(layer);
        this.appStore.setPoint(this.getPointGeom(layer));
    }
}

export default PointsLayer;