//rutas relacionadas a los usuarios


//desestructar express para sacar la funcion Router
const { Router } = require('express');
const { usersGet, 
        usersPost, 
        usersPut, 
        usersDelete} = require('../controllers/user.controller');

const router = Router();

router.get('/', usersGet );

router.post('/', usersPost );

router.put('/:id', usersPut );

router.delete('/', usersDelete );


module.exports = router;