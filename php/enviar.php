<?php
$name = $_POST['name'];
$mail = $_POST['email'];
$message = $_POST['message'];

$header = 'From: ' . 'mariapazsecundini@hotmail.com' . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Mensajito de " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'mariapazsecundini@hotmail.com';
$asunto = '¡Nuevo mensaje de mi pagina web, iupiii!';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:../index.html");
?>
-->

<?php
$name = $_POST['name'];
$mail = $_POST['email'];
$message = $_POST['message'];
$from = 'mensajes@pazsecundini.com.ar';
$header = 'From: ' . $from . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Mensajito de " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'mariapazsecundini@hotmail.com';
$asunto = 'Nuevo mensaje de mi pagina web';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:../index.html#gracias");
?>
-->