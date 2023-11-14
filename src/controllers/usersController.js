const { json } = require('express');
const fs= require('fs');
const path = require('path')

const usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    register(req,res){
        return res.render('users/register');
    },
    create(req,res){
        const newUser = {
            id: users[users.length - 1]?.id ? users[users.length - 1].id + 1 : 1, 
            ...req.body,
            confirm_password: undefined,
            avatar: req.file?.filename || "logo.png"
        }
        users.push(newUser);

        fs.writeFileSync(usersFilePath,JSON.stringify(users,null,2));
        res.redirect('/users/login');

    },
    login(req,res){
        return res.render('users/login');
    },
    delete(req,res){
        users = users.filter((user) => user.id != req.params.id);
        return res.redirect('/users');
    },
    admin(req,res){
        return res.render('users/admin');
    },
    list(req,res){
        res.render('users/users',{users});
    },
    detail(req,res){
        const user = users.find((user) => user.id == req.params.id);
        res.render('users/userDetail',{user}); 
    }
}
module.exports =controller;