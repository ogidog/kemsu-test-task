import {makeAutoObservable, toJS} from "mobx";
import {polygon, point, intersect} from "turf";
import {logDOM} from "@testing-library/react";

class AppStore {

    constructor() {
        this.isDrawingPolygon = false;
        this.isDrawingPoint = false;
        this.contour = [];
        this.points = [];
        this.numPointInContour = 0;

        makeAutoObservable(this);
    }

    drawingPolygon(value) {
        !this.isDrawingPoint && (this.isDrawingPolygon = value);
    }

    drawingPoint() {
        !this.isDrawingPolygon && (this.isDrawingPoint = !this.isDrawingPoint);
    }

    setContour(contourGeom) {
        this.contour = [...contourGeom];
    }

    setPoint(pointGeom) {
        this.points.push(pointGeom);
    }

    get countNumPointsInContour() {
        let numPointInContour = 0;

        if (this.points?.length && this.contour?.length) {
            for (let i = 0; i < this.points.length; i++) {
                if (intersect(polygon([toJS(this.contour)]), point(toJS(this.points[i])))) numPointInContour += 1;
            }
        }

        return numPointInContour;
    }
}

export default AppStore;