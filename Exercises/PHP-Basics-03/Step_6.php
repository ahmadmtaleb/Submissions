<?php

$num=5;
for($i=1;$i<=$num;$i++){
    for($j=1;$j<=$i;$j++)
    echo "*";
    echo "\n";
}
for($i=$num;$i>0;$i--){
    for($j=$i;$j>0;$j--)
    echo "*";
    echo "\n";
}
   

?>