import { AllMiddlewareArgs, SlackEventMiddlewareArgs } from "@slack/bolt";

const appMentionCallback = async ({event, context, client, say}: AllMiddlewareArgs & SlackEventMiddlewareArgs<'app_mention'>) => {
  try{
    await say({"blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Thanks for the mention <@${event.user}>! Here is a button`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "button",
            "emoji": true,
          },
          "value": "click_me_123",
          "action_id": "first_button",
        }
      }
    ]});
  }
  catch(error){
    console.error(error);
  }
};

export default appMentionCallback;
