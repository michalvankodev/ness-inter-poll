import * as express from 'express'

const usersApp = express()
const router = express.Router()

router.get('/', async (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

usersApp.use('/', router)


export default usersApp;
