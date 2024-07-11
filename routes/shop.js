const path = require('path'); //Core Module of Node Js

const express = require('express');

const router = express.Router();


router.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname,'../', 'views' ,'shop.html'));
});


module.exports = router;