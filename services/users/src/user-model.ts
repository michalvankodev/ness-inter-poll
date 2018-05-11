import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: { type: String, unique: true, lowercase: true },
  email: { type: String }, // TODO: create match regexp for validation
  password: String,
  groups: [String], // Group is determining which kind of permissions this user has
  createdDate: Date,
})

export default model('User', userSchema)
