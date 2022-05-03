const mongoose = require('mongoose')
const { Schema } = mongoose

const schemaOptions = {
  collection: 'posts',
  versionKey: false,
}

const postSchema = new Schema({
  name: {
    type: String,
    required: [true, `'name' is required.`]
  },
  tags: {
    type: [String],
    default: undefined,
    validate: {
      validator: (v) => {
        if (Array.isArray(v) && v.length === 0) return false
        else if (v.some(text => text === '')) return false
        else return true
      },
      message: `Invalid tags format.`
    },
    required: [true, `'tags' is required`]
  },
  type: {
    type: String,
    enum: ['group', 'person']
  },
  image: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: [true, `'content' is required.`]
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  }
}, schemaOptions)

const Post = mongoose.model('posts', postSchema)

module.exports = Post
