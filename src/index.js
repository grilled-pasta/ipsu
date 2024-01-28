"use strict";

const ViberBot = require("viber-bot").Bot;
const BotEvents = require("viber-bot").Events;
const TextMessage = require("viber-bot").Message.Text;
const KeyboardMessage = require("viber-bot").Message.Keyboard;
const RichMediaMessage = require("viber-bot").Message.RichMedia;

const {
  sendKeyboardMenu,
  sendCenters,
  sendCenterDetails,
} = require("./message.controller");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

console.log(process.env.WEBHOOK_URL);
console.log(process.env.PORT);

// Server
const router = express.Router();
const app = express();

// EXPRESS CONFIG
const corsOptions = {
  origin: process.env.WEBHOOK_URL,
  methods: "GET,POST,DELETE",
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.static("assets"));

// BOT CONFIG
const bot = new ViberBot({
  authToken: process.env.VIBER_ACCESS_TOKEN,
  name: "ИПСУ",
  avatar: "/logo.png",
});

bot.onConversationStarted((userProfile) => {
  console.log(
    `${BotEvents.CONVERSATION_STARTED}: ${JSON.stringify(userProfile)}`
  );

  bot
    .sendMessage(userProfile, [
      new TextMessage(
        `Здравей, ${userProfile.name}, от какво имаш нужда?`,
        sendKeyboardMenu([...db.values()].filter((v) => v.id < 10)),
        null,
        null,
        null,
        6
      ),
    ])
    .catch((e) => console.log(e));
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
  if (isNaN(message.text) || !db.has(Number(message.text))) {
    return bot.sendMessage(response.userProfile, [
      new TextMessage(
        "Не мога да отговарям на съобщения, моля използвай менюто:",
        sendKeyboardMenu([...db.values()].filter((v) => v.id < 10)),
        null,
        null,
        null,
        6
      ),
    ]);
  }

  console.log(message);
  const selection = Number(message.text);

  const answer = db.get(selection);

  if (answer.type === "menu") {
    bot
      .sendMessage(response.userProfile, [
        new KeyboardMessage(
          sendKeyboardMenu(
            [...db.values()].filter(
              (v) => v.id >= selection * 10 && v.id < (selection + 1) * 10
            )
          ),
          null,
          null,
          null,
          6
        ),
      ])
      .catch((e) => console.log(e));
  } else if (answer.type === "answer") {
    bot
      .sendMessage(response.userProfile, [
        new RichMediaMessage(
          sendCenters(
            [...db.values()].filter(
              (v) => v.id >= selection * 10 && v.id < (selection + 1) * 10
            )
          ),
          null,
          null,
          null,
          6
        ),
      ])
      .catch((e) => console.log(e));
  } else if (answer.type === "center") {
    bot
      .sendMessage(response.userProfile, [
        ...sendCenterDetails(db.get(selection)),
        new KeyboardMessage(
          sendKeyboardMenu([...db.values()].filter((v) => v.id < 10)),
          null,
          null,
          null,
          6
        ),
      ])
      .catch((e) => console.log(e));
  } else if (answer.type === "back") {
    bot
      .sendMessage(response.userProfile, [
        new KeyboardMessage(
          sendKeyboardMenu([...db.values()].filter((v) => v.id < 10)),
          null,
          null,
          null,
          6
        ),
      ])
      .catch((e) => console.log(e));
  }
});

app.use("/", router);
app.use("/viber/webhook", bot.middleware());
app.listen(process.env.PORT, async () => {
  console.log(`Application running on port: ${process.env.PORT}`);
  try {
    bot
      .setWebhook(`${process.env.WEBHOOK_URL}/viber/webhook`)
      .catch((e) => console.log(e));
  } catch (error) {
    console.log(
      `Can't set WEBHOOK on ${process.env.WEBHOOK_URL}/viber/webhook`
    );
    console.error(error);
    process.exit(1);
  }
});
