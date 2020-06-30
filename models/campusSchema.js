const mongoose = require('mongoose');

const campusSchema = mongoose.Schema({
    campus: {
        type: String,
        require: true,
        unique: true
    },

})

campusSchema.index({  campus: 1 });

const Campus = mongoose.model('Campus', campusSchema );

module.exports = Campus;