import { AllMiddlewareArgs, SlackCommandMiddlewareArgs } from "@slack/bolt";

export const jiraConnectCallback = async ({
  ack,
  respond,
}: AllMiddlewareArgs & SlackCommandMiddlewareArgs) => {
  try {
    await ack();
    await respond("Triggering OAuth flow...");
  } catch (error) {
    console.log(error);
  }
};
