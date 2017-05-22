const express = require('express');
const app = express();
const user = require('./pods/user/route');

app.listen(3000, () => console.log('Listening on port 3000'));


app.get('/',(req,res) => res.send('Hello World!'));
app.use('/user',user); //Use the user routes defined in user/route.js

