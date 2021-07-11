import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

const tec=express();

mongoose.Promise=global.Promise;
const dbURL = 'mongodb://localhost:27017';
mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
.then(mongoose=>console.log('Conectado en el servidor de la base de datos de mongodb en el puerto 27017'))
.catch(err=>console.log(err));

tec.set('port', process.env.PORT || 3030);
tec.use(cors());

tec.use(express.json())
tec.use(express.urlencoded({extended:true}))
tec.use(express.static(path.join(__dirname,'public')))

tec.use('/prueba',routes)

tec.listen(tec.get('port'), ()=>{
    console.log('Servidor se ejecuta en el puerto '+ tec.get('port'))
})