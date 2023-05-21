// 
const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3002;

// Destructure the dao to gain access to the dao since 
// it is an object within an object
const { customerDao: dao } = require('../../daos/dao')

// Get Methods
// --------------------------------------

// localhost:3000/customer/api (Logic in daoCommon)
// --------------------------------------
router.get('/api', (req, res)=> {
    dao.findAll(res, dao.table)
});

// localhost:3000/customer/api/count (Logic in daoCommon)
// --------------------------------------
router.get('/api/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

// localhost:3000/customer/api/id (Logic in daoCommon)
// --------------------------------------
router.get('/api/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id)
});


// POST Methods (Logic in customerDao.js)
// --------------------------------------

router.post('/api/create', (req, res)=> {
    dao.create(req, res)
})

// Patch or Update Method (Logic in customerDao.js)
// --------------------------------------

router.patch('/api/update/:id', (req, res) => {
    dao.update(req, res)
})




module.exports = router;