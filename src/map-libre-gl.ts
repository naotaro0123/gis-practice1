import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const setupMapLibreGlFromJson = async (container: HTMLElement) => {
  // MapLibreインスタンスを初期化
  const map = new maplibregl.Map({
    container,
    center: [137.1, 36.5],
    zoom: 4,
    style: {
      // MapLibre-Style
      version: 8,
      sources: {
        // 地図上で使うデータを定義する
        osm: {
          type: "raster", // ラスタータイル
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256, // タイルの解像度, デフォルトは512
          maxzoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
        polygon: {
          type: "geojson", // GeoJSON
          data: "./json/A16-15_00_DID.geojson",
          attribution:
            '<a href="https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-A16-v2_3.html">国土数値情報 - 人口集中地区データ</a>',
        },
        line: {
          type: "geojson",
          data: "./json/N02-21_RailroadSection.geojson",
          attribution:
            '<a href="https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N02-v3_0.html">国土数値情報 - 鉄道データ</a>',
        },
      },
      layers: [
        {
          id: "osm-layer",
          source: "osm", // 使うデータをsourcesのkeyで指定する
          type: "raster", // データをどのように表示するか指定する
        },
        {
          id: "polygon-layer",
          source: "polygon",
          type: "fill",
          paint: {
            // Leafletの場合と同じような色表現とするための設定
            "fill-color": [
              "rgba",
              255,
              0,
              0,
              ["min", 1, ["/", ["/", ["get", "人口"], ["get", "面積"]], 20000]],
            ],
          },
        },
        {
          id: "line-layer",
          source: "line",
          type: "line",
          paint: {
            // Leafletの場合と同じような色表現とするための設定
            "line-color": [
              "case",
              ["==", ["get", "N02_002"], "1"],
              "green",
              ["==", ["get", "N02_002"], "2"],
              "#00f", // blue
              ["==", ["get", "N02_002"], "3"],
              "#ff0000", // red
              ["==", ["get", "N02_002"], "4"],
              "#ffaa00", // orange
              ["==", ["get", "N02_002"], "5"],
              "#aa00ff", // purple
              "#000000",
            ],
            "line-width": [
              "case",
              ["==", ["get", "N02_002"], "1"],
              10,
              ["==", ["get", "N02_002"], "2"],
              7,
              ["==", ["get", "N02_002"], "3"],
              4,
              ["==", ["get", "N02_002"], "4"],
              4,
              ["==", ["get", "N02_002"], "5"],
              4,
              0,
            ],
          },
          layout: {
            "line-cap": "round",
          },
        },
      ],
    },
  });
};
