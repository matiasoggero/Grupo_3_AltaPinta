
const { getRedirectRouteByRole } = require("../utils/users")
const bcrypt = require('bcryptjs');
const oneMonth = 1000 * 60 * 60 * 24 * 30;

const db = require("../database/models/index.js");



const controller = {
    register: (req, res) => {
        return res.render('users/register')
    },

    create: async (req, res) => {
        try {
            await db.User.create({

                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                confirm_password: undefined,
                avatar: req.file?.filename || "logo.png",
                roles_id: 2
            })
            return res.redirect('/users/login');

        } catch (error) {
            return res.json(error);
        }

    },
    login: async (req, res) => {
        // verificar cookie rememberme
        const userEmailFromCookie = req.cookies.recordarme;

        if (userEmailFromCookie) {
            try {
                const userToLogin = await db.User.findOne({
                    where: req.body.email
                });

                if (userToLogin) {
                    const { password, ...nonSensibleUserData } = userToLogin;
                    req.session.user = nonSensibleUserData;
                    return res.redirect('/users/profile');
                }

            } catch (error) {
                return res.json(error);
            }

        }

        return res.render('users/login');
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("recordarme");
        return res.redirect('/');
    },
    loginProcess: async (req, res) => {
        // TODO: validar campos que vienen del form
        try {
            const userToLogin = await db.User.findOne({
                where: { email: req.body.email }
            });
            const rememberMe = Boolean(req.body.recordarme);

            if (userToLogin) {
                const okPassword = bcrypt.compareSync(req.body.password, userToLogin.password);

                if (okPassword) {
                    const { password, ...nonSensibleUserData } = userToLogin;
                    req.session.user = nonSensibleUserData;

                    // si puso rememberMe, guardar la cookie para la próxima vez que ingrese.
                    if (rememberMe) {
                        res.cookie("recordarme", userToLogin.email, {
                            maxAge: oneMonth,
                            secure: true,
                            httpOnly: true,
                        });
                    }

                    const redirectRoute = getRedirectRouteByRole(userToLogin.roles_id);
                    return res.redirect(redirectRoute);
                }

        

            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: "El email y/o la contraseña son incorrectos"
                    }
                }
            });
        } catch (error) {
            console.log(error)
            return res.json(error);
        }
    },
    profile: async (req, res) => {
        res.render('users/profile');
    },
    delete: async (req, res) => {
        try {
            await db.User.destroy({
                where: req.params.id
            });
            return res.redirect('/users');

        } catch (error) {
            res.json(error)
        }

    },
    admin: (req, res) => {
        return res.render('users/admin');
    },
    list: async (req, res) => {
        try {
            const users = await db.User.findAll();
            return res.render('users/users', { users });
        } catch (error) {
            return res.json(error);
        }
    },
    detail: async (req, res) => {
        try {
            const user = db.User.findByPK(req.params.id);
            return res.render('users/userDetail', { user });
        } catch (error) {

        }

    },
    edit: async (req, res) => {
        try {
            const edit = db.User.findByPK(req.params.id);
            return res.render('users/edit', { user: edit });
        } catch (error) {
            return res.json(error);
        }

    },
    update: async (req, res) => {
        try {
            await db.User.update(req.body, {
                where: req.params.id
            });

            return res.redirect('/users');
        } catch (error) {
            return res.json(error);
        }
    }

}
module.exports = controller;