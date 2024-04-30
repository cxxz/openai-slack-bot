const EVENTS = [
  "appMention",
  "ask",
  "fate",
  "generateEvents",
  "genImage",
  "resetChat",
  "improveWriting",
  "message",
  "summarize",
];

const generateEvents = () => {
  EVENTS.map((event) => {
    require(`./${event}`);
  });
};

module.exports = generateEvents;
