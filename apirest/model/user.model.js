import mongoose, {Schema} from "mongoose";

const User = new Schema({
    nombre: {type: String, maxLenght: 25, required: true},
    apellidos: {type: String, maxLenght: 40, required: true},
    correo: {type: String, required: true},
    matricula: {type: String, maxLenght:8, required: true},
    password: {trype: String, required: true},


    creado_en:{
        type: Date, default: Date.now
    }
})

const user= mongoose.model('/user', User);

export default user;

   
/*
Intento de implementación para agregar las carreras que los usuarios prefieran. 
   preferencias: {type:Boolean, 
        "Ing. Civil":false, 
        "Ing. Sistemas Computacionales": false,
        "Lic. Administración": 'false',
        "Ing. Bioquímica":false,
        "Ing. Industrial":'0',
        "Ing. Ambiental":0,
        "Ing. Electromecánica":'no',
        required: true},*/