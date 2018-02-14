var url = 'mongodb://username:password@ip:port/databasename', //完整的连接字符串
    url = 'mongodb://localhost:27017/part10',  // 简写
    mongoose = require('mongoose')    // 连接要用到的
var Company = require('./models/Company')
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
var kmsj = new Company({
    companyName: '酷码视觉',
    code: 'kmsj',
    phone: 13800000001
})
kmsj.save()
