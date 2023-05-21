// Write Specific Queries for the Favorite Stakes CRUD
// -------------------------------------------------


// Get Access to the Database
// -------------------------------------------------
const conn = require('../../config/dbconfig')


const favSteakDao = {
    table: 'favSteak',
    // Create Method so we can post with a form
    // -------------------------------------------------
    create: (req, res) => {
        if(Object.keys(req.body).length === 0 ) {
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)
            
            conn.execute(
                `INSERT INTO favSteak SET${fields.join(' =?,')} = ?;`,
                values,
                (error, dbres) => {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log(' DAO ERROR', error)
                        res.send('Error creating record')
                    }
                }
                )
            }
        },
        // Update
        // -------------------------------------------------
        update: (req,res) => {
            if(isNaN(req.params.id)) {
                res.json({
                "error": true,
                "message": "Id must be a number."
            })
        } else if (Object.keys(req.body).length === 0 ) {
            res.json({
                "error": true,
                "message": "No fields to update."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            conn.execute (
                `UPDATE favSteak SET ${fields.join(' =?, ')} = WHERE favSteak_id = ?;`,
                [...values, req.params.id],
                (error, dbres) => {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log(' DAO ERROR', error)
                        res.send('Error updating record')
                    }

                }
            )
        }
    },

    // Find By Steak Query
    // -------------------------------------------------
    findBySteak: (res, steak) => {
        conn.execute(
            'SELECT * FROM favSteak WHERE steak = ?;',
            [steak],
            (error, rows) => {
                if(!error){
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
    }

}


module.exports = favSteakDao;