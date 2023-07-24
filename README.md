# Streamr Weather Data Visualization with Next.js and Mapbox

This project demonstrates how to use real-time weather data from the Streamr Network, visualize it as plot points on a Mapbox map, and limit the number of plot points to avoid overloading the browser. All of this is done using Next.js and TypeScript.

## Tech Stack

This project uses a variety of technologies and libraries:

- [Next.js](https://nextjs.org/): A React framework for building JavaScript applications.
- [Streamr](https://www.streamr.network/): A decentralized platform for real-time data.
- [Mapbox](https://www.mapbox.com/): An open-source mapping platform for custom designed maps.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript that adds optional types.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.
- [React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner): A customizable spinner component for loading state.

## How It Works

### Streamr Data

The application uses the Streamr client to subscribe to a real-time data stream. The data stream used in this project is a weather data stream from the Streamr Network. The data includes temperature, latitude, and longitude.

### Mapbox Map

The application uses Mapbox to visualize the data. Each data point from the Streamr data stream is plotted on the map as a marker. When you click on a marker, a popup displays the temperature and coordinates of the data point.

### Limiting Plot Points

To prevent the browser from being overloaded with plot points, the application limits the number of markers on the map to 100. When a new marker is added, the oldest marker is removed if there are already 100 markers on the map.

### Next.js and TypeScript

The application is built with Next.js, a React framework, and TypeScript, a statically typed superset of JavaScript. These tools provide a robust and type-safe development environment.

## Take the Repo for a Spin... Locally.

1. Clone the repository: `git clone https://github.com/PSkinnerTech/streamr-weather.git`
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory and add your Mapbox access token as `NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token`
4. Run the development server: `npm run dev`

## Getting Started

1. **Set up your development environment**

   - Install [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) (comes with Node.js) on your machine.
   - Install [Next.js](https://nextjs.org/docs/getting-started) by running `npx create-next-app@latest` in your terminal.

2. **Create a new Next.js application**

   - Run `npx create-next-app@latest streamr-weather` in your terminal to create a new Next.js application.
   - Navigate to your new project directory with `cd streamr-weather`.

3. **Install necessary packages**

   - Install the necessary packages by running the following commands in your terminal:
     - `npm install streamr-client`
     - `npm install mapbox-gl`
     - `npm install tailwindcss postcss autoprefixer`
     - `npm install @types/mapbox-gl`
     - `npm install typescript @types/react @types/node --save-dev`

4. **Set up Tailwind CSS**

   - Create a new `postcss.config.js` file in the root of your project and add the following code:

     ```javascript
     module.exports = {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     };
     ```

   - Create a new `tailwind.config.js` file in the root of your project and add the following code:

     ```javascript
     module.exports = {
       purge: ["./src/**/*.{js,ts,jsx,tsx}"],
       darkMode: false, // or 'media' or 'class'
       theme: {
         extend: {},
       },
       variants: {
         extend: {},
       },
       plugins: [],
     };
     ```

   - In the `globals.css` file, import Tailwind's base, components, and utilities styles by adding the following code:

     ```css
     @import "tailwindcss/base";
     @import "tailwindcss/components";
     @import "tailwindcss/utilities";
     ```

5. **Folder Structure**

   ```bash
   /streamr-weather
    ├── node_modules
    ├── public
    ├── src
    │ ├── components
    │ │ ├── MapComponents.tsx
    │ ├── pages
    │ │ ├── index.tsx
    │ ├── StreamrClient.ts
    ├── .env.local
    ├── .gitignore
    ├── package.json
    ├── tsconfig.json
    └── README.md
   ```

6. **Set up Mapbox**

   - Sign up for a free account on [Mapbox](https://www.mapbox.com/) and get your access token.
   - Create a new `.env` file in the root of your project and add the following code:

     ```env
     NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
     ```

   - Replace `your_mapbox_access_token` with your actual Mapbox access token.

7. **Step 7: Set Up Streamr**

   1. **Create a Streamr account:** Visit [Streamr](https://streamr.network/) and sign up for a new account if you don't have one already.
   2. **Get the Stream ID:** For this project, we will be using a specific Stream ID: `streams.dimo.eth/firehose/weather`. This is the ID of the Stream that we will be subscribing to in order to receive the weather data.
   3. **Generate a Private Key:** In order to authenticate with the Streamr API, we need a private key. For the purpose of this tutorial, we will generate a random private key using the `crypto` library. In a production environment, you would want to securely store and manage your private keys. Here's how you can generate a random private key:

   ```typescript
   const crypto = require("crypto");
   const privateKey = crypto.randomBytes(32).toString("hex");
   ```

   4. **Update the .env.local file:** Open the `.env.local` file in your project and replace `YOUR_STREAMR_API_KEY` with the private key you just generated. Replace `YOUR_STREAM_ID` with the Stream ID `streams.dimo.eth/firehose/weather`.

   ```typescript
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN = YOUR_MAPBOX_ACCESS_TOKEN;
   STREAMR_API_KEY = YOUR_PRIVATE_KEY;
   STREAM_ID = streams.dimo.eth / firehose / weather;
   ```

   5. **Set up Streamr in the project:** In the `StreamrClient.ts` file, we're using the `require` function to import the `streamr-client` package. This is because, as of the time of writing this tutorial, the `streamr-client` package doesn't fully support ES6 imports. Therefore, we use `const StreamrClient = require("streamr-client");` instead of `import { StreamrClient } from "streamr-client";`.

   ```typescript
   const StreamrClient = require("streamr-client");

   const client = new StreamrClient({
     auth: {
       privateKey: process.env.STREAMR_API_KEY,
     },
   });

   const main = async (handleData: (data: any) => void) => {
     await client.connect();

     const subscription = await client.subscribe(
       {
         stream: process.env.STREAM_ID,
       },
       (message: any, metadata: any) => {
         handleData(message);
       }
     );
   };

   export default main;
   ```

8. **Step 8: Set Up Mapbox**

   1. **Create a Mapbox account:** Visit [Mapbox](https://www.mapbox.com/) and sign up for a new account if you don't have one already.
   2. **Get the Mapbox Access Token:** Once you've created an account and logged in, navigate to your Account page. Here, you can create a new Access Token. Make sure to save this token somewhere safe, as you won't be able to view it again.
   3. **Update the .env.local file:** Open the `.env.local` file in your project and replace `YOUR_MAPBOX_ACCESS_TOKEN` with the Access Token you just generated.

   ```jsx
   NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN = YOUR_MAPBOX_ACCESS_TOKEN;
   STREAMR_API_KEY = YOUR_PRIVATE_KEY;
   STREAM_ID = streams.dimo.eth / firehose / weather;
   ```

   4. **Set up Mapbox in the project:** In the `MapComponents.tsx` file, we're using the `require` function to import the `mapbox-gl` package. This is because, as of the time of writing this tutorial, the `mapbox-gl` package doesn't fully support ES6 imports. Therefore, we use `const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");` instead of `import mapboxgl from "mapbox-gl";`.

   ```typescript
   import React, { useEffect, useRef } from "react";
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
       return () => map.current?.remove();
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
           )}°F<br>Latitude: ${data.latitude}<br>Longitude: ${
             data.longitude
           }</p>`
         );

         marker.setPopup(popup);
       }
     }, [data]);

     return (
       <div ref={mapContainerRef} style={{ width: "100%", height: "600px" }} />
     );
   };

   export default MapComponent;
   ```

9. **Step 9: Set Up the Data Stream**

   1. **Create the StreamrClient.ts file:** In the `src` directory, create a new file named `StreamrClient.ts`. This file will be responsible for setting up the Streamr client and subscribing to the data stream.
   2. **Set up the Streamr client:** In the `StreamrClient.ts` file, we're going to set up the Streamr client. We'll import the `StreamrClient` package using the `require` function, similar to how we imported the `mapbox-gl` package. This is because, as of the time of writing this tutorial, the `streamr-client` package doesn't fully support ES6 imports. Therefore, we use `const StreamrClient = require("streamr-client");` instead of `import { StreamrClient } from "streamr-client";`.
   3. **Subscribe to the data stream:** We'll use the `subscribe` method provided by the Streamr client to subscribe to the data stream. We'll pass in the `streamId` and a callback function that will be called every time a new message is received from the stream. The callback function will receive the message data as its argument.

   ```typescript
   const StreamrClient = require("streamr-client");

   const client = new StreamrClient({
     auth: {
       privateKey: process.env.STREAMR_API_KEY,
     },
   });

   const main = async (handleData: (data: any) => void) => {
     await client.connect();

     const subscription = await client.subscribe(
       {
         stream: process.env.STREAM_ID,
       },
       (message: any, metadata: any) => {
         handleData(message);
       }
     );
   };

   export default main;
   ```

10. **Step 10: Set Up the Main Page**

    1. **Create the index.tsx file:** In the `src/pages` directory, create a new file named `index.tsx`. This file will be responsible for rendering the main page of the application.
    2. **Import necessary packages and components:** At the top of the `index.tsx` file, import the necessary packages and components. This includes React, the `useEffect` and `useState` hooks from React, the `MapComponent` component, and the `main` function from the `StreamrClient.ts` file.
    3. **Set up the main page component:** In the `index.tsx` file, set up the main page component. This component will use the `useState` hook to keep track of the current data from the Streamr data stream, and the `useEffect` hook to subscribe to the data stream when the component mounts.

    ```typescript
    import React, { useEffect, useState } from "react";
    import MapComponent from "../components/MapComponent";
    import main from "../StreamrClient";

    const IndexPage: React.FC = () => {
      const [data, setData] = useState(null);

      useEffect(() => {
        main((message: any) => {
          setData(message);
        });
      }, []);

      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className="flex flex-col items-center justify-center">
            {data && <MapComponent data={data} />}
          </div>
        </div>
      );
    };

    export default IndexPage;
    ```

11. **Step 11: Run the Application**
    1. **Start the development server:** After setting up the StreamrClient and Mapbox components, you can now run the application. In your terminal, run the command `npm run dev` to start the development server.
    2. **Open the application in a browser:** Once the development server is running, open a web browser and navigate to `http://localhost:3000`. You should see the application running, with real-time weather data being fetched from the Streamr Network and plotted on the Mapbox map.
    3. **Interact with the application:** Click on the markers on the map to view the temperature and coordinates data. The markers are clustered to improve performance and usability.

## Conclusion

Congratulations! You've successfully built a real-time weather data visualization application using Streamr, Mapbox, Next.js, and TypeScript. This application demonstrates the power of real-time data streams and how they can be used to provide up-to-date, dynamic content in a web application. Whether you're building a weather app, a live dashboard, or any other application that requires real-time data, Streamr provides a powerful, easy-to-use platform for working with real-time data streams.
