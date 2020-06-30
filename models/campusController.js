const express = require ('express');
const Campus = require('./campusSchema');

const router = express.Router();

router.get('/campus' , async (req, res) => {
    try {
        const campus = await Campus.create(req.body);
        return res.send ({ campus });
    }   catch (err) {
            return res.status(400).send({error: 'Registro Falhou'});
        }

})

module.exports = app => app.use('/', router);