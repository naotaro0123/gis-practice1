import L from "leaflet";

export const setupMarkerMap = (map: L.Map) => {
  // ピン定義
  const marker = L.marker([33, 129.5]);
  marker.bindPopup("平面直角座標1系原点");
  map.addLayer(marker);

  L.marker([33, 131.0]).bindPopup("平面直角座標2系原点").addTo(map);
  L.marker([33, 132.16666666666666])
    .bindPopup("平面直角座標3系原点")
    .addTo(map);
  L.marker([33, 133.5]).bindPopup("平面直角座標4系原点").addTo(map);
  L.marker([33, 134.33333333333334])
    .bindPopup("平面直角座標5系原点")
    .addTo(map);
  L.marker([33, 136.0]).bindPopup("平面直角座標6系原点").addTo(map);
  L.marker([33, 137.16666666666666])
    .bindPopup("平面直角座標7系原点")
    .addTo(map);
  L.marker([33, 138.5]).bindPopup("平面直角座標8系原点").addTo(map);
  L.marker([33, 139.33333333333334])
    .bindPopup("平面直角座標9系原点")
    .addTo(map);
  L.marker([33, 140.66666666666666]).addTo(map);
};
