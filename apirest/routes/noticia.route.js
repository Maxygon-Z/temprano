import routerx from 'express-promise-router';

import noticiaController from '../controller/noticia.controller'

const router=routerx();

router.post('/crearNoticia',noticiaController.agregar);
router.get('/listarNoticias',noticiaController.consultar);
router.get('/listarNoticia/:id',noticiaController.consultarUno);
router.delete('/eliminarNoticia/:id',noticiaController.eliminar);
router.put('/actualizarNoticia/:id',noticiaController.actualizar)

export default router;