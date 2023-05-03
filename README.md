# Nodemailer Example

This is an example of how to use the `nodemailer` module to send an email using Node.js.

## Setup

1. Install the `nodemailer` module by running `npm install nodemailer`.
2. In the `transfer` object, enter your Gmail email address and password in the `user` and `pass` fields respectively.
3. In the `mailinfo` object, enter the sender's email address in the `from` field, the recipient's email address in the `to` field, the subject of the email in the `subject` field, and the plain text content of the email in the `text` field.

## Usage

Run the script using `node <script_name>.js`. If successful, you should see a "Mail Sended" message in the console.

## Notes

- You can uncomment the `html` field in the `mailinfo` object to include HTML content in the email.
- Make sure to allow less secure apps to access your Gmail account. You can do this by going to your Google account settings and enabling "Less secure app access".
