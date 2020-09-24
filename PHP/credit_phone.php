<?php

function count_percent_comis($lastPay, $percent, $сommission) {
    return $lastPay *= ($percent / 100) + $comission; 
}

function countCredit($creditBalance, $percent, $comission, $bankName, $openAccount ) {
    $creditBalance += $openAccount; 

    while($creditBalance > 0) {
        $month += 1;
        $payMent = 5000;
        $creditBalance -= $payMent;
        $creditBalance += count_percent_comis($creditBalance, $percent, $comission);
            if ($creditBalance < 0) {
                 echo "<p>Вы выплатили полностью кредит за $month месяцев</p>
                        <p>My congratulations</p>" ; 
                break;
            };

        echo '<pre>';
        $round = round($creditBalance);
        echo "Вы должны банку $bankName : $round грн, остаток за кредитом после $month-го месяца выплат";
        echo '</pre>';
    }
}


countCredit(34999, 3, 1000, 'StrawberryBank', 0);

?>

