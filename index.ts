import express from 'express'
import { Application } from 'express'
import https from 'https'
import fs from 'fs'
import morgan from 'morgan'

const key  = fs.readFileSync('./privkey.pem', 'utf8'),
    cert = fs.readFileSync('./pubkey.pem', 'utf8')

const app : Application = express()
app.use(morgan('combined'))

const r = express.Router()

r.post('/', function(req, res) {
    res.status(403).end()
})

app.use(r)

const port = Number(process.argv[process.argv.length - 1])

async function main() {
    await new Promise((resolve, _reject) => {
        https.createServer({key, cert}, app).listen(port, resolve)
    })
}


main()
