import { AllMiddlewareArgs, SlackCommandMiddlewareArgs } from "@slack/bolt";
import { jiraAuthUrl } from "../../utils";

export const jiraConnectCallback = async ({
  ack,
  respond,
}: AllMiddlewareArgs & SlackCommandMiddlewareArgs) => {
  try {
    console.log("RECIEVE COMMMANDDDDD");
    await ack();
    const authorizationUrl = jiraAuthUrl();

    await respond({
      text: "You need to connect your Jira account first.",
      attachments: [
        {
          text: "Please authorize the application by clicking the button below:",
          fallback: "Unable to authorize",
          color: "#3AA3E3", // Optional: Add color to the message attachment
          actions: [
            {
              type: "button",
              text: "Authorize Jira",
              url: authorizationUrl, // The URL that starts the OAuth flow
              style: "primary",
            },
          ],
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};
