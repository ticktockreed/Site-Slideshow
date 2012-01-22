<?php
// This file states which files should be compiled 
// and where to place the completed css file

require_once($_SERVER['DOCUMENT_ROOT'] .'/less/lessc.inc.php');

$lessfile = $_SERVER['DOCUMENT_ROOT'] .'/less/global.less';
$lesstime = filemtime($lessfile);
$cssfile = $_SERVER['DOCUMENT_ROOT'] .'/css/global.css';
$csstime = filemtime($cssfile);
if ($lesstime > $csstime) {
  $less = new lessc($lessfile);
  try {
        $data = $less->parse();
        file_put_contents($cssfile, $data);
    } catch (Exception $ex) {
        echo "lessphp fatal error: ".$ex->getMessage();
    }
}
?>