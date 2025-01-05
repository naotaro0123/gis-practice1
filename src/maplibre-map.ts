import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export const setupMapLibreGl = (container: HTMLElement) => {
  const map = new maplibregl.Map({
    container,
    style: "https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json",
    center: [139.3024, 35.2598],
    zoom: 10,
  });

  map.on("load", async () => {
    // Point
    {
      const iconImage = await map.loadImage("./img/icon.png");
      const iconImageId = "facility_icon" as const;
      map.addImage(iconImageId, iconImage.data);
      // 国土数値情報データの刊行資源データ（神奈川）
      // https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P12-2014.html
      const fileName = "P12a-14_14";

      map.addSource(fileName, {
        type: "geojson",
        data: `./json/${fileName}.geojson`,
      });
      map.addLayer({
        id: fileName,
        type: "symbol",
        source: fileName,
        layout: {
          "icon-image": iconImageId,
          "icon-size": 0.1,
        },
      });

      map.on("click", fileName, (e) => {
        const geometry = e.features?.[0].geometry;
        const name = e.features?.[0].properties.P12_002;

        if (geometry !== undefined && "coordinates" in geometry) {
          const coordinates = (
            geometry.coordinates as [number, number]
          ).slice();

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new maplibregl.Popup({
            offset: 10,
            closeButton: false,
          })
            .setLngLat(coordinates as [number, number])
            .setHTML(name)
            .addTo(map);
        }
      });
    }

    // Draw Bus Line
    {
      const busLineFileName = "N07-22_14";
      map.addSource(busLineFileName, {
        type: "geojson",
        data: `./json/${busLineFileName}.geojson`,
      });
      map.addLayer({
        id: busLineFileName,
        type: "line",
        source: busLineFileName,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#0067c0",
          "line-width": 5,
        },
        filter: ["==", "N07_001", "神奈川中央交通（株）"],
      });
    }

    // Draw Polygon
    {
      const polygonFileName = "L05-1-09_14-g_IndustrialComplex";
      map.addSource(polygonFileName, {
        type: "geojson",
        data: `./json/${polygonFileName}.geojson`,
      });
      map.addLayer({
        id: polygonFileName,
        type: "fill",
        source: polygonFileName,
        paint: {
          "fill-color": "#FD7E00",
          "fill-opacity": 0.8,
        },
      });
      map.on("click", polygonFileName, (e) => {
        const name = e.features?.[0].properties.L05_002;
        new maplibregl.Popup({
          closeButton: false,
        })
          .setLngLat(e.lngLat)
          .setHTML(name)
          .addTo(map);
      });
    }
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
