const nodemailer = require("nodemailer");
const express = require("express");
const config = require("./config");
const app = express();

app.listen(8080);


app.post("/sendMail", (req, res) => {
    const {to, subject, text} = req.query;
    send(res,to, subject, text);
})


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:config.username,
      pass:config.pass
    }
});



async function send(res, to, subject, text, html) {
    await transporter.sendMail({
        from: config.username,
        to: to,
        subject: subject,
        text: text
    }).then(() => {
      return res.json({islem:'İslem Basarili'})
    }).catch((e) => {
      return res.json({islem:'İslem Başarısız ' + e})
    })

    
}

