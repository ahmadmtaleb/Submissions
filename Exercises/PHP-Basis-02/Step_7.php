
<?php
$str = "php is great language, but python is also not bad python 1 php 2 python 3";
$str = str_replace(array('python', 'php'), array('@ython', 'python'), $str);
echo str_replace('@ython', 'php', $str);

?>