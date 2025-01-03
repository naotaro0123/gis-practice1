import "leaflet/dist/leaflet.css";
import { setupMap } from "./helloworld.ts";
import "./style.css";

document.querySelector<HTMLDivElement>("#root")!.innerHTML = `
  <div>
    <div id="map" style="height: 100vh;"></div>
  </div>
`;
setupMap(document.querySelector<HTMLDivElement>("#map")!);
