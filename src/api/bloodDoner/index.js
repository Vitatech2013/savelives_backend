import { Router } from 'express'

import {
 
  userRegistration,
  donerLogin,
  requestBlood,
  bloodBankList,
  searchDoner,
  viewProfile,
  donorList,
  urgentBlood,
  updateProfile,
  showBloodReg
  

} from './controller'

const router = new Router()

router.post('/registration', userRegistration)

router.get('/donerLogin', donerLogin)

router.get('/urgentBlood', urgentBlood)

router.get('/donorList', donorList)

router.get('/bloodBankList', bloodBankList)

router.get('/searchDoner', searchDoner)

router.get('/viewProfile', viewProfile)

router.put('/updateProfile/:id', updateProfile)

router.post('/requestBlood', requestBlood)

router.get('/ViewBloodreq', showBloodReg)

export default router
