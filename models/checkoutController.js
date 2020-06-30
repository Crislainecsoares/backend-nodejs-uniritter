const express = require ('express');

const authMiddleware = require ('../middlewares/auth')

const Checkout = require('./checkoutSchema')


const router = express.Router();

router.use(authMiddleware);

router.get ('/', async (req, res) => {
    try {
        const checkout = await Checkout.find({"aluno":req.alunoId}).populate('aluno');

        return res.send({ checkout });

    } catch (err) {
        return res.status(400).send({error: 'Erro consultar checkout'});
    }
});

router.get('/:checkoutId', async (req, res) => {
    try {
        const checkout = await Checkout.findById(req.params.checkoutId).populate('aluno');

        return res.send({ checkout });

    } catch (err) {
        return res.status(400).send({error: 'Erro consultar checkout'});
    }
});

router.post('/', async (req, res) => {
    
    try {
        const checkout = await Checkout.create({...req.body, aluno: req.alunoId} );

        return res.send ({ checkout });

    } catch (err) {
        return res.status(400).send({error: 'Erro realizar checkout'});
    }

});

module.exports = app => app.use('/checkout', router);