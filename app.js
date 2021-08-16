const express = require('express')
const app = express()
const path = require('path')
const port = 5000
const fs = require('fs')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
    //fs.appendFile("visit.json",JSON.stringify(visit), function (err) {
        //if (err) return console.log(err);
     // });//
})

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/submit', function(request, response){
    console.log(request.body.nomeCampo)
});

var d = new Date()

var visit = {
    horario: d.toString()
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    
})