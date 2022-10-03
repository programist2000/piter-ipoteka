<?
$reviewsErrorMSG = "";
 
 
  if (empty($_POST["reviewsName"])) {
    $reviewsErrorMSG = "Имя обязательно! ";
} else {
    $reviewsName = $_POST["reviewsName"];
}
 
if (empty($_POST["reviewsPhone"])) {
    $reviewsErrorMSG .= "Телефон обязателен! ";
} else {
    $reviewsPhone = $_POST["reviewsPhone"];
}
 
if (empty($_POST["reviewsMessage"])) {
    $reviewsErrorMSG .= "Сообщение обязательно! ";
} else {
    $reviewsMessage = $_POST["reviewsMessage"];
}
 
$reviewsEmail = $_POST["reviewsEmail"];
 
$reviewsEmailTo = "cpa.lid@yandex.ru";
$reviewsSubject = "Новый отзыв на сайте ПитерИпотека!";
 

 

// prepare email body text
$reviewsBody .= "Имя: ";
$reviewsBody .= $reviewsName;
$reviewsBody .= "\n";
 
$reviewsBody .= "Email: ";
$reviewsBody .= $reviewsEmail;
$reviewsBody .= "\n";
 
$reviewsBody .= "Телефон: ";
$reviewsBody .= $reviewsPhone;
$reviewsBody .= "\n";
 
$reviewsBody .= "Сообщение: ";
$reviewsBody .= $reviewsMessage;
$reviewsBody .= "\n";
 
// send email
$reviewsSuccess = mail($reviewsEmailTo, $reviewsSubject, $reviewsBody, "От:".$reviewsEmail);
 
// redirect to success page
if ($reviewsSuccess && $reviewsErrorMSG == ""){
   echo "reviewsSuccess";
}else{
    if($reviewsErrorMSG == ""){
        echo "Что-то пошло не так :(";
    } else {
        echo $reviewsErrorMSG;
    }
}

?>