import path from "path";
import "babel-polyfill";

import Hapi  from "hapi";
import Inert from "inert";


const port = process.env.PORT || 4040;

async function StartServer() {

    const hapiServer = new Hapi.server({
        port: port,
    });


    await hapiServer.register(Inert);

    hapiServer.route({
        method : "GET",
        path   : "/static/{param*}",
        handler: {
            directory: {
                path   : "static",
                listing: true,
            },
        },
    });

    hapiServer.route({
        method : "GET",
        path   : "/{param*}",
        handler: {
            file: "/app/app.html",
        },
    });

    await hapiServer.start();

    console.log("Server running at:", hapiServer.info.uri);
}

StartServer().catch(error => console.log(error));
