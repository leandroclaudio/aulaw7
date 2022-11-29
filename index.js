// import { createServer } from 'http'

// const server = createServer((request, response) => {
//     console.log('hello')
//     response.end()
// })
// server.listen(8080, () => console.log('server listening on port 8080'))

import express, { request } from 'express' //com express é mais fácil
import * as dotenv from 'dotenv'
import employeeRouter from './routes/employee.routes.js'

dotenv.config()
const app = express() //a partir de agora eu chamo com app
app.use(express.json())

app.use('/employee', employeeRouter)
// http://localhost:8080/employee/
// http://localhost:8080/employee/create
// http://localhost:8080/employee/edit/:id

// app.use('/to-do', todoRouter)

// http://localhost:8080/to-do/
// http://localhost:8080/to-do/create
// http://localhost:8080/to-do/edit/:id


app.listen(Number(process.env.PORT), () => console.log('server on port 8080!'))



