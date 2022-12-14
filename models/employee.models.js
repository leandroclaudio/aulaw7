import {model, Schema} from "mongoose"

const employeeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
            lowercase: true
 
        },
        role: {
            type: String,
            enum: ["T.I", "Marketing", "People", "CEO", "Estagiário"]
        },
        age: {
            type: Number,            
        },
        active: {
            type: Boolean,
            default: true
        }, 
        adress: {
            city: {type: String}
        },
        
    },
    {
        timestamps: true,
    }
)
                        //tem que ser no singular ->na collection vai pro plaural
const EmployeeModel = model("Employee", employeeSchema)

export default EmployeeModel

