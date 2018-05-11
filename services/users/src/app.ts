import * as express from 'express'
import * as bodyParser from 'body-parser'
import { connect } from 'mongoose'
import createUser from './create-user'
import login from './login'
import verifyUser from './verify-user'
import * as passport from 'passport'
import { BasicStrategy } from 'passport-http'
import { createBasicStrategySetup } from './passport-strategies/basic-strategy';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { JWTStrategyOptions, createJWTStrategySetup } from './passport-strategies/jwt-strategy';

connect('mongodb://localhost/myapp') // TODO I cant connect to mongo 
// Configure authentication strategies with `passport`.
passport.use(new BasicStrategy(createBasicStrategySetup()))
passport.use(new JwtStrategy(JWTStrategyOptions, createJWTStrategySetup()))

const usersApp = express()
usersApp.use(bodyParser.json())
usersApp.use(passport.initialize())

const router = express.Router()

router.get('/', async (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

router.post('/create', createUser)
router.post('/login', login)
router.get('/verify', verifyUser)

usersApp.use('/', router)


export default usersApp;
