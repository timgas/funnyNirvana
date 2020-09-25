<?php

$offer_from_bank = [    // Наші дані від банків
    ['percent' => 4,
        'commission' => 500,
        'initialFee' => 0,
        'nameBank' => 'HomoCredit'],

    ['percent' => 3,
        'commission' => 1000,
        'initialFee' => 0,
        'nameBank' => 'Softbank'],
    ['percent' => 2,
        'commission' => 0,
        'initialFee' => 6666,
        'nameBank' => 'StrawberryBank ']

];

function count_percent_commission($amount_percent_month, $percent_in_month, $commission_in_month)  // функція для підрахунку процентів і коммісії, яка набігає за місяць!
{
    $amount_percent_month *= $percent_in_month / 100;
    $amount_percent_month += $commission_in_month;
    return $amount_percent_month;
}


function countCredit($array)
{

    $creditSum = 34999;
    $payment_in_month = 5000;
    $accumulation_sum = 0;
    $month = 1;
    $array_general = [];
    foreach ($array as $value) {
        if ($value['initialFee']) {
            $creditSum += $value['initialFee'];
        }
        while ($creditSum > 0) {
            $month += 1;
            if ($creditSum <= $payment_in_month) {
                $accumulation_sum += count_percent_commission($creditSum, $value['percent'], $value['commission']);
                $creditSum -= $creditSum;
                break;
            }
            $creditSum -= $payment_in_month;
            $accumulation_sum += count_percent_commission($creditSum, $value['percent'], $value['commission']);
            $creditSum += count_percent_commission($creditSum, $value['percent'], $value['commission']);


        }
        array_push($array_general, ['Сума переплати' => round($accumulation_sum),
            'За стільки місяців вам необхідно буде виплачувати кредит' => $month,
            'Банк, який надає кредит' => $value['nameBank']]);
        $month = 1;        // Обнуляємо значення для наступного циклу;
        $accumulation_sum = 0;
        $creditSum = 34999;

    }

    echo '<pre>';
    print_r($array_general);
    echo "<h2>Найбільш вигідна пропозиція від банку </h2>";
    echo "<div style='background: goldenrod; border: 2px solid black'>";
    print_r(min($array_general));
    echo "</div>";
    echo '</pre>';
}

countCredit($offer_from_bank);

