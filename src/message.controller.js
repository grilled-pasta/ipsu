const TextMessage = require("viber-bot").Message.Text;
const KeyboardMessage = require("viber-bot").Message.Keyboard;
const RichMediaMessage = require("viber-bot").Message.RichMedia;
const UrlMessage = require("viber-bot").Message.Url;
const LocationMessage = require("viber-bot").Message.Location;
const ContactMessage = require("viber-bot").Message.Contact;

module.exports.sendKeyboardMenu = (items) => {
  const buttons = items.map((i) => {
    return {
      Columns: i.span === 2 ? 6 : 3,
      Rows: 1,
      ActionType: "reply",
      Text: `${i.name}`,
      TextSize: "regular",
      TextVAlign: "middle",
      TextHAlign: "center",
      ActionBody: `${i.id}`,
      TextShouldFit: true,
      BgColor: "#FFFFFF",
      Silent: true,
    };
  });

  return {
    Type: "keyboard",
    Buttons: buttons,
  };
};

module.exports.sendCenters = (centers) => {
  const buttons = centers
    .map((i) => {
      return [
        {
          Columns: 6,
          Rows: 3,
          ActionType: "",
          ActionBody: `${i.id}`,
          Text: `<font color=#3a3335>${i.name}</font>`,
          TextSize: "large",
          TextVAlign: "top",
          TextHAlign: "center",
          TextShouldFit: true,
          BgColor: "#FFFFFF",
          TextShouldFit: true,
          Silent: true,
        },
        {
          Columns: 6,
          Rows: 1,
          ActionType: "reply",
          ActionBody: `${i.id}`,
          Text: "<font color=#86A7FC>ПОВЕЧЕ ИНФОРМАЦИЯ</font>",
          TextSize: "small",
          TextVAlign: "middle",
          TextHAlign: "center",
          TextShouldFit: true,
          BgColor: "#F7F7FF",
          Silent: true,
        },
      ];
    })
    .flat(1);

  return {
    ButtonsGroupColumns: 6,
    ButtonsGroupRows: 4,
    BgColor: "#FFFFFF",
    Buttons: buttons,
  };
};

module.exports.sendCenterDetails = (center) => {
  const messages = [];

  let message = `*${center.name}*\n${
    center.director ? "\n" + "Директор: " + center.director + "\n" : ""
  }${center.notes ? "\n" + center.notes + "\n" : ""}`;

  message += "\nТелефон:\n";

  center.contacts.telephone.forEach((t) => {
    message += `\n${t}`;
  });

  messages.push(new TextMessage(message));

  Object.values(center.contacts).map((v) => {
    if (!Array.isArray(v)) {
      messages.push(new TextMessage(v));
    }
  });

  return messages;
};
