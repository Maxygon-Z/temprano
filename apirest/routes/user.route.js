import routerx from 'express-promise-router';

import userController from '../controller/user.controller';

const router=routerx();

router.post('/crearUser',userController.agregar);
router.get('/listarUsers',userController.consultar);
router.get('/listarUser/:id',userController.consultarUno);
router.delete('/eliminarUser/:id',userController.eliminar);
router.put('/actualizarUser/:id',userController.actualizar)

export default router;