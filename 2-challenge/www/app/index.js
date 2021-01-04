const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'codeeducation_db'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const insert_query = `INSERT INTO people(name) VALUES ('Iago Neres')`
connection.query(insert_query)

app.get('/', (req,res) => {
    
    const query = 'SELECT name FROM people'
    connection.query(query, (err,rows) => {
        if(err) {
            console.log(err)
            throw err;            
        } 

        let response_hmtl = '<h1>Full Cycle</h1>'
        rows.forEach(row => {
            response_hmtl = response_hmtl.concat(`<h3>Nome: ${row.name}</h3>`)
        })

        res.send(response_hmtl)
    })

})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})