import { App } from "@slack/bolt";
import { jiraConnectCallback } from "./jira-connect";

const register = (app: App) => {
  app.command("/plan-deck-fetch", jiraConnectCallback);
};

export default { register };
