# Chat-socket.io Node Js Part

Hola A todos para poder correr este servidor debes descargar este repo y la segunda parte de este que esta aqui https://github.com/Ftsos/Chat-Socket.Io-Php-2

# Fotos

![hola](Live%20Try.PNG)
![hola](Archivo%20L.PNG)
![hola](Archivo%20R.PNG)
![hola](Archivo%20I.PNG)

# Requerimientos
-nodejs  
-php (puede ser como xampp o wampp o en binarios)

# live try
-https://chat-socketio-php.herokuapp.com/



# Instalar


Notaras que En los Archivos login.html y registro.html existe en sus resectivos fetch un texto que debes reemplazar por la direccion de tu servidor de php puede ser xammp o wampp yo ocupaba php nativo pero puedes ocupar el que gustes, pero para este ejemplo hare de caso que usas xampp pero se puede aplicar a todos los casos


## Paso 1


debes de subir los archivos del segundo repositorio hacia tu servidor en php o sea hacia la carpeta en donde tengas instalado xampp y la carpeta htdocs crea ahi una nueva carpeta y ponle el nombre que tu quieras despues accede al navegador desde ella.

## Paso 2


despues debemos de continuar encendiendo el servidor y despues tratando de acceder al navegador hacia nuestros dos archivos


## Paso 3

Una Vez Ya tenemos la parte Basica de Php Debemos descargar este repositorio y seleccionar la carpeta en lo que lo hayamos descargado extraerlo de esa carpeta descomprimirlo y navegar con la terminal a esa carpeta despues debemos correr "npm install"

## Paso 4

Despues volveremos a Php y Nos iremos hacia el archivo registro.php si se fijan en la variable $con tenemos almacenada una conexion hacia una base de datos deberemos de poner nuestros datos primero si estamos en xampp deberemos de poner por defecto en el primero "localhost:3306", "root", "", "" en el ultimo campo en nombre de nuestra base de datos, aqui la documentacion de php https://www.php.net/manual/en/function.mysqli-connect esto tambien haremos con nuestro archivo de login.php 

## Paso 5 

Deberemos de comunicar el archivo de login.html de este repositorio, solamente debemos de cambiar la linea 98 (el fetch) por nuestro live server en nuestro caso (si usamos xampp) http://localhost:80/aqui el nombre de su carpeta/login.php y lo mismo con el archivo de registro.html solo que en vez de terminar el login.php terminara en registro.php

## Paso 6 

Ahora Ya Solo Nos queda inicializar nuestro servidor de node navegando en la terminal hasta llegar a la carpeta del Repositorio y Encender Nuestros servidores de mysql (con xampp) y de apache(con xampp) solo debemos de dar click en start una vez todo esto ya lo hicimos podemos con nuestra terminal abrierta en la carpeta de nuestro proyecto escribimos "npm start" y buscamos en nuestro navegador el localhost:8080 y lo probamos (recuerda que para poder ocupar cualquier comando que requiera npm debemos de tener instalado nodejs)



## LO HICSTE

ya puedes chatear 

