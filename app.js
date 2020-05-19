var express = require('express');
var http = require('http');
var body_parser = require('body-parser');
var app = express();
var servidor = http.createServer(app);
app.use(body_parser.urlencoded({extended:true}));
var puerto = process.env.PORT || 8080;
servidor.listen(puerto);

var io = require('socket.io').listen(servidor);
recibirymandar("mensaje", "msg");

var sockete;
var nombre;
function recibirymandar(nomderecibir, nomdemandar) {
	io.on('connection', function(socket) {
		 sockete = socket.id; 
		 io.to(sockete).emit("nombre", nombre);
	socket.on(nomderecibir, function(data){
		console.log(data);
		io.sockets.emit(nomdemandar, data)
	});


	console.log("un nuevo cliente se ha conectado");
});

}


app.get('/', (req, res) => {
res.sendFile(__dirname + "/archivop.html");
});


app.get('/registro', (req, res) => {
res.sendFile(__dirname + "/registro.html");
});

app.get('/login', (req, res) => {
res.sendFile(__dirname + "/login.html");
});

console.log("Servidor Escuchando En El Puerto: " + puerto + " para poder acceder entre al localhost:" + puerto);

app.post('/post', (req, res) => {
	console.log(req.body.rspphp);
	if (req.body.rspphp === "incorrCYC" || req.body.rspphp.includes('Error: No se pudo conectar a MySQL') || req.body.rspphp.includes('Error Por Favor Indica el codigo y contatctate con nosotros') || req.body.rspphp.includes("Error Pusiste Comillas En Tu Oracion") || req.body.rspphp === "") {
		res.send('<div style="text-align: center;">Contrasena O Usuarios No Registrados o Incorrectos O Posible Error a La Conexion a la Base De Datos, Asegurate de No Haber Puesto Comillas en tu Oracion y que no esta vacia <br><br><a href="/">Inicio</a></div>');
	}else{
		console.log(req.body.rspphp);
	res.sendFile(__dirname + "/index.html");
	nombre = req.body.rspphp
	}
});