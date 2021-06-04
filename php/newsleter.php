<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/PHPMailer/src/Exception.php';
require '../PHPMailer/PHPMailer/src/PHPMailer.php';
require '../PHPMailer/PHPMailer/src/SMTP.php';

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Host = 'ssl://smtp.gmail.com';             //Adresse IP ou DNS du serveur SMTP
$mail->Port = 587;                          //Port TCP du serveur SMTP
$mail->SMTPAuth = 1;                        //Utiliser l'identification

if($mail->SMTPAuth){
   $mail->SMTPSecure = 'ssl';               //Protocole de sécurisation des échanges avec le SMTP
   $mail->Username   =  'viart.felix2017@gmail.com';   //Adresse email à utiliser
   $mail->Password   =  '';                //Mot de passe de l'adresse email à utiliser
}


$mail->CharSet = 'UTF-8';                  //Format d'encodage à utiliser pour les caractères

$mail->From       =  'ouibonjour@gmail.com';               //L'email à afficher pour l'envoi
$mail->FromName   = 'Félix';             //L'alias à afficher pour l'envoi

$mail->Subject    =  'Le sujet';                      //Le sujet du mail
$mail->WordWrap   = 50; 			                         //Nombre de caracteres pour le retour a la ligne automatique
$mail->AltBody = 'Si ça marche ptn de merde je hurle'; 	       //Texte brut
$mail->IsHTML(false);
$mail->Body="Si ça marche POGCHAMP";

$mail->AddAddress('viart.felix2017@gmail.com','Félix Viart');

if (!$mail->send()) {
      echo $mail->ErrorInfo;
} else{
      echo 'Message bien envoyé';
}

?>
