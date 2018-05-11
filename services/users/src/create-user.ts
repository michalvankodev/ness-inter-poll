import { } from 'express'
import { log } from 'winston'
import { hash } from 'bcrypt'
import UserModel from './user-model'

export default async function createUser(req, res) {
  const { username, password, groups } = req.body
  console.log(username, password)
  try {
    const hashedPassword = await hash(password, 10)
    const user = {
      username,
      hashedPassword,
      groups
    }
    const newUser = await UserModel.create(user)
    log('verbose', `Succesfully created new user ${username}`)
    res.status(201).json({
      message: 'Created user succesfully.',
      data: {
        user: user,
      }
    })
  }
  catch (e) {
    log('error', 'Failed to create new user. ' + e.toString())
    res.status(500).json({
      message: 'Failed to create new user',
      error: e,
    })
  }
}
