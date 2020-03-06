<?php
$num = 9999;
$num_s = strval($num);
var_dump($num_s);
$sum = 0;
for($i=0;$i<strlen($num_s); $i++)
{
    $sum += intval($num_s[$i]);
}
echo $sum;
?>