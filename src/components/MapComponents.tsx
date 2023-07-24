import React, { useEffect, useRef, useState } from "react";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import "mapbox-gl/dist/mapbox-gl.css";

interface DataProps {
  ambientTemp: number;
  latitude: number;
  longitude: number;
}

interface MapProps {
  data: DataProps;
}

const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

const MapComponent: React.FC<MapProps> = ({ data }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    mapboxgl.accessToken = process.env
      .NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [data.longitude, data.latitude],
      zoom: 2,
    });

    // cleanup function to remove map on unmount
    return () => {
      markers.current.forEach((marker) => marker.remove());
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (data && map.current) {
      const marker = new mapboxgl.Marker()
        .setLngLat([data.longitude, data.latitude])
        .addTo(map.current);

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3 style="color: black;">Weather Data</h3><p style="color: black;">Temperature: ${
          data.ambientTemp
        }°C / ${celsiusToFahrenheit(data.ambientTemp).toFixed(
          2
        )}°F<br>Latitude: ${data.latitude}<br>Longitude: ${data.longitude}</p>`
      );

      marker.setPopup(popup);

      markers.current.push(marker);

      // Remove the oldest marker if there are more than 100 markers
      if (markers.current.length > 100) {
        const oldestMarker = markers.current.shift();
        oldestMarker?.remove();
      }
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center">
      <div
        ref={mapContainerRef}
        className="border-3 border-white rounded-lg"
        style={{ width: "80%", height: "500px" }}
      />
    </div>
  );
};

export default MapComponent;
