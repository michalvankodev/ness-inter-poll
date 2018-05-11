import { ExtractJwt } from 'passport-jwt'
import * as winston from 'winston'
import UserModel from '../user-model';

export const JWTStrategyOptions = {
  secretOrKey: 'TODO ALE ZE VELMI VELKE TODO',
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  issuer: 'ness-inter-poll'
}

export function createJWTStrategySetup() {
  return async function JWTStrategySetup(jwt_payload, done) {
    const { data } = jwt_payload
    winston.log('verbose', `Authethicating through JWT - UserID: ${data.id}`)
    try {
      const user = await UserModel.find(data.id)
      if (user === null) { return done(null, false, { message: 'Not Found.'}); }
      return done(null, user);
    } catch (err) {
      done(err)
    }
  }
}
