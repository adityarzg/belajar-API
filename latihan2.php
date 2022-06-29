<?php
$data = file_get_contents('coba.json');
$user = json_decode($data, true);

echo $user[1]["keluarga"]["ayah"];
