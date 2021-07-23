import routerx from 'express-promise-router';

import adminController from '../controller/admin.controller'

const router=routerx();

router.post('/crearAdmin',adminController.agregar);
router.get('/listarAdmins',adminController.consultar);
router.get('/listarAdmin/:id',adminController.consultarUno);
router.delete('/eliminarAdmin/:id',adminController.eliminar);
router.put('/actualizarAdmins/:id',adminController.actualizar)

export default router;
