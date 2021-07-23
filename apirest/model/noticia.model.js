import mongoose, { Schema } from "mongoose";

const Noticia =new Schema({
    titulo: {type: String, maxLenght: 100, required: true},
    descripcion: {type: String, maxLenght:500, requred: true},
    fecha: {type: Date, required: true},

    creado_en:{
        type: Date, default: Date.now
    }
})

const noticia = mongoose.model('/noticia', Noticia);

export default noticia;