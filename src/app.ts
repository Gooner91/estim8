import {App} from "@slack/bolt";
import ngrok from "@ngrok/ngrok";
import * as dotenv from "dotenv";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_SOCKET_TOKEN,
  socketMode: true,
});

(async() => {
  const listener = await ngrok.forward({addr: 3000, authtoken: process.env.NGROK_AUTH_TOKEN});
  console.log(`Ingress established at: ${listener.url()}`);
})();

(async () => {
  try{
    await app.start(process.env.PORT || 3000);
    console.log("estim8 running via Bolt");
  }
  catch (error){
    console.error("unable to start app", error);
  }
})();
