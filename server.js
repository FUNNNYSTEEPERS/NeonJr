const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hey there!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
); 

////////////////////////////////////////////
//
// ❤️ : Coded By Solar
// 🖤 : Credit's Moon Development
// 💙 : Join For Support
// 🤍 : Invite Neon : https://dsc.gg/neonbot
//
////////////////////////////////////////////