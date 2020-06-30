const express = require ('express');
const Aluno = require('./cadastroSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const autoConfig = require('../config/auth.json')

const router = express.Router();

function generateToken (params = {}) {
    return jwt.sign(params, autoConfig.secret, {
        expiresIn: 14400,
    });
}


router.post('/cadastro' , async (req, res) => {
    const { matricula } = req.body; 

    try {
        if (await Aluno.findOne( {matricula}))
        return res.status(400).send( {error: "Usuário já existe verifique matricula e senha"});

        const aluno = await Aluno.create(req.body);

        aluno.password = undefined;

        return res.send({ 
            aluno,
            token: generateToken ({ id: aluno.id }),
        });
    }   catch (err) {
            return res.status(400).send({error: 'Registro Falhou'});
        }

});

router.post('/login', async (req, res) => {
    const { matricula, password } = req.body;

    const aluno = await Aluno.findOne({ matricula }).select('+password');

    if (!aluno)
    return res.status(400).send({error: 'Usuario nao encontrado'});

    if (!await bcrypt.compare(password, aluno.password))
    return res.status(400).send({ error: "Senha inválida" });

    aluno.password = undefined;

    res.send({ 
        aluno, 
        token: generateToken ({ id: aluno.id }),
    });
        
});

module.exports = app => app.use('/', router);