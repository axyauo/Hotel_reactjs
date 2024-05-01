// In your backend server file (e.g., server.js)
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST endpoint to handle form submission
app.post("/submit-form", async (req, res) => {
  try {
    const { location, checkInDate, checkOutDate, guests } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // your Gmail email address
        pass: "your-password", // your Gmail password
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: "your-email@gmail.com", // sender address
      to: "jisakshay01@gmail.com", // list of receivers
      subject: "New Hotel Search", // Subject line
      html: `
        <p><b>Location:</b> ${location}</p>
        <p><b>Check-in Date:</b> ${checkInDate}</p>
        <p><b>Check-out Date:</b> ${checkOutDate}</p>
        <p><b>Guests:</b> ${guests}</p>
      `, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "An error occurred while sending email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
