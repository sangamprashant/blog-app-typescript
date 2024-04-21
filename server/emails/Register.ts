import nodemailer from "nodemailer";

interface MailOptions {
  email: string;
  token: string;
  name: string;
}

const VerificationMail = async ({ email, token, name }: MailOptions) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: "project.message@gmail.com",
      to: email,
      subject: "Verify your account",
      html: `
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Verification Link</title>
        <style>
          /* Gmail friendly styles */
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          header {
            background-color: #198754;
            color: white;
            text-align: center;
            padding: 20px 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          p {
            margin-bottom: 20px;
          }
          a {
            display: inline-block;
            background-color: #198754;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            transition: background-color 0.3s ease;
          }
          a:hover {
            background-color: #005026;
          }
        </style>
      </head>
      <body>
        <header>
          <h3>Verification Link</h3>
        </header>
        <div class="container">
          <p>Hello, ${name}</p>
          <p>Welcome to our application "Blog-App"</p>
          <p>Please click the following link to verify your account:</p>
          <p>
            <a href="${process.env.PUBLIC_URL}/verify/${token}" class="button">
              Verify Now
            </a>
          </p>
          <p>
            If you didn't request this verification, you can safely ignore this
            email.
          </p>
          <p>Thank you,</p>
          <p>The Verification Team</p>
        </div>
      </body>
    </html>
      `,
    };

    // Send the email and wait for the response
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export { VerificationMail };
