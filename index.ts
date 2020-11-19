import express from 'express'
import { Application } from 'express'

const app : Application = express()

const r = express.Router()

r.post('/', function(req, res) {
})

const port = 8080

async function main() {
    await new Promise((resolve, _reject) => {
        app.listen(port, resolve)
    })
}


main()
