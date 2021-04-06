const bcrypt = require('bcrypt');
const User = require('../models/user.js');
const auth = require('../utils/auth.js')

const SALT_ROUNDS = 10;

async function createUser(fields) {
    const foundUser = await getUser(fields.name);
    if (foundUser) {
        return "DUPLICATE_USERNSAME";
    }
    await new User({
        ...fields,
        password: await bcrypt.hash(fields.password, SALT_ROUNDS),
    }).save();
    return auth.sign(fields.name);
    }


async function loginUser(name, password) {
    foundUser = await User.findOne({ name }).exec();
    if (!foundUser) {
        console.log(`Sorry, Could not find user with name ${name}`);
        return null;
    }

    const isAuthenticated = await bcrypt.compare(password, foundUser.password);
    if (!isAuthenticated) {
        return null;
    }

    return auth.sign(name);
}
function getUser(name) {
    return User.findOne({ name }).exec();
}

module.exports = {
    createUser,
    loginUser,
    getUser,
}