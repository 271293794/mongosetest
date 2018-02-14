var mongoose = require('mongoose')
var bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        default: "XXXXXX",
        // 建立唯一索引
        unique: true

    },
    name: {
        type: String,
        default: "书名",
        // 内置的一种 set 修饰器
        trim: true

    }

})

// 为 book 模型增加一个自定义的静态方法（根据书籍的 isbn 号查找某本书）
bookSchema.statics.findByISBN =function (isbn,cb) {

    this.findOne({ isbn: isbn }, (err, res) => {
        cb(err,res._doc)
    })
}
module.exports = bookSchema