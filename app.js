// Import the nodemailer module
var nodemailer = require("nodemailer");

// Create a transport object using the createTransport method of nodemailer
var transfer = nodemailer.createTransport({
    service:"gmail", // Specify the email service to use
    auth:{
        user:"", // Enter your email address here
        pass:"" // Enter your email password here
    }
});

// Create a mail options object to specify the details of the email to be sent
var mailinfo = {
    from:"", // Enter the sender's email address here
    to:"", // Enter the recipient's email address here
    subject:"", // Enter the subject of the email here
    text:"", // Enter the plain text content of the email here
    /*html:"<form><input type='text'><br><input type='submit'></form>"*/ // Uncomment this line to include HTML content in the email
};

// Use the sendMail method of the transport object to send the email
transfer.sendMail(mailinfo,function(error){
    if(error) console.log(error); // If there is an error, log it to the console
    else console.log("Mail Sended"); // If there is no error, log a success message to the console
});
