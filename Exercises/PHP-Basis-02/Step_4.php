<?php
$num = 153;
$blah = strval($num);
$array = str_split($blah);
$num2 = 0;
for ($i = 0; $i<count($array); $i++)
{
    $num2 += intval($array[$i])**count($array);
}
if ($num === $num2)
{
    echo "This number is armstrong\n";
}
else{
    echo "This number is not an armstrong\n";
}
?>