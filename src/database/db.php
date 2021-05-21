<?php
session_start();

/*
session_start();

$NombreDeLaConexion = mysqli_connect(
'DireccionDelHost',
'MainUser',
'Password',
'DataBaseName'
);
*/
$conn = mysqli_connect(
    'localhost',
    'root',
    '',
    'crud'
);

//     if(isset($conn)){
// //    echo 'DB is connected';
// } 

?>