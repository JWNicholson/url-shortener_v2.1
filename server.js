const express = require('express');

const app = express();

//path
app.get('/', (req,res) => {
    res.send('wazzup?');
});

//port
const port = 5500;

app.listen(port, () => console.log(`Server running on port ${port}`));