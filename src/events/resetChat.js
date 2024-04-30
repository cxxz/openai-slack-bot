const app = require("#configs/app");
const openAICommand = require("#configs/openai");
const { appLogger: logger } = require("#configs/logger");

app.command("/reset", async ({ event, ack, say }) => {
  logger.debug("/reset", command);

  try {
    await ack(); // Acknowledge command request
    const id = event.user;
    const response = await openAICommand.clearChatHistory(id);
    await say(response);

    logger.debug("/reset completed");
  } catch (error) {
    logger.error(error);

    await say("Oops, something went wrong. Please try again later.");
  }
});
