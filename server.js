//solicita o modulo servidor
var net = require('net');
//cria uma escuta na porta 3000
//na funcao vc passa os paramentros de conexao servidor cliente
net.createServer(function(connection){
connection.write('Conectado ao Servidor!');

//recebe os dados, nesse caso uma mensagem do cliente
connection.on('data',function(message){
    console.log(message.toString());
})

}).listen(3000);