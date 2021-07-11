import model from '../model'

export default{
    agregar: async(req, res, next)=>{
        try{
            const {nombre, apellidos, correo, matricula}=req.body;

            const personas=new model.User({
                nombre,
                apellidos,
                correo,
                matricula
            });

            const registro =await personas.save();
            res.status(200).json(registro);
            console.log(req.body)
        } catch(e){
            res.status(500).send({
                message:"Ocurrió un error al guardar los datos"
            })
            next(e)         
        }
    },
    consultar: async(req,res,next)=>{
        try {
            const user=await model.User.find();
            console.log(user);
            res.json(user);
        } catch (error) {
            res.status(500).send({
                message: "Ocurrió un error al consultar"
            })
            next(error);
        }
    },
    consultarUno: async(req, res, next)=>{
        try {
            const consulta= await model.User.findById(req.params.id)
            if(!consulta){
                res.status(404).send({
                    message: "El registro con el id solicitado no existe"
                })
            } else{
                res.status(200).json(consulta)
            }
        } catch (error) {
            res.status(500).send({
                message: "El id no existe"
            }
            )
            next();
        }
    },
    eliminar: async(req, res, next)=>{
        try {
            const eliminarPersona=await model.User.findById(req.params.id)
            res.status(200).send({
                message: "La información ha sido eliminada correctamente"
            })
        } catch (error) {
            res.status(500).send({
                message: "El id para eliminar no existe"
            })
        }
    },
    actualizar: async(req, res, next)=>{
        try {
            const {nombre, apellidos, correo, matricula}=req.body
            
            const actualizarPersona={
                nombre,apellidos,correo, matricula
            }
            const datosactuales = await model.User.findByIdAndUpdate(req.params.id, actualizarPersona)
            res.json(datosactuales)
        } catch (error) {
            res.status(500).send({
                message: "Ocurrió un error al tratar de actualizar"
            })
        }
    }
}