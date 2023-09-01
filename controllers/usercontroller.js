// Bring prisma and cookie

const prisma = require('../prisma/index')
const cookieToken = require('../utils/cookieToken')


//user sign up

exports.signup = async(req, res, next) => {
    try {
        const {name, email, password} = req.body  
        //check
        if (!name || !email || !password) {
            throw new Error('please provide all feilds')
        } 

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })
      
        //send user
        cookieToken(user, res)
    } catch (error) {
        throw new Error(error)
    }
}