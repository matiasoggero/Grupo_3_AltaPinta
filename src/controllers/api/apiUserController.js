const db = require('../../database/models/index');

const controller = {

    list: async (req, res) => {
        try {
            const data = await db.User.findAll();
            
            const users = []
            data.forEach(user => {
                users.push({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    detail: `http://localhost:3040/api/user/${user.id}`
                })
            });

            return res.send({ count: users.length, users });
        } catch (error) {
            return res.json(error);
        }
    },
    
    detail: async (req, res) => {
        try {
            const data = await db.User.findByPK(req.params.id,{
                attributes: {exclude: ['password']}
            });
            return res.send(data);
        } catch (error) {
            return res.json(error);
        }
    }
}

module.exports = controller;