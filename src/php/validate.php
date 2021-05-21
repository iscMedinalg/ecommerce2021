<?php 

session_start();

include("/xampp/htdocs/electronic/src/database/db.php");

    $gmail = $_GET['gmail'];
    $pass = $_GET['pass'];

    $consulta = mysqli_query ($conn, "SELECT * FROM users WHERE gmail = '$gmail' AND pass = '$pass'");  

    // esto válida si la consulta se ejecuto correctamente o no
    // pero en ningún caso válida si devolvió algún registro
    if(!$consulta){ 
    // echo "Usuario no existe " . $nombre . " " . $password. " o hubo un error " . 
    echo mysqli_error($mysqli);
    // si la consulta falla es bueno evitar que el código se siga ejecutando
    exit;
    } 

    // validemos pues si se obtuvieron resultados 
    // Obtenemos los resultados con mysqli_fetch_assoc
    // si no hay resultados devolverá NULL que al convertir a boleano para ser evaluado en el if será FALSE
    if($gmail = mysqli_fetch_assoc($consulta)) {
    // el usuario y la pwd son correctas
    header("Location:/electronic/src/html/index.html");
    } else {
    // Usuario incorrecto o no existe
    }
    
?>