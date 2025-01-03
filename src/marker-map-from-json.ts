import L from "leaflet";
// ref: https://stackblitz.com/edit/ts-leaflet-markercluster-f2hpmi?file=index.ts
import "leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

// P29-21.geojson のプロパティ
type JsonExtendProperties = {
  P29_001: string;
  P29_002: string;
  P29_003: string;
  P29_004: string;
  P29_005: string;
  P29_006: string;
  P29_007: string;
};
type JsonExtendGeometry = {
  type: "Point";
  coordinates: [number, number];
};

export const setupMarkerMapFromJson = async (map: L.Map) => {
  const res = await fetch("./json/P29-21.geojson");
  const json = await res.json();
  const markers = L.markerClusterGroup();

  const cloneFeatures: GeoJSON.Feature<
    JsonExtendGeometry,
    JsonExtendProperties
  >[] = structuredClone(json.features);

  for (const feature of cloneFeatures) {
    const marker = L.marker([
      feature.geometry.coordinates[1],
      feature.geometry.coordinates[0],
    ]).bindPopup(feature.properties.P29_004);
    markers.addLayer(marker);
  }
  map.addLayer(markers);
};
