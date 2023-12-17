const { json } = require('express');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

//const User = require("../model/User");
const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    register(req,res){
        const errors = validationResult(req)
        if(errors.isEmpty()){
        }
        else{
        res.render('users/register',{errors:errors.mapped(),old:req.body});
      }
    },
    create(req, res) {
        const newUser = {
            id: users[users.length - 1]?.id ? users[users.length - 1].id + 1 : 1,
            rol: "user",
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            confirm_password: undefined,
            avatar: req.file?.filename || "logo.png"
        }
        users.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect('/users/login');

    },
    login(req, res) {
        return res.render('users/login');
    },
    loginProcess(req, res) {

        const userToLogin = users.find((user) => user.email == req.body.email);

        if (userToLogin) {
            let okPassword = bcrypt.compareSync(req.body.password, userToLogin.password);
            if (okPassword) {
                return res.render('users/profile', {user: userToLogin});
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: "El email y/o la contraseña son incorrectos"
                    }
                }

            });

        }
    
    },
    profile(req, res) {
        
       return res.render('/users/profile');
    },
    delete(req, res) {
        users = users.filter((user) => user.id != req.params.id);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        return res.redirect('/users');
    },
    admin(req, res) {
        return res.render('users/admin');
    },
    list(req, res) {
        res.render('users/users', { users });
    },
    detail(req, res) {
        const user = users.find((user) => user.id == req.params.id);
        res.render('users/userDetail', { user });
    },
    edit(req, res) {
        const edit = users.find((user) => user.id == req.params.id);
        res.render('users/edit', { user: edit });
    },
    update(req, res) {
        const user = users.find((user) => user.id == req.params.id);
        users[user] = {
            ...users[user],
            ...req.body
        }
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.redirect('/users');
    }

}
module.exports = controller;