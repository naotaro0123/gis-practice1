import "leaflet/dist/leaflet.css";
import "./style.css";

import { setupMap } from "./map";
import { setupMarkerMap } from "./marker-map";

document.querySelector<HTMLDivElement>("#root")!.innerHTML = `
  <div>
    <div id="map" style="height: 100vh;"></div>
  </div>
`;

const map = setupMap(document.querySelector<HTMLDivElement>("#map")!);
setupMarkerMap(map);
