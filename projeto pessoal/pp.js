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
            response.end("pagina principal")

        }


        else if(parts.path == "/rota1"){
            response.end("pagina rota1")
        }

        else if(parts.path == "/rota2"){
            response.end("pagina rota 2")
        }

        else if(parts.path == "/imagem/morango"){
            response.writeHead(200, {"Content-type":"image/jpeg"});
            readFile(response, "morango.jpg")
        }

        else{
            response.writeHead(404, {"Content-type":"text/plain"});
            response.end("Erro 404...");
        }




        
}


//cria e config do servidor
var server = http.createServer(callback);
server.listen(3000);
console.log("servidor iniciado em http://localhost:3000");