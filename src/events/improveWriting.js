const app = require("#configs/app");
const openAICommand = require("#configs/openai");
const { appLogger: logger } = require("#configs/logger");

app.command("/iw", async ({ command, ack, say }) => {
  logger.debug("/iw", command);

  try {
    await ack(); // Acknowledge command request
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `<@${command.user_id}> improve writing: ${command.text}`,
          },
        },
      ],
    });
    const answer = await openAICommand.improveWriting(command.text);
    await say(answer);

    logger.debug("/iw returned: " + answer);
  } catch (error) {
    logger.error(error);

    await say("Oops, something went wrong. Please try again later.");
  }
});
