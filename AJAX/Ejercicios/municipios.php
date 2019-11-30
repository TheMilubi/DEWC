<?php 
    $provincia = $_GET['provincia'];
    if($provincia != -1){
        $conn = new PDO('mysql:host=localhost;dbname=provincias', "root", "ruben");
        $q = $conn->query("SELECT * FROM municipios WHERE provincia = $provincia");
        echo json_encode($q->fetchAll(PDO::FETCH_ASSOC));
    }
?>