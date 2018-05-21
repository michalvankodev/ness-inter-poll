import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  username: { type: String, unique: true, lowercase: true },
  email: { type: String }, // TODO: create match regexp for validation
  hashedPassword: String,
  groups: [String], // Group is determining which kind of permissions this user has
  createdDate: {type: Date, default: Date.now}
})

export default model('User', userSchema)
