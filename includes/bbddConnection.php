<?php /* Created on: 16/09/2012 */ 

$servidor = "localhost"; //el servidor que utilizaremos, en este caso será el localhost
$usuario = "julyfuenl4"; //El usuario que acabamos de crear en la base de datos
$contrasenha = "u677587304_iuven"; //La contraseña del usuario que utilizaremos
$BD = "u677587304_iuven"; //El nombre de la base de datos

$conexion = @mysql_connect($servidor, $usuario, $contrasenha);

if (!$conexion) {
    die('<strong>No pudo conectarse:</strong> ' . mysql_error());
}else{
//La siguiente linea no es necesaria, simplemente la pondremos ahora para poder observar que la conexión ha sido realizada
    //echo 'Conectado  satisfactoriamente al servidor <br />';
}

/*
  		//if (!($mysqli = mysqli_connect("http://mysql.hostinger.es","u677587304_iuven","julyfuenl4", "u677587304_iuven"))) {
        if (!($mysqli = mysqli_connect($servidor, $usuario, $contrasenha))) {
         	echo "Error conectando a la base de datos.";
         	exit();
        }
  
      $sql = "SELECT * FROM gallery ORDER BY title_text";
  		$resultado=mysqli_query( $mysqli, $sql );
    	
		while($dato = mysqli_fetch_assoc($resultado)){
				
				printf("hola");		
		}
  
  		$resultado->free();
      $mysqli->close();
*/
      mysql_select_db($BD, $conexion) or die(mysql_error($conexion));
?>