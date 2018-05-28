import { BasicStrategy } from 'passport-http'
import { compare } from 'bcrypt'
import UserModel from '../user-model'

/**
 * @see https://github.com/jaredhanson/passport-http
 */
export function createBasicStrategySetup() {
  return async function BasicStrategySetup(username, password, cb) {
    try {
      const user = await UserModel.find({ username })
      const match = await compare(password, user.hashedPassword)
      if (!match) { 
        return cb(null, false, { message: 'Incorrect password.'});
      }
      return cb(null, user);
    } catch (e) {
      return cb(null, false, { message: 'Not Found.'});
    }
  }
}
