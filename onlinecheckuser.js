const express = require("express")
const path = require('path');
const checkuser = require('./checkuser');


var app = express()

// async function docheckuser() {
//     const list = await checkuser().then()
//     const list2 = await JSON.stringify(list)

//     return list2
// }


app.get('/', (req, res) => {
    res.send(`Passed accounts: ${checkuser.passedList} failed accounts: ${checkuser.failedList}`)
  })
 

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
console.log(`Started application on port ${PORT}`)
});

// Set static folder (when you want to use your middleware)
app.use(express.static(path.join(__dirname, 'public')));