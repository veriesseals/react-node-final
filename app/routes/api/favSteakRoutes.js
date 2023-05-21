// 
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3002;

// Destructure the dao to gain access to the dao since 
// it is an object within an object
const { favSteakDao: dao } = require('../../daos/dao')

// localhost:3000/favSteak/api
// --------------------------------------
router.get('/api', (req, res)=> {
    dao.findAll(res, dao.table)
});


module.exports = router;