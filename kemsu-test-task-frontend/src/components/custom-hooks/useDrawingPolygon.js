import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext";

const useDrawingPolygon = (contourLayer) => {
    const appStore = useContext(AppContext);

    useEffect(() => {
        if (contourLayer) {
            appStore.isDrawingPolygon ? contourLayer.polygonDrawer.enable() : contourLayer.polygonDrawer.disable();
        }
    }, [appStore.isDrawingPolygon])

};

export default useDrawingPolygon;