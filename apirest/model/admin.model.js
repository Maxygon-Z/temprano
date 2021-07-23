import mongoose, {Schema} from 'mongoose'

const Admin = new Schema({
    nombre: {type: String, maxLenght: 40, required: true},
    apellidos: {type: String, maxLenght: 60, required: true},
    correo: {type: String, required: true},
    
    creado_en:{
        type: Date, default: Date.now
    }
}) 

const admin= mongoose.model('/admin', Admin);

export default admin;