var url = 'mongodb://username:password@ip:port/databasename', //完整的连接字符串
    url = 'mongodb://localhost:27017/part10',  // 简写
    mongoose = require('mongoose')    // 连接要用到的
var Company = require('./models/Company')
var Book = require('./models/Book')
mongoose.connect(url, (err) => {
    if (err) {
        console.log('发生多错误')
    } else {
        console.log('连接成功')
    }
})

Company.find((err, res) => {
    if (err) {
        console.log('发生错误')
    } else {
        console.log(res)

    }
})
// var kmsj = new Company({
//     companyName: '酷码视觉',
//     code: 'kmsj',
//     phone: 13800000001
// })
// kmsj.save()

/**
 * 
 * 一个或条件的写法，公司名是 "信新" 或 "酷码视觉" 的
 */
var cond = {
    $or: [
        { companyName: "酷码视觉" },
        { companyName: "信新" }
    ]
}
Company.find(cond,(err,res)=>{
    if (err) {
        console.log('发生错误')
    } else {
        console.log(res)
    }
})

Book.findByISBN('1002',(err,res)=>{
    console.log(res)
})