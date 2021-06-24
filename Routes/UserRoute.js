const express = require("express")
const userController = require("../Controller/UserController")
const Route = express.Router()

Route
    .route('/')
    .get(userController.getAllUser)
    .post(userController.createUser)


Route
    .route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)
module.exports = Route;