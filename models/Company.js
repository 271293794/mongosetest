var mongoose = require('mongoose'),
    companySchema = require('../schemas/company')
    /**
     * 这里的 Compan 决定集合在数据库的名称（其复数），不计大小写
     * 
     */
module.exports = mongoose.model('Compan', companySchema)
