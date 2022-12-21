import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext";

function useAllClear(pointsLayer, contourLayer) {

    const appStore = useContext(AppContext);

    useEffect(() => {
        if (appStore.isClear) {
            pointsLayer?.clear();
            contourLayer?.clear();
        }

    }, [appStore.isClear]);
}

export default useAllClear;