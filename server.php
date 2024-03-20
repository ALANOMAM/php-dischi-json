<?php

/*$discList = json_encode('dischi.json');*/

header("Content-Type: application/json");

echo encode('./dischi.json') ;

?>