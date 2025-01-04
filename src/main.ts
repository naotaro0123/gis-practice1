import "leaflet/dist/leaflet.css";
import "./style.css";

// leaflet.js
// import { setupMap } from "./map";
// import { setupMarkerMap } from "./marker-map";
// import { setupMarkerMapFromJson } from "./marker-map-from-json";
// import { setupPolygon } from "./polygon";

// maplibre-gl.js
// import { setupMapLibreGlFromJson } from "./map-libre-gl";
// import { setupDisasterPreventionMap } from "./disaster-prevention-map";
import { setupMapLibreGl } from "./maplibre-map";

document.querySelector<HTMLDivElement>("#root")!.innerHTML = `
  <div>
    <div id="map" style="height: 100vh;"></div>
  </div>
`;
const containerMap = document.querySelector<HTMLDivElement>("#map")!;

// leaflet.js
// const leafletMap = setupMap(containerMap);
// setupMarkerMap(leafletMap);
// setupMarkerMapFromJson(leafletMap);
// setupPolygon(leafletMap);

// maplibre-gl.js
// setupMapLibreGlFromJson(containerMap);

// setupDisasterPreventionMap(containerMap);
setupMapLibreGl(containerMap);
