<?php
$num = 301;
$blah = strval($num);
$num2 = 0;
for ($i=0; $i<strlen($blah); $i++)
{
    $num2 += $blah[$i];
}
echo $num2;
?>
