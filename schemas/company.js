var mongoose = require('mongoose')
var companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        default: "公司名"
    },
    code: {
        type: String,
        default: "编号"
    },
    phone: {
        type: Number,
        default: 139
    }

})

module.exports = companySchema