import {makeAutoObservable, toJS} from "mobx";
import {polygon, point, intersect} from "turf";
import {logDOM} from "@testing-library/react";

class AppStore {

    constructor() {
        this.isDrawingPolygon = false;
        this.isDrawingPoint = false;
        this.contour = [];
        this.points = [];
        this.isClear = false;

        makeAutoObservable(this);
    }

    drawingPolygon(value) {
        if (!this.isDrawingPoint) {
            this.isDrawingPolygon = value;
            this.contour = [];
        }
        this.isClear = false;
    }

    drawingPoint() {
        !this.isDrawingPolygon && (this.isDrawingPoint = !this.isDrawingPoint);
        this.isClear = false
    }

    setContour(contourGeom) {
        this.contour = [...contourGeom];
    }

    setPoint(pointGeom) {
        this.points.push(pointGeom);
    }

    setClear() {
        this.isClear = true;
        this.isDrawingPolygon = false;
        this.isDrawingPoint = false;
        this.contour = [];
        this.points = [];
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