const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3002;


// Root Route => localhost:3000/api
// ---------------------------------------------------------
router.get('/api', (req, res) => {
    res.json({
        'All Favorite Steaks': `http://localhost:${PORT}/favSteak/api`
        // 'All Meals': `http://localhost:${PORT}/meal/api`,
        // 'All Customers': `http://localhost:${PORT}/customer/api`,
        // 'All Items': `http://localhost:${PORT}/item/api`
        
    })
});

// localhost:3000/api/favSteak
// ---------------------------------------------------------
router.use('/favSteak', require('./api/favSteakRoutes'))

module.exports = router;