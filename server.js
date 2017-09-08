//solicita o modulo servidor
var net = require('net');
//array de conexoes do servidor
var conexoes = [];
//cria uma escuta na porta 3000
//na funcao vc passa os paramentros de conexao servidor cliente
net.createServer(function(connection){
conexoes.push(connection);
connection.write('Conectado ao Servidor!');
//recebe os dados, nesse caso uma mensagem do cliente
connection.on('data',function(message){
    broadcast(message, connection);
})

}).listen(3000);

/*funcao criada para enviar mensagem do cliente para o servidor,
depois transformar em modulo
*/
var broadcast = function(message,origem ){
conexoes.forEach(function(connection){
if(connection === origem) return;

connection.write(message);
})
}