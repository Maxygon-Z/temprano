import routerx from 'express-promise-router';

import userRoute from './user.route';

const router=routerx()

router.use('/user',userRoute)

export default router;