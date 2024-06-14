import nodemailer from "nodemailer";

const email = process.env.EMAIL as string;
const pass = process.env.EMAIL_PASS as string;

if (!email || !pass) {
  throw new Error("Email or email password not defined in environment variables");
}

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
