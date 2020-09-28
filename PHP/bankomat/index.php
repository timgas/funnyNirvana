<?php
$date_html = htmlspecialchars($_POST['name_bank']);

try {
    $data_str = file_get_contents('data.json');
    $data_bank = json_decode($data_str, true);
} catch (Exception $e) {
    $data_bank = [];
}

function get_total_amount($array) // функція  для підрахунку суми
{
    $accumulation = 0;
    foreach ($array as $value) {
        $initial = $value['amount'] * $value['nominal'];
        $accumulation += $initial;
    }
    return $accumulation;
}

;

function get_money($actual_atm_data, $client_amount)  //Функція, яка приймає дані від термінала банкомату(масив) і дані про зняття готівки від клієнта
{
    $tmp_client_amount = $client_amount; //Захищаємо змінну $client_amount для перевірки(яка перезапишеться в foreach)
    $debit_atm_data = []; //Масив в який записуємо нові дані для відображення, які саме ми купюри зняли і кількість номіналу цих купюр.
    $tmp_atm_data = $actual_atm_data;
    $new_data_atm = [];


    if (get_total_amount($actual_atm_data) < $client_amount) {
        $new_data_atm[] = ['message' => 'Недостатньо коштів'];
        return ['new_data_atm' => $new_data_atm, 'actual_atm_data' => $actual_atm_data];
    } else if ($client_amount == 0) {
        $new_data_atm[] = ['message' => 'Невірно вказана сума (нуль неможливо видати)'];
        return ['new_data_atm' => $new_data_atm, 'actual_atm_data' => $actual_atm_data];
    } else if ($client_amount % 5) {
        $new_data_atm[] = ['message' => 'Невірно вказана сума (не кратна 5, неможливо видати)'];
        return ['new_data_atm' => $new_data_atm, 'actual_atm_data' => $actual_atm_data];
    } else {
        foreach ($tmp_atm_data as &$value) {
            $count = 0;   // для підрухунку скільки разів знімалась певна кількість номіналу.
            for ($i = 1; $i < count($actual_atm_data); $i++) {
                if ($value['amount'] == 0) break;
                if ($client_amount < $value['nominal']) break;
                $value['amount'] -= 1;
                $client_amount -= $value['nominal'];
                $count++;
            }

            $debit_atm_data[] = array('amount' => $count, 'nominal' => $value['nominal']);

        }

        if ($tmp_client_amount == get_total_amount($debit_atm_data)) {
            $new_data_atm = $debit_atm_data;
            $actual_atm_data = $tmp_atm_data;
        } else {
            $new_data_atm[] = ['message' => 'Неможливо видати (недостатньо дрібних купюр)'];
        }
    }

    return ['new_data_atm' => $new_data_atm, 'actual_atm_data' => $actual_atm_data]; // повертаємо в [new_data_atm] масив
                                                                // з даними скільки банкнот і якого номіналу ми зняли,
                                                                // в [actual_atm_data] скільки банкнот і якого номіналу
                                                                // в нас залишилось в терміналі банкомату
}

$data_for_newJson = get_money($data_bank, $date_html)['new_data_atm'];
$newDataSrt = json_encode($data_for_newJson, JSON_PRETTY_PRINT);
file_put_contents('new_data.json', $newDataSrt);

$data_for_actualJson = get_money($data_bank, $date_html)['actual_atm_data'];
$actualDataSrt = json_encode($data_for_actualJson, JSON_PRETTY_PRINT);
file_put_contents('data.json', $actualDataSrt);


header('Location: ./atm.php');

