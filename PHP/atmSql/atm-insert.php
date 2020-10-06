<?php
require_once('db-config.php');
$client_name = htmlspecialchars($_POST['name_client'] == '' ? "anonymous" : $_POST['name_client']);
$amount_withdraw = htmlspecialchars($_POST['amount_withdraw']);


function get_money($amount_withdraw, $client_name, $dbConnection)  //Функція, яка приймає дані від термінала банкомату(масив) і дані про зняття готівки від клієнта
{
    $messageTime = time();
    $tmp_amount_withdraw = $amount_withdraw;  // Захищаємо суму, яку хоче зняти клієнт. Оскільки в циклі вона буде змінена.
    $total_amount_in_atm = mysqli_fetch_assoc(
        mysqli_query(
            $dbConnection,
            'SELECT SUM(`nominal` * `amount`) AS totalSum FROM `cashbox_store`;')
    )['totalSum'];

    $balanceAfter = $total_amount_in_atm - $tmp_amount_withdraw;
    if ($balanceAfter < 0 || $total_amount_in_atm < $tmp_amount_withdraw || $tmp_amount_withdraw % 5) {
        $balanceAfter = $total_amount_in_atm;
    }
    $error_message = '';
    $query_db = "INSERT INTO `logs`(`name`, `datatime`, `withdrawal_amount`, `balanceBefore`, `balanceAfter`, `errorMessage`) 
                    VALUES('{$client_name}', '{$messageTime}', '{$tmp_amount_withdraw}', '{$total_amount_in_atm}', '{$balanceAfter}', ";

    if ($total_amount_in_atm < $amount_withdraw) {  // Перевірка помилок
        $error_message = "'недостатньо коштів');";
        $query_db = $query_db . $error_message;
        mysqli_query($dbConnection,
            $query_db);
        return '<span style="background: #ff0000; font-size: 30px;">недостатньо коштів</span>';
    } else if ($amount_withdraw == 0) {
        $error_message = "'Невірно вказана сума (нуль неможливо видати)');";
        $query_db = $query_db . $error_message;
        mysqli_query($dbConnection, $query_db);
        return '<span style="background: red; font-size: 30px;">Невірно вказана сума (нуль неможливо видати)</span>';
    } else if ($amount_withdraw % 5) {
        $error_message = "'Невірно вказана сума (не кратна 5, неможливо видати)');";
        $query_db = $query_db . $error_message;
        mysqli_query($dbConnection, $query_db);
        return '<span style="background: red; font-size: 30px;">Невірно вказана сума (не кратна 5, неможливо видати)</span>';
    } else {
        $tmp_atm_data = [];
        $query = mysqli_query($dbConnection, 'SELECT * FROM `cashbox_store` ORDER BY `nominal` DESC;');
        $available_withdraw_amount = 0;
        while ($result = mysqli_fetch_assoc($query)) {  // Перевірка циклами, які номінали є в банкоматі.
            $amount = 0;
            $nominal = $result['nominal'];
            while ($tmp_amount_withdraw) {
                if ($result['amount'] == 0) break;
                if ($tmp_amount_withdraw < $result['nominal']) break;
                $tmp_amount_withdraw -= $result['nominal'];
                $result['amount'] -= 1;
                $amount += 1;
                $tmp_atm_data[$nominal] = $amount;
            }
            $available_withdraw_amount += $amount * $nominal;  // Сума знятих грошей для перевірки, що в банкоматі вистачає кількості купюр для видачі.
        }

        if ($amount_withdraw == $available_withdraw_amount) { // Знімаємо кількість купюр, апгрейдем записи в БД і добавляємо до журналу історію запитів.
            $error_message = "'Помилок немає');";
            $query_db = $query_db . $error_message;
            mysqli_query($dbConnection, $query_db);
            foreach ($tmp_atm_data as $nominal => $amount) {
                mysqli_query($dbConnection, "UPDATE cashbox_store SET amount = amount - $amount WHERE nominal = $nominal;");
            }
        } else {
            $query_db = "INSERT INTO `logs`(`name`, `datatime`, `withdrawal_amount`, `balanceBefore`, `balanceAfter`, `errorMessage`) 
                    VALUES('{$client_name}', '{$messageTime}', '{$tmp_amount_withdraw}', '{$total_amount_in_atm}', '{$total_amount_in_atm}', 'Неможливо видати (недостатньо дрібних купюр)');";
            mysqli_query($dbConnection, $query_db);
            return '<span style="background: red; font-size: 30px;">Неможливо видати (недостатньо дрібних купюр)</span>';
        }

        return $tmp_atm_data;
    }

}

$result = get_money($amount_withdraw, $client_name, $dbConnection);
?>

<!doctype html>
<html>
<head>
    <link rel="stylesheet" href="./main.css">
</head>
<body>
<div class="body">
    <?php
    if (is_array($result)) {
        echo "<p > Ви зняли $amount_withdraw грн </p>";
        foreach ($result as $nominal => $amount) {

            echo '<div >' . $nominal . 'x' . $amount . '</div>';
        }

    } else {
        echo '<p>' . $result . '</p>';
    }

    ?>
</div>
<button class="btn_a"><a href="./index.php">ПЕРЕЙТИ ДО ФОРМИ ВІДПРАВЛЕННЯ</a></button>
</body>
</html>