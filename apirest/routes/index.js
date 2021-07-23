import routerx from 'express-promise-router';

import userRoute from './user.route';
import adminRoute from './admin.route';
import noticiaRoute from './noticia.route'

const router=routerx()

router.use('/user',userRoute)
router.use('/admin', adminRoute )
router.use('/notic', noticiaRoute)

export default router;