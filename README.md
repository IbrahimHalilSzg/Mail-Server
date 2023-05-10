# Mail-Server
Email Doğrulamak için yazdığım bir API

# Config.js adlı dosyayı doldurup kullanabilirsiniz.
## Çalışma mantığı
```js
const fetch = require("node-fetch");

var mailOptions = {
  "to":"ibrahimhalilsezgin@proton.me",
  "subject": "Hello!",
  "text":"Hello! ..."  
}

fetch(`http://localhost:8080/sendMail?to=${mailOptions.to}&subject=${mailOptins.subject}&text=${mailOptions.text}`).then(res => {
  console.log("Email Successfully Sended...")
}).catch(err => {
   console.error("Email Not Sended...\n", err)
})
```
