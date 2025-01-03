import L from "leaflet";

export const setupMarkerMap = (map: L.Map) => {
  // ピン定義
  const marker = L.marker([33, 129.5]);
  marker.bindPopup("平面直角座標1系原点");
  map.addLayer(marker);
};
