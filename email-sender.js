var nodemailer = require("nodemailer");

require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "erigeouni@gmail.com",
    pass: process.env.PW,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

var mailOptions = {
  from: "erigeouni@gmail.com",
  to: "erigeouni@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
