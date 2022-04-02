// 참고 : https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

import express from 'express';
const router = express.Router();

router.get('/', function(req, res){
    res.send('wiki home page');

})

router.get('/dictionary', function(req,res){
    res.send('dictionary');
})

module.exports = router;

// Note : Above we are defining our route handler callbacks directly in the router functions. In the LocalLibrary we'll define these callbacks in a seperate controller module.

// mongodb : https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/