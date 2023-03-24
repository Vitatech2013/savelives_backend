import { Router } from 'express'

import {
 
  login,
  hospitalAprovelist,
  hospitalUnAprovelist,
  updateAprove,
  urgentBlood,
  getUsers,
  showBloodReg,
  emergency
} from './controller'

const router = new Router()

router.get('/adminlogin', login)

router.get('/urgentBlood', urgentBlood)

router.get('/hospitalaprovelist', hospitalAprovelist)

router.get('/hospitalunaprovelist', hospitalUnAprovelist)

router.put('/updateAprove/:id', updateAprove)

router.get('/userList', getUsers)

router.get('/ViewBloodreq', showBloodReg)

router.get('/emergency', emergency)

export default router
