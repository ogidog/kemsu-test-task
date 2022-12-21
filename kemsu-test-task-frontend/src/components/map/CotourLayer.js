import L from "leaflet/dist/leaflet";
import appStore from "../stores/AppStore";

class ContourLayer {

    constructor(map, layerGroup, appStore) {
        this.layerGroup = layerGroup;
        this.appStore = appStore;
        this.polygonDrawer = new L.Draw.Polygon(map);
    }

    getContourGeom = (layer) => {
        const contour = layer.getLatLngs()[0].map(point => {
            return [point.lng, point.lat]
        });
        contour.push(contour[0]);
        return contour;
    }

    add(layer) {
        this.layerGroup.addLayer(layer);
        this.appStore.drawingPolygon(false);
        this.appStore.setContour(this.getContourGeom(layer));
    }

    clear() {
        if (this.appStore.isDrawingPolygon || this.appStore.isClear) {
            this.layerGroup.clearLayers();
        }
    }
}

export default ContourLayer;