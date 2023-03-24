import { Router } from 'express'


import admin from './admin'
import bloodBank from './bloodBank'
import bloodDoner from './bloodDoner'

const router = new Router()

router.use('/admin', admin)

router.use('/bloodBank', bloodBank)

router.use('/bloodDoner', bloodDoner)

export default router
