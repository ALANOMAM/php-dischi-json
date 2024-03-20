<?php

  $you = ["uno","due","tre",
  ];



header("Content-Type: application/json");

echo json_encode($you);

?>