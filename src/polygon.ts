import L from "leaflet";

export const setupPolygon = (map: L.Map) => {
  // 円形を描画
  L.circle([35.681236, 139.767125], {
    color: "yellow",
    fillColor: "#ff0000",
    fillOpacity: 0.3,
    radius: 1000,
  })
    .bindPopup("I am Circle!")
    .addTo(map);

  // 線分
  L.polyline(
    [
      [35.36, 138.73],
      [35.37, 138.73],
      [35.37, 138.74],
      [35.38, 138.74],
      [35.39, 138.75],
      [35.37, 138.75],
    ],
    { color: "blue" }
  )
    .bindPopup("I am Polyline!")
    .addTo(map);

  // 多角形
  L.polygon(
    [
      [35.36, 138.7307908],
      [35.35, 138.74],
      [35.34, 138.72],
    ],
    { color: "green" }
  )
    .bindPopup("I am Polygon!")
    .addTo(map);
};
