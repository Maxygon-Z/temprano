import mongoose, {Schema} from "mongoose";

const User = new Schema({
    nombre: {type: String, maxLenght: 25, required: true},
    apellidos: {type: String, maxLenght: 40, required: true},
    //No me acepta carácteres de tipo char, desconozco la razón pero con tiempo lo investigaré
    correo: {type: String, required: true},
    matricula: String,


    createdAt:{
        type: Date, default: Date.now
    }
})

const user= mongoose.model('/user', User);

export default User;