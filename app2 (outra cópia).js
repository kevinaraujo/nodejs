var http = require('http'),
	fs = require('fs'),
	port = 8081;


var server = http.createServer(function(req,res){
	res.writeHead(200,{'content-type' : 'text/html;charset=utf-8'});
	
	//CONSTANTE = __dirname
	fs.readFile(__dirname + '/index.html',function(err, html){
		if(err){
			res.write('index.html não encontrado');
		}else{
			res.write(html);
		}

		res.end();
	});

}).listen(port);


server.listen(port,function(){
	console.log('servidor rodando');
});