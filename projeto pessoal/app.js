// carregar os modulos
const http = require('http');   
const url = require('url');   
const fs = require('fs');    

//funçao para ler um arquivov e enviar response para o http
function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    }

)};



//funçao callback para utilizar no server http
var callback = function (request, response){


        //faz o parse da url, separando o caminho, end-point
        var parts = url.parse(request.url);

        //verifica end-points
        if(parts.path == "/"){
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            readFile(response, "index.html");

        }
//

        else if(parts.path == "/gabriely"){
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            readFile(response, "gabriely.html")
        }

        else if (parts.path == "/gabriely/sobre") {
        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        readFile(response, "gabriely-sobre.html");
        }

        else if (parts.path == "/gabriely/curriculo") {
        response.writeHead(200, { "Content-Type": "application/pdf" });
        readFile(response, "curriculo-gabriely.pdf");
    }


//

        else if(parts.path == "/luciano"){
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            readFile(response, "luciano.html")
        }





//


        else if(parts.path == "/projeto"){
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            readFile(response, "projeto.html")
        }




        else{
            response.writeHead(404, {"Content-type":"text/plain"});
            response.end("Erro 404...");
        }

//

        


        
}


//cria e config do servidor
var server = http.createServer(callback);
server.listen(3000);
console.log("servidor iniciado em http://localhost:3000");