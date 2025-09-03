// The Firebase Admin SDK to access Firestore.
// import { initializeApp } from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';
import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
// import { HttpsRequest, HttpsResponse } from "firebase-functions/v1/https";

// initializeApp();
// const db = getFirestore();

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().email.user,
    pass: functions.config().email.pass,
  },
});

// HTTP Callable function for Consultation Requests
export const sendConsultationEmail = functions.https.onRequest(
  async (req: functions.https.Request, res: functions.https.Response) => {
    // Allow CORS for requests from your Next.js app
    res.set("Access-Control-Allow-Origin", "*");

    if (req.method === "OPTIONS") {
      // Send response to CORS preflight request
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const data = req.body;

    if (
      !data ||
      !data.fullName ||
      !data.email ||
      !data.companyName ||
      !data.phoneNumber ||
      !data.preferredDate ||
      !data.preferredTime
    ) {
      res.status(400).send("Missing required fields");
      return;
    }

    const mailOptions = {
      from: `Nomad AI Website <${functions.config().email.user}>`,
      to: "nomadai2025@gmail.com", // Your target email address
      subject: `New Consultation Request from ${data.fullName}`,
      html: `
      <p>You have received a new consultation request from your website.</p>
      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Full Name:</strong> ${data.fullName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Company Name:</strong> ${data.companyName || "N/A"}</li>
        <li><strong>Phone Number:</strong> ${data.phoneNumber || "N/A"}</li>
        <li><strong>Preferred Date:</strong> ${data.preferredDate || "N/A"}</li>
        <li><strong>Preferred Time:</strong> ${data.preferredTime || "N/A"}</li>
      </ul>
      ${
        data.additionalInfo
          ? `<h3>Additional Information:</h3><p>${data.additionalInfo}</p>`
          : ""
      }
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Consultation request email sent successfully.");
      return res.status(200).send({ success: true });
    } catch (error: any) {
      console.error("Error sending consultation request email:", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  }
);

// HTTP Callable function for Contact Form Submissions
export const sendContactEmail = functions.https.onRequest(
  async (req: functions.https.Request, res: functions.https.Response) => {
    // Allow CORS for requests from your Next.js app
    res.set("Access-Control-Allow-Origin", "*");

    if (req.method === "OPTIONS") {
      // Send response to CORS preflight request
      res.set("Access-Control-Allow-Methods", "POST");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const data = req.body;

    if (
      !data ||
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.subject ||
      !data.message
    ) {
      res.status(400).send("Missing required fields");
      return;
    }

    const mailOptions = {
      from: `Nomad AI Website <${functions.config().email.user}>`,
      to: "nomadai2025@gmail.com", // Your target email address
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
      <p>You have received a new message from your website contact form.</p>
      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Subject:</strong> ${data.subject}</li>
      </ul>
      <h3>Message:</h3>
      <p>${data.message}</p>
    `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Contact form email sent successfully.");
      return res.status(200).send({ success: true });
    } catch (error: any) {
      console.error("Error sending contact form email:", error);
      return res.status(500).send({ success: false, error: error.message });
    }
  }
);
