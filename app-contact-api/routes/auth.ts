import { Router } from 'express'
import { loginCtrl } from '../controller/login.controller'
import { registerCtrl } from '../controller/register.controller'

const router = Router()

router.post('/register', registerCtrl)
router.post('/login', loginCtrl)

export { router }
