import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: "vansharya703@gmail.com",
        pass: "boakvqmjqigamqhw",
    },
});
const sendMail = async (name,number,city) => {
 const   content = `
    Dear Admin,

You have received a new user submission with the following details:

Name: ${name}
Contact Number: ${number}
City:${city}
Please review the details and take the necessary actions.

Best regards,
[Your Application Name]
    `
    try {
        const info = await transporter.sendMail({
            from: 'vansharya703@gmail.com', // sender address
            to: 'shalini.maiflix@gmail.com', // list of receivers
            subject: "Membership Form", // Subject line
            text: content, // plain text body
            // html: "<b>Hello world?</b>", // html body
        });
       return info.messageId
    } catch (err) {
        console.error(err);
    }
}


export default sendMail;