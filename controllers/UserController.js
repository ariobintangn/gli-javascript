const { master_user } = require('../models')

class UserController {
    static async users(req, res, next){
        try {
            const users = await master_user.findAll({

            })

            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }

    static async createUser (req,res,next) {
        console.log("<<< MASUK CONTROLLER SERVER");
        try {
            const {name, jenis_kelamin, tanggal_lahir, alamat, email, roleId} = req.body
            const newUser = await master_user.create({
                name,
                jenis_kelamin,
                tanggal_lahir,
                alamat,
                email,
                roleId,
            },{})

            res.status(201).json({
                newUser
            })



        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = UserController