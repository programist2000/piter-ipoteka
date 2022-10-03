<?
$errorMSG = "";
 
 
  if (empty($_POST["name"])) {
    $errorMSG = "Имя обязательно! ";
} else {
    $name = $_POST["name"];
}
 
if (empty($_POST["phone"])) {
    $errorMSG .= "Телефон обязателен! ";
} else {
    $phone = $_POST["phone"];
}
 
if (empty($_POST["message"])) {
    $errorMSG .= "Сообщение обязательно! ";
} else {
    $message = $_POST["message"];
}
 
$email = $_POST["email"];
 
$EmailTo = "cpa.lid@yandex.ru";
$Subject = "Новая заявка на сайте ПитерИпотека!";
 

 

// prepare email body text
$Body .= "Имя: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Телефон: ";
$Body .= $phone;
$Body .= "\n";
 
$Body .= "Сообщение: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "От:".$email);
 
// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Что-то пошло не так :(";
    } else {
        echo $errorMSG;
    }
}

?>