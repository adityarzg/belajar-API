<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

$response = $client->request('GET', 'http://www.omdbapi.com', [
    'query' => [
        'apikey' => '642790e6',
        's' => 'batman'
    ]
]);

$result = json_decode($response->getBody()->getContents(), true);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie</title>
</head>
<body>
    <?php foreach($result['Search'] as $v) : ?>
    <ul>
        <li>Title : <?= $v['Title']; ?></li>
        <li>Year : <?= $v['Year']; ?></li>
        <li>
            <img src="<?= $v['Poster']; ?>" width="80">
        </li>
    </ul>
    <?php endforeach; ?>
</body>
</html>
