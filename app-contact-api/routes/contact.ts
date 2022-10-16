import { Router } from 'express'
import { contactDeleteController } from '../controller/contactDelete.controller'
import { contactGetController } from '../controller/contactGet.controller'
import { contactPostController } from '../controller/contactPost.controller'
import { contactPutController } from '../controller/contactPut.controller'
import { session } from '../middlewares/session.middleware'

const router = Router()

router.get('/', session, contactGetController)
router.post('/', session, contactPostController)
router.put('/:id', session, contactPutController)
router.delete('/:id', session, contactDeleteController)

export { router }
