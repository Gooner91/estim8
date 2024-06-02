import {App} from "@slack/bolt";
import * as dotenv from "dotenv";

dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: false, // setting for now to false (no app token provided atm)
});

(async () => {
  try{
    await app.start(process.env.PORT || 3000);
    console.log("estim8 running via Bolt");
  }
  catch (error){
    console.error("unable to start app", error);
  }
})();
