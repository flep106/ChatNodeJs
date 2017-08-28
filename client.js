var net = require('net');
//se conecta na porta 3000
//caso queira passar o hostname
//net.connect({host:'127.0.0.1',port:'3000'});

var client = net.connect(3000);
/*
o evento data responsavel por detectar o recebimento de nvoas mesagens da conexao
data = recebe os dados da conexao com server
connect = faz algo com a conexao, nesse caso escreve uma mensagem. Poderia colocar direto client.write.
*/
client.on('data', function(messsage){
console.log(messsage.toString());
});

client.on('connect',function(){
    client.write('Mensagem do cliente');
})