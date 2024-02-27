const db = require('../../database/models/index');

const controller = {

    list: async (req, res) => {
        try {
            const data = await db.User.findAll({attributes:{exclude:['password']}});

            const users = data.map(user => ({...user.dataValues,detail: `/api/user/${user.id}`}))

            return res.send({ count: users.length, users });
        } catch (error) {

            return res.json(error);
        }
    },
    
    detail: async (req, res) => {
        try {
            const data = await db.User.findByPk(req.params.id,{
                attributes: {exclude: ['password']}
            });
            return res.send(data);
        } catch (error) {
            return res.json(error);
        }
    }
}

module.exports = controller;