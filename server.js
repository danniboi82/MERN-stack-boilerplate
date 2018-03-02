const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    res.send({express : 'HELLO FROM EXPRESS'});
});

app.listen(3082, () => {
    console.log("you are on port 3082");
})