import express, { request } from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

//array
let data = [
    {
        name: "Ana",
        department: "T.I"
    }
]

//-------------ROTAS------
// método get
router.get('/', (request, response) => {
    //no json temos a resposta que queremos obter
    //sempre retornamos algo (uma resposta)
    return response.status(200).json(data)

})

//método post
router.post('/create', (request, response) => {
    const newData = {
        //capturar o body da requisição e adicionar id
        ...request.body,
        id: uuidv4() 

    }

    data.push(newData)

    return response.status(201).json(data)
})

//método put
router.put('/edit/:id', (request, response) => {
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
router.delete('/delete/:id', (request, response) => {
    const { id } = request.params

    const deleteById = data.find(
        item => item.id === id
    )

    const index = data.indexOf(deleteById)

    //exclui so o item que está posicionado no index
    data.splice(index, 1)

    return response.status(200).json(data)
})

export default router