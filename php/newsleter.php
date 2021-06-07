<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/PHPMailer/src/Exception.php';
require '../PHPMailer/PHPMailer/src/PHPMailer.php';
require '../PHPMailer/PHPMailer/src/SMTP.php';

$mail = new PHPMailer();

$mail->SMTPDebug = true;
$mail->SMTPDebug=1;
$mail->SMTPAuth = true;

$mail->CharSet = 'utf-8';
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = '465';

$mail->Username = 'viart.felix2017@gmail.com';
$mail->Password = '';

$mail->Mailer = 'smtp';

$mail->AddReplyTo('viart.felix2017@gmail.com', 'Fél2ix Viart');
$mail->SetFrom('viart.felix2017@gmail.com','Via2Fé rtlix');
$mail->FromName = 'Viart_Félix';
$mail->Sender = 'viart.felix2017@gmail.com';
$mail->Body = 'Hello, this is my message.';
$mail->Priority = 3;

$mail->AddAddress('viart.felix2017@gmail.com', 'Via2rt Félix');
$mail->IsHTML(true);

$mail->Subject = 'Oui bonsoir c est Félix laul';

if(!$mail->send()) {
    echo 'Message could not be sent: <br>';
    echo 'Mailer Error: ' . $mail->ErrorInfo . '<br>';
    exit;
}

?>
