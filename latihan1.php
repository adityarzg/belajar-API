<?php
// $user = [
//     [
//         "nama" => "Rizki",
//         "umur" => 20,
//         "pekerjaan" => "Mahasiswa"
//     ],
//     [
//         "nama" => "Rizka",
//         "umur" => 21,
//         "pekerjaan" => "Mahasiswa"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=mahasiswa', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$user = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($user);
echo $data;
