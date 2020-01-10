import { Router } from 'express'

const router = Router()
import upload from '../multer'

router.post('/user', upload(1, 'users'), (req, res) => {
  res.json({
    message: 'success'
  })
})

module.exports = router