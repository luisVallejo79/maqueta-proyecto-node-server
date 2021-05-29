const { response } = require('express');


const usersGet = (req, res = response) => {
    res.json({
        msg: 'Respondiendo GET desde el controlador'
    });
}

const usersPost = (req, res = response) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'Respondiendo POST desde el controlador',
        nombre,
        edad
        
    });
}

const usersPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Respondiendo PUT desde el controlador',
        id
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'Respondiendo DELETE desde el controlador'
    });
}


module.exports={
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}