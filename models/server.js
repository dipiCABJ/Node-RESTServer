const express = require('express');
const cors = require('cors');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usersRoutes = '/api/users';
        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());
        //read and parser body
        this.app.use(express.json());
        //Public Directory
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usersRoutes, require('../routes/routes.users'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port: ${this.port}`)
        })
    }
}

module.exports = Server;