const jwt = require('jsonwebtoken');
const autoConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader)
    return res.status(401).send({ error: 'Token não informado'});

    const parts = authHeader.split(' ');

    if (!parts.length ===2 )
    return res.status(401).send({ error: 'Token error'});

    const [ scheme , token] = parts;

    if (!/^Bearer$/i.test(scheme))
    return res.status(401).send ({ error: 'Token mal formatado'});

    jwt.verify(token, autoConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token Invalido'});
    
    req.alunoId = decoded.id;
    return next();
    });
}