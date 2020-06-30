const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const cadastroSchema = mongoose.Schema({
    matricula: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    nome: {
        type: String,
        require: true,
    },

})

cadastroSchema.index({ nome: 1, matricula: 1, password: 1 });

cadastroSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

// module.exports = mongoose.model('cadastro', cadastroSchema);
const Aluno = mongoose.model('Aluno', cadastroSchema);


module.exports = Aluno;