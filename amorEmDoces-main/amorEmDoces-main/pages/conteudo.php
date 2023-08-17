<?php
$pagina = isset($_GET['acessando']) ? $_GET['acessando'] : '';
//echo $pagina;
if ($pagina == '') {
    include('home.php');
} else {
    include($pagina . '.php');
}
