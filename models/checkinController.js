const express = require ('express');

const authMiddleware = require ('../middlewares/auth')

const Checkin = require('./checkinSchema')


const router = express.Router();

router.use(authMiddleware);

router.get ('/', async (req, res) => {
    try {

        const checkin = await Checkin.find({"aluno":req.alunoId}).populate('aluno');

        return res.send({ checkin });

    } catch (err) {
        return res.status(400).send({error: 'Erro consultar checkin'});
    }
});

router.get('/:checkinId', async (req, res) => {
    try {
        const checkin = await Checkin.findById(req.params.checkinId).populate('aluno');

        return res.send({ checkin });

    } catch (err) {
        return res.status(400).send({error: 'Erro consultar checkin'});
    }
});


router.post('/', async (req, res) => {
    
    try {
        const checkin = await Checkin.create({...req.body, aluno: req.alunoId} );

        return res.send ({ checkin });

    } catch (err) {
        return res.status(400).send({error: 'Erro realizar checkin'});
    }

});

module.exports = app => app.use('/checkin', router);