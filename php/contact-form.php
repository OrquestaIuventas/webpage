<?

$your_email = "raquelpm23@gmail.com";

$headers= "From: ".$_POST['name']." <".$_POST['email'].">\r\n";
$headers.='Content-type: text/html; charset=utf-8';
mail($your_email, $_POST['subject'],  "
<html>
<head>
 <title>Contact Message</title>
</head>
<body>
	Mensaje de contacto desde la web<br><br>
	Name : ".$_POST['name']."<br>
	Email : ".$_POST['email']."<br>
	Asunto : ".$_POST['subject']."<br>
	Mensaje : <br>".$_POST['message']."<br>
</body>
</html>" , $headers);
echo "<script>alert('Mensaje enviado! =)');window.location.href='./../contact.html';</script>";
//header("Location: ./../contact.html");
?>