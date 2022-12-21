import MainContainer from "./components/MainContainer";
import {AppContext} from "./components/context/AppContext";
import AppStore from "./components/stores/AppStore";

// Необходимо для правильной работы leaflet
import 'leaflet-draw/dist/leaflet.draw.js';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet/dist/leaflet.css';

function App() {
    return (
        <AppContext.Provider value={new AppStore()}>
            <MainContainer/>
        </AppContext.Provider>
    );
}

export default App;
