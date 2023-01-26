const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const router = require('./routes/router.js');

const port = process.env.PORT || 5002
app.use(cors());
app.use('/api', router);

if(process.env.NODE_ENV !== 'development') {
    app.use(express.static('public/dist'));
    app.use(express.json());
    app.get('/*', function(req,res) {
        res.sendFile('index.html', { root: path.join(__dirname, './public/dist/') });
    });
}

app.listen(port, () => {
  console.log('listening');
});

