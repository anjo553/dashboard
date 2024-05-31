<?php 
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "appbancabd";

    $conex = mysqli_connect($host, $user, $pass, $db);

    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
/*
    $codmineral =$_POST['codmineral'];
    $cantidadminerales =$_POST['cantidadmineral'];
    $fechaminerales =$_POST['fechamineral'];
    $codproyectominerales =$_POST['codproyectomineral'];
    $comentariominerales =$_POST['comentariomineral'];

    $idmaquina =$_POST['codmaquina'];
    $fehcainicio =$_POST['fechamaquinainicio'];
    $fechafin =$_POST['fechamaquinafin'];
    $codproyectomaquinaria =$_POST['codproyectomaquina'];
    $comentariomaquinaria =$_POST['comentariomaquina'];

    $idtransporte =$_POST['codtransporte'];
    $pesotransporte =$_POST['pesotransporte'];
    $fechafin =$_POST['fechatrasporte'];
    $codproyectotransporte =$_POST['codporyectotransporte'];
    $comentariotransporte =$_POST['comentariotrasporte'];
*/
/*
    if(!$conex){
        echo "no se ha podido conectar con el servidor" . mysql_error();
    }else{
        echo "<b><h3>hemos conectado con el seervidor</h3></b>" ;
    }
*/
    $ingresodatos = "INSERT INTO usuarios (nombre, correo, asunto, mensaje) VALUES ('$nombre','$correo','$asunto','$mensaje')";
        $resultado = mysqli_query($conex,$ingresodatos);
        if(!$resultado){
            echo "No se pudieron ingresar los datos a la base de datos </br>";
        }else{
            echo "Los datos se agregaron correctamente a la base de datos";
        }
/*
    if(isset($_POST['name'] && $_POST['email'] && $_POST['subject'] && $_POST['message']) ==true){
        $ingresodatos = "INSERT INTO formulario (nombre, email, tema, mensaje) VALUES ('$nombre','$correo','$asunto','$mensaje')";
        $resultado = mysqli_query($conex,$ingresodatos);
        if(!$resultado){
            echo "No se pudieron ingresar los datos a la base de datos </br>";
        }else{
            echo "Los datos se agregaron correctamente a la base de datos";
        }
    }

*/