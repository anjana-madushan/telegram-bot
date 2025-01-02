import axios from "axios";

export const checkMessage = (req, res) => {
  const { message } = req.body;

  if (!message || !message.text.toLowerCase().includes("genie")) {
    return res.end("Who are you looking for here?🤔")
  }

  axios.post("https://api.telegram.org/bot7872498207:AAFypltZMBD6pgp2MVW9dmirvc-lyadZSts",
    {
      chat_id: message.chat.id,
      text: "Hello, I am Genie 🧞‍♂️, it's nice to meet you😊"
    }
  ).then(() => {
    console.log("Message send!");
    res.end();
  }).catch((err) => {
    console.log("Error :", err.message)
    res.status(500).end("Something is wrong here☹️, try again!!!");
  })

}