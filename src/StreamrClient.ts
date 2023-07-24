const StreamrClient = require("streamr-client");
import crypto from "crypto";

const streamId = "streams.dimo.eth/firehose/weather";

interface WeatherData {
  data: {
    ambientTemp: number;
    latitude: number;
    longitude: number;
  };
}

const main = async (handleData: (data: WeatherData) => void) => {
  const client = new StreamrClient({
    auth: {
      privateKey: crypto.randomBytes(32).toString("hex"),
    },
  });

  client.on("error", (error: any) => {
    console.error("Error in StreamrClient:", error);
  });

  const stream = await client.getStream(streamId);

  const onMessage = (content: any) => {
    console.log(JSON.stringify(content, undefined, 2));
    handleData(content); // Pass the data to the callback function
  };

  const subscriptions = await Promise.all(
    stream.getStreamParts().map(async (partition: any) => {
      return await client.subscribe(partition, onMessage);
    })
  );

  return { client, subscriptions };
};

export default main;
