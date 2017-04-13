const express = require('express');
const path = require('path');
const public = __dirname + "/build/";

const app = express();

app.use(express.static(public));
app.get('*', function(req, res) {
    res.sendFile(path.join(public + "index.html"));
});
app.listen(3000,function(){
    console.log("Started listening on port", 3000);
});