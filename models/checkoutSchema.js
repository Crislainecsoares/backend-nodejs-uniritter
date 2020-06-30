const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const moment = require ('moment')

const checkoutSchema = mongoose.Schema({
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aluno',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
   
});

const Checkout = mongoose.model('Checkout', checkoutSchema);



module.exports = Checkout;