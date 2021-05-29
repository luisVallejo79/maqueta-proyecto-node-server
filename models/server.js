const express = require('express');
const cors = require('cors');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/users'

        //middlewares
        this.middlewares();


        //rutas de la aplicacion
        this.routes();
    }

    middlewares(){ 
        //directorio publico
        this.app.use(express.static('public'));
        //CORS
        this.app.use(cors())
        //Lectura y parseo del body
        this.app.use( express.json());
    }
    routes(){
        //utilizar middleware para llamar los paths
        this.app.use(this.usuariosPath, require('../routes/user'));
        
    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
          })
     };
}

module.exports = Server;