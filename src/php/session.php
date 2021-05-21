<?php include( "/xampp/htdocs/electronic/src/database/db.php" ) ?>
<?php include( "/xampp/htdocs/electronic/src/php/validate.php") ?>


if(session_start()){
    <div>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Nombre de usuario
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="" id="close_session">Cerrar Sesión</a></li>
        </ul>
    </li>
    </div>
} else {
<div>
    <li class="nav-item">
        <a class="nav-link" href="/electronic/src/database/index.php">Login</a>
    </li>
    <li class="nav-item ">
        <a class="nav-link" href="/electronic/src/php/login.php" >Sign In</a>
    </li>
</div>
}