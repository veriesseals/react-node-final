// This will give us Access to the DaoCommon
// -------------------------------------------------------

const daoCommon = require('./common/daoCommon')

const favSteakDao  = {
    ...daoCommon,
    ...require('./api/favSteakDao')
}

const mealDao  = {
    ...daoCommon,
    ...require('./api/mealDao')
}

const customerDao  = {
    ...daoCommon,
    ...require('./api/customerDao')
}

const itemDao  = {
    ...daoCommon,
    ...require('./api/itemDao')
}

module.exports = {
    favSteakDao,
    mealDao,
    customerDao,
    itemDao
}