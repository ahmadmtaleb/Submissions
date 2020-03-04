<?php

function greaterFn($num){
  if($num >30)
  {
      return "The number is greater than 30";
  }
  else if ($num >20)
  {
    return "The number is greater than 20";
  }
  else if ($num >10)
  {
    return "The number is greater than 10";
  }
  else {return "The number is less than 10";}
}
echo greaterFn(40);
echo "\n"; 
echo greaterFn(21);
echo "\n"; 
echo greaterFn(12); 
echo "\n";
echo greaterFn(8);  