const Users = require('../models/users.models')

const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')


const findAllUsers = async () => {
    const data = await Users.findAll()
    return data
}

const findUsersbyId = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createUser = async (obj) => {
    const data = await Users.create({
        id: uuid.v4(),
        first_name: obj.first_name,
        last_name: obj.last_name,
        user_name: obj.user_name,
        email: obj.email,
        password: hashPassword(obj.password),
        age: obj.age,
        country: obj.country
    })
    return data
}

const findUserByEmail = async (email) => {

}

module.exports = {
    findAllUsers,
    findUsersbyId,
    createUser
}

