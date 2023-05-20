const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 3002;

// Root Route => localhost:3000/api
router.get('/api', (req, res) => {
    res.json({
        'All Favorite Steaks': `http://localhost:${PORT}/api/favSteaks`,
        'All Meals': `http://localhost:${PORT}/api/meals`,
        'All Customers': `http://localhost:${PORT}/api/customers`

    })
})




module.exports = router;