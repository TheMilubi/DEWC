<?php 
    $conn = new PDO('mysql:host=localhost;dbname=provincias', "root", "ruben");
    $q = $conn->query('SELECT * FROM autonomias');
    echo json_encode($q->fetchAll(PDO::FETCH_ASSOC));
    
?>