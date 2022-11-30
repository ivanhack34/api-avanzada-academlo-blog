const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    //? PlainPassword = contraseña en texto plano
    return bcrypt.hashSync(plainPassword, 10)
}

console.log(hashPassword('root'));

const comparePassword = (plainPassword, hashPassword) => {
    return bcrypt.compareSync(plainPassword, hashPassword)
}

// console.log(comparePassword('root', '$2b$10$wW1KGf/Gad5zNNZ/2niXZOijNiJGnlKSKwEBlXT4WzunltHGDBMN.'))

module.exports = {
    hashPassword,
    comparePassword
}