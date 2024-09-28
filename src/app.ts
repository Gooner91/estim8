import { App } from "@slack/bolt";
import { createServer } from "http";
import ngrok from "@ngrok/ngrok";
import * as dotenv from "dotenv";
import registerListeners from "./listeners";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_SOCKET_TOKEN,
  socketMode: false,
});

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Estim8 Server Started!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

(async () => {
  const listener = await ngrok.forward({
    addr: 3000,
    authtoken_from_env: true,
  });
  console.log(`Ingress established at: ${listener.url()}`);
})();
process.stdin.resume();
registerListeners(app);

(async () => {
  try {
    await app.start(3001);
    console.log("estim8 running via Bolt");
  } catch (error) {
    console.error("unable to start app", error);
  }
})();
