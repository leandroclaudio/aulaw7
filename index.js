// import { createServer } from 'http'

// const server = createServer((request, response) => {
//     console.log('hello')
//     response.end()
// })
// server.listen(8080, () => console.log('server listening on port 8080'))

import express, { request } from 'express' //com express é mais fácil
import * as dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid'

dotenv.config()
const app = express() //a partir de agora eu chamo com app
app.use(express.json())

//array
let data = [
    {
        name: "Ana",
        department: "T.I"
    }
]

// método get
app.get('/', (request, response) => {
    //no json temos a resposta que queremos obter
    //sempre retornamos algo (uma resposta)
    return response.status(200).json(data)

})

//método post
app.post('/create', (request, response) => {
    const newData = {
        //capturar o body da requisição e adicionar id
        ...request.body,
        id: uuidv4() 

    }

    data.push(newData)

    return response.status(201).json(data)
})

//método put
app.put('/edit/:id', (request, response) => {
    //seta o id como um parâmetro
    const { id } = request.params

    //reconhecendo o item
    const update = data.find(
        item => item.id === id
    )

    const index = data.indexOf(update)

    //array[posição] = item
    //atualizando item existente
    data[index] = {
        ...update,
        ...request.body
    }

    return response.status(200).json(data[index])
})

//método delete
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params

    const deleteById = data.find(
        item => item.id === id
    )

    const index = data.indexOf(deleteById)

    //exclui so o item que está posicionado no index
    data.splice(index, 1)

    return response.status(200).json(data)
})

app.listen(Number(process.env.PORT), () => console.log('server on port 8080!'))



