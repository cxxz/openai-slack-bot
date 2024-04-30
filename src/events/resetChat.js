const app = require("#configs/app");
const openAICommand = require("#configs/openai");
const { appLogger: logger } = require("#configs/logger");

app.command("/reset", async ({ body, ack, say }) => {
  logger.debug("/reset", body);

  try {
    await ack(); // Acknowledge command request
    const id = body.user_id;
    logger.debug("clearing history for " + id);
    const response = await openAICommand.clearChatHistory(id);
    await say(response);

    logger.debug("/reset completed");
  } catch (error) {
    logger.error(error);

    await say("Oops, something went wrong. Please try again later.");
  }
});
