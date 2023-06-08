const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String, 
    require: true,
  },
  isDone: {
    type: Boolean,
    default: false //預設狀態為 false
  },
  userId: {  // 加入關聯欄位
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})
module.exports = mongoose.model('Todo', todoSchema)