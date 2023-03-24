import { Router } from 'express'

import {

  bloodBanklogin,
  hospitalRegistration,
  bloodAdd,
  donerList,
  searchDoner,
  bloodBankList,
  urgentBlood,
  donationRegistration,
  viewProfile,
  updateProfile,
  updatebloodUnits,
  deletebloodUnits,
  showBlood,
  searchBloodUnits,
  showBloodReg
} from './controller'

const router = new Router()

router.get('/searchDoner', searchDoner)

router.get('/searchBloodUnits', searchBloodUnits)

router.post('/registration', hospitalRegistration)

router.get('/bloodBanklogin', bloodBanklogin)

router.post('/bloodAdd', bloodAdd)

router.get('/donerList', donerList)

router.get('/bloodBankList', bloodBankList)

router.post('/donationRegistration', donationRegistration)

router.get('/viewProfile', viewProfile)

router.get('/showBlood', showBlood)

router.put('/updatebloodUnits/:id', updatebloodUnits)

router.delete('/deletebloodUnits/:id', deletebloodUnits)

router.get('/urgentBlood', urgentBlood)

router.put('/updateProfile/:id', updateProfile)

router.get('/ViewBloodreq', showBloodReg)

export default router
