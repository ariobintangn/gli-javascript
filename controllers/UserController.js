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

    static async deleteUser(req, res, next){
        try{
            const user = await master_user.findByPk(+req.params.id)

            if(!user){
                throw("User Not Found!")
            }
            await master_user.destroy(
                {
                    where: {
                        id: req.params.id,
                    },
                },
                )

            res.status(200).json({message: `user with id: ${+req.params.id} has been deleted`})
        }catch(error){
            console.log("masuk error");
            console.log(error);
            next(error)
        }

    }
}

module.exports = UserController