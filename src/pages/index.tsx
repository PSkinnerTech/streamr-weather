import React, { useEffect, useState } from "react";
import main from "../StreamrClient";
import MapComponent from "../components/MapComponents";
import Footer from "../components/Footer";
import CarouselComponent from "../components/Carousel";
import Image from "next/image";

interface WeatherData {
  data: {
    ambientTemp: number;
    latitude: number;
    longitude: number;
  };
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleData = (data: WeatherData) => {
      console.log("Received message:", data);
      setWeatherData(data);
      setLoading(false);
    };
    main(handleData);
  }, []);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-4">
        DIMO Streamr Data Demo
      </h1>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <Image
            src="/Rotating-globe.gif"
            alt="Loading..."
            width={50}
            height={50}
          />
        </div>
      ) : weatherData ? (
        <div>
          <h3 className="text-xl font-bold mb-2 text-center">Data Stream</h3>
          <p className="text-center">
            Temperature: {weatherData.data.ambientTemp}
          </p>
          <p className="text-center">Latitude: {weatherData.data.latitude}</p>
          <p className="text-center mb-4">
            Longitude: {weatherData.data.longitude}
          </p>
          <MapComponent data={weatherData.data} />
        </div>
      ) : null}
      <CarouselComponent />
      <Footer />
    </div>
  );
}
