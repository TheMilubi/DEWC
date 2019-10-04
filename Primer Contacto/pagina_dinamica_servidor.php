<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Página dinámica del lado del cliente</title>
</head>
<body>
    <p>Hola, hoy es
        <?php
            $dias = array("domingo","lunes","martes","miércoles","jueves","viernes","sábado");
            $dia = date("w");
            echo($dias[$dia]);
        ?>
    </p>
    
</body>
</html>