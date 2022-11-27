const jwt = require('jsonwebtoken');
const { secret } = require('../config/index')

function getJWTPayload(token) {
    return jwt.verify(token.split(' ')[1], secret);
}

function getToken(payload = {}) {
    return jwt.sign(payload, secret, { expiresIn: '4h' });
}

module.exports = {
    getJWTPayload,
    getToken
}