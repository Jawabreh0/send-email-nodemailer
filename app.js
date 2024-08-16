const nodemailer = require("nodemailer");
require("dotenv").config();

async function main() {
  console.log(
    process.env.SENDER_ADDRESS,
    process.env.SENDER_APP_PASSWORD,
    process.env.RECIPIENT_ADDRESS
  );
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_ADDRESS,
      pass: process.env.SENDER_APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: `"Ahmad Jawabreh" <${process.env.SENDER_ADDRESS}>`,
    to: process.env.RECIPIENT_ADDRESS,
    subject: "we are testing nodemailer",
    html: `
    <h1>Listen bro</h1>
    <p>we are testing nodemailer ok ? this one more test with env</p>
    `,
  });

  console.log(info.messageId);
}

main().catch((err) => console.log(err));
