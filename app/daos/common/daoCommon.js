// Connect and Access the Database for searches
// --------------------------------------------------
const conn = require('../../config/dbconfig') 

const daoCommon = {
    
    // Find ALL
    // --------------------------------------------------
    findAll: (res, table) => {
        conn.execute(
            `SELECT * FROM ${table};`,
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log(' DAO ERROR ', error)
                }
            }
            )
        },
        
    // Find By ID
    // --------------------------------------------------
    findById: (res, table, id)=> {
        conn.execute(
            `SELECT * FROM ${table} WHERE ${table}_id = ?;`,
            [id],
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log( ' DAO ERROR ', error)
                } 
            }
        )
    },

    // Find By ID
    // --------------------------------------------------
    countAll: (res, table) => {
        conn.execute(
            `SELECT COUNT(*) count FROM ${table};`,
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log( ' DAO ERROR ', error)
                } 
            }

        )
    }
};

module.exports = daoCommon;
