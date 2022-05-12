const express = require('express');
const app = express();

app.get('/inventory', (res, req) => {
    console.log("GET")
    req.send('GET')
})

app.post('/inventory', (res, req) => {
    console.log("POST")
})

app.put('/inventory/{iID}', (res, req) => {
    console.log("PUT")
})

app.delete('/inventory/{iID}', (res, req) => {
    console.log("DELETE")
})


app.post('/shipment', (res, req) => {
    
})

app.listen(3000, function() {
    console.log('listening on 3000')
})