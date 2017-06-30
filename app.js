var http = require('http'),
	port = 8081;


//CRIANDO SERVIDOR
var server = http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write('Olá mundo');
	res.write('<br>');
	res.write('Adicionou a quebra de linha');
	res.end();

}).listen(port);

//LISTENTER PARA LIGAR O SERVIDOR
server.listen(port, function(){
	console.log('Servidor Iniciado na porta:' + port);
});

