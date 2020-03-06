<?php
$text = "this is what has is in this and kind of is";
$word = "is";
$array = explode(" ", $text);
$i = 0;
$counter = 0;
while ($i<count($array))
{
    if ($array [$i] == $word)
    {   
        $counter++;
    }   
    $i++;
}
echo $counter;
?>
