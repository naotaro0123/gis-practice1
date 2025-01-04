import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const setupMapLibreGl = (container: HTMLElement) => {
  const map = new maplibregl.Map({
    container,
    style: "https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json",
    center: [139.3024, 35.2598],
    zoom: 10,
  });

  const popup = new maplibregl.Popup({
    offset: 25,
    closeButton: false,
  }).setText("渋谷ヒカリエ");

  const marker = new maplibregl.Marker()
    .setLngLat([139.7024, 35.6598])
    .setPopup(popup)
    .addTo(map);
};
