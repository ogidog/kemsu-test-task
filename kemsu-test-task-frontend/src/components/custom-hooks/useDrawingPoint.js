import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext";

function useDrawingPoint(pointsLayer) {

    const appStore = useContext(AppContext);

    useEffect(() => {
        if (pointsLayer) {
            appStore.isDrawingPoint ? pointsLayer.pointDrawer.enable() : pointsLayer.pointDrawer.disable();
        }
    }, [appStore.isDrawingPoint]);
}

export default useDrawingPoint;