const mongoose = require('mongoose')
const { Schema } = mongoose

const schemaOptions = {
  collection: 'users',
  versionKey: false,
}

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, `name is required.`],
  },
  email: {
    type: String,
    required: [true, `Email is required.`],
    unique: true, // email must be unique.
    select: false, // Do not show the important user info.
    lowercase: false,
  },
  avatar: {
    type: String,
    default: '',
  }
}, schemaOptions)

const User = mongoose.model('users', userSchema)

module.exports = User