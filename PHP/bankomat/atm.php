<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="main.css">
</head>
<body>
<div>
    <form action="index.php" method="POST" class="form_action">
        <img src="./bank.png" alt="" class="img_action">
        <input type="number" name="name_bank" placeholder="Enter your sum" class="form_type">
        <div class="form_button"><input type="submit"></div>
    </form>
</div>

<?php
function get_total_amount($array)
{
    $accumulation = 0;

    foreach ($array as $value) {

        $initial = $value['amount'] * $value['nominal'];
        $accumulation += $initial;
    }
    return $accumulation;
}

try {
    $dataStr = file_get_contents('new_data.json');
    $dataArray = json_decode($dataStr, true);
} catch(Exception $ex) {
    $dataArray = [];
}

foreach ($dataArray as $value) {
    if($value['message']) {
        echo '<p style="color: red; font-size: 22px; background: lightgrey">' . $value['message'] . '</p>';
        return;
    }
    if (!$value['amount']) continue;
    echo '<span style="border: 1px solid black; font-size: 22px">' . $value['amount'] . 'x' . $value['nominal'] . ' ' . '</span>';
}
echo '<div style="background: indianred; font-size: 22px">' . 'ви зняли ' . get_total_amount($dataArray) . '</div>';

?>
</body>
</html>