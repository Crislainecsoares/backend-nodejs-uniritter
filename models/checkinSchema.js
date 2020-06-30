const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const moment = require('moment');


const checkinSchema = mongoose.Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },

});

// module.exports = mongoose.model('cadastro', cadastroSchema);
const Checkin = mongoose.model('Checkin', checkinSchema);


module.exports = Checkin;