"use server";

export async function sendMessage(formData: FormData) {
  const nodemailer = require("nodemailer");
  const name = formData.get("name");
  const subject = formData.get("subject") || "Без темы";
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const messageOptions = {
    from: process.env.GMAIL_USER,
    to: "novimaks80@gmail.com",
    subject: `Сообщение: ${subject}`,
    text: `От: ${name} \n${message}`,
    html: `
      <h3>Новое сообщение с портфолио</h3>
      <p><b>Отправитель:</b> ${name}</p>
      <p><b>Тема:</b> ${subject}</p>
      <p><b>Сообщение:</b></p>
      <p>${message}</p>
      <hr />
      <p>Дата: ${new Date().toLocaleString("ru-RU")}</p>
    `,
  };

  try {
    await transporter.sendMail(messageOptions);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}
