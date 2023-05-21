// This will give us Access to the DaoCommon
// -------------------------------------------------------

const daoCommon = require('./common/daoCommon')

const favSteakDao  = {
    ...daoCommon,
    ...require('./api/favSteakDao')
}

module.exports = {
    favSteakDao
}