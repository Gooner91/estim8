import { App } from "@slack/bolt";
import events from "./events";
import commands from "./commands";

const registerListeners = (app: App) => {
  events.register(app);
  commands.register(app);
};

export default registerListeners;
