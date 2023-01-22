<?php
require_once "include/kelime.donustur.php";
$linkStr=isset($_GET["islem"]) ? $_GET["islem"] : "";

if(substr($linkStr, -1)==="/"){
    $linkStr=substr($linkStr, 0,-1);
}
$linkDizi=explode("/",$linkStr);

$yedekLinkDizi=$linkDizi;

foreach($linkDizi as $i=>$lKelime){
    $linkDizi[$i]=kelimeDonustur($lKelime);
}

if(count($linkDizi)==1 || count($linkDizi)==0){
    include "index.php";
    exit();
}