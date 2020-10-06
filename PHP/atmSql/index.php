<?php
require_once('db-config.php');
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="main.css">
</head>
<body>
<img src="./bank.png" alt="img_atm" class="img_atm">
<?php
$show_amount = mysqli_query($dbConnection, 'SELECT SUM(nominal * amount) AS totalSum
            FROM cashbox_store;');
?>
<p class="current_amount">Поточний баланс грошей в банкоматі <?= (mysqli_fetch_assoc($show_amount))['totalSum']; ?> </p>
</div>
<div>
    <form action="atm-insert.php" method="post" class="">
        <div class="form-group">
            <input name="name_client" type="text" placeholder="Ваше ім'я" class="">
            <input name="amount_withdraw" type="number" placeholder="Яку суму знятти" required>
        </div>
        <input type="submit" class="form_btn" value="Зняти гроші">

    </form>
</div>
</body>
</html>