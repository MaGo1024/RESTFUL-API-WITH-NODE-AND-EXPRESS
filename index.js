const express = require('express');
const app = express();

app.get('/', (req, res) => {   //Route  // Function within is called Route Handler
    res.send('Hello World!!!');
});

app.get('/api/courses', (req, res) => {   //API Endpoint
    res.send([1,2,3]);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));


// Install Node Monitor to stop ending node app instances everytime with CRTL + Cnpm (npm i -g nodemon)