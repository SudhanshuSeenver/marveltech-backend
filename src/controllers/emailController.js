const transporter = require("../config/email");

const sendEmail = async (req, res) => {
  const { to, subject, text, html } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).send({ messageId: info.messageId });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).send({ error: "Failed to send email" });
  }
};

module.exports = {
  sendEmail,
};
