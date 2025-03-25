const {request, response} = require('express');

const getUsers = (req = request, res = response) => {
    const {q, name = 'No Name', lastName = 'No lastName', age = 18} = req.query;
    res.json({
        msg: 'GET Api --> Controllers',
        q,
        name,
        lastName,
        age
    })
}

const getUserById = (req, res = response) => {
    res.json({
        msg: 'GET By ID Api --> Controllers'
    })
} 


const createUser = (req, res) => {
    const body = req.body;
    res.status(201).json({
        msg: 'POST Api --> Controllers',
        body
    })
  }

const updateUserComplete = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'PUT Api --> Controllers',
        id
    })
  }

const deleteUser = (req, res) => {
    res.json({
        msg: 'DELETE Api --> Controllers'
    })
  }

const updateUser = (req, res) => {
    res.json({
        msg: 'PATCH Api --> Controllers'
    })
}





module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserComplete,
    deleteUser,
    updateUser
}