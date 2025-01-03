import L from "leaflet";

export const setupMap = (element: HTMLDivElement) => {
  // 地図インスタンス初期化
  const map = L.map(element, {
    center: [36.5, 137.1],
    zoom: 5,
  });
  // 背景レイヤーインスタンス初期化
  const backgroundLayer = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png", // OSMのURLテンプレート
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );
  // 地図に背景レイヤーを追加
  map.addLayer(backgroundLayer);
};
