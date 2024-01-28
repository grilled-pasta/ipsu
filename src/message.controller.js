const TextMessage = require("viber-bot").Message.Text;

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
      BgColor: `${i.type === "back" ? "#f2f2ff" : "#FFFFFF"}`,
      Frame: {
        BorderWidth: 1,
        BorderColor: "#f2f2ff",
        CornerRadius: 10,
      },
    };
  });

  return {
    Type: "keyboard",
    InputFieldState: "hidden",
    Buttons: buttons,
    BgColor: "#F7F7FF",
  };
};

module.exports.sendCenters = (centers) => {
  const buttons = centers
    .map((i) => {
      return [
        {
          Columns: 5,
          Rows: 3,
          ActionType: "",
          ActionBody: `${i.id}`,
          Text: `<b><font color=#3A3335>${i.name}</font></b>`,
          TextSize: "regular",
          TextVAlign: "middle",
          TextHAlign: "center",
          BgColor: "#FFFFFF",
          Silent: true,
          TextShouldFit: true,
        },
        {
          Columns: 5,
          Rows: 1,
          ActionType: "reply",
          ActionBody: `${i.id}`,
          Text: "<font color=#86A7FC>ПОВЕЧЕ ИНФОРМАЦИЯ</font>",
          TextSize: "small",
          TextVAlign: "middle",
          TextHAlign: "center",
          BgColor: "#F7F7FF",
          Silent: true,
        },
      ];
    })
    .flat(1);

  return {
    ButtonsGroupColumns: 5,
    ButtonsGroupRows: 4,
    BgColor: "#FFFFFF",
    Buttons: buttons,
  };
};

module.exports.sendCenterDetails = (center) => {
  const messages = [];

  let message = `*${center.name}*\n`;

  if (center.director) {
    message += `\n _Директор: ${center.director}_\n`;
  }

  if (center.notes) {
    message += `\n${center.notes}\n`;
  }

  if (center.contacts.email) {
    message += `\n\n${center.contacts.email}\n`;
  }

  if (center.contacts.website) {
    message += `\n\n${center.contacts.website}\n`;
  }

  if (center.contacts.phoneNumber) {
    center.contacts.phoneNumber.forEach((t) => {
      message += `\n${t}`;
    });
  }

  messages.push(new TextMessage(message, null, null, null, null, 6));

  if (center.contacts.address) {
    messages.push(
      new TextMessage(center.contacts.address, null, null, null, null, 6)
    );
  }

  return messages;
};
