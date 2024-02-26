const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth')

const test = (req, res) => {
    res.json("test is working")
}


// Register Endpoint
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        // Check if name was entered
        if(!name) {
            return res.json({
            error: 'name is required'
            })
        };

        // Check password
        if (!password) {
            return res.json({
                error: 'password is required'
            })
        };

        // Check email
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password)
        // Create user in database
        const user = await User.create({
            name, 
            email,
            password: hashedPassword,
        })

        return res.json(user)
    }
    catch (error) {
        console.log('error')
    }
}

// Login Endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check if user exists
        const user = await User.findOne({email})
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        }

        // Check if password matches
        const match = await comparePassword(password, user.password)
        if (match) {
            return res.json('passwords match')
        } else {
            return res.json({error: 'passwords do not match'});
        }
    }
    catch (error) {
        console.log(error)

    }
} 



module.exports = {
    test,
    registerUser, 
    loginUser
}