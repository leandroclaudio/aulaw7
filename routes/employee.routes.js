import express, { request } from 'express'
import { v4 as uuidv4 } from 'uuid'
import EmployeeModel from '../models/employee.models.js'

const router = express.Router()

//array
// let data = [
//     {
//         name: "Ana",
//         department: "T.I"
//     }
// ]

//-------------ROTAS------
// método get
router.get('/', async (request, response) => {
    try {
        const employees = await EmployeeModel.find()

        return response.status(200).json(employees)  
    } catch (error) {
        console.log(error)
    }
  
    

})

//método post
router.post('/create', async (request, response) => {
    try {
        const newEmployee = await EmployeeModel.create(request.body)        

        return response.status(201).json(newEmployee)
    } catch (error) {
        console.log(error)

        return response.status(500).json({ msg: "Algo está errado"})
    }
    // const newData = {
    //     //capturar o body da requisição e adicionar id
    //     ...request.body,
    //     id: uuidv4() 
    }    
)

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