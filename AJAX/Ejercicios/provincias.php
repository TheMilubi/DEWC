<?php 
    $autonomia = $_GET['autonomia'];
    if($autonomia!=-1){
        $conn = new PDO('mysql:host=localhost;dbname=provincias', "root", "ruben");
        $q = $conn->query("SELECT * FROM provincias WHERE autonomia = $autonomia");
        echo json_encode($q->fetchAll(PDO::FETCH_ASSOC));
    }
    
?>