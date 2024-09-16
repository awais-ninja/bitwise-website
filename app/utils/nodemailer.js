import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_FROM,
    pass: process.env.MAIL_SECRET,
  },
});

export default transport;
