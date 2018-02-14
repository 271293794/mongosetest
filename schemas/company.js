var mongoose = require('mongoose')
var companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        default: "公司名",

    },
    code: {
        type: String,
        default: "编号",
        // 内置的一种 set 修饰器
        trim: true,
        // 自定义的 get 修饰器
        get: (name) => {
            if (name.indexOf('成都') !== 0)
                return '成都' + name
        }
    },
    phone: {
        type: Number,
        default: 139
    }

})

module.exports = companySchema