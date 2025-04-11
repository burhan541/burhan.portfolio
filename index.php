
<?php
$severname="localhost";
$username="root";
$password="";
$dbname="portfolio";

$conn=new mysqli($severname,$username,$password,$dbname);
if($conn->connect_error){
    die("connection failed");
}
if(isset($_POST['submit'])){
$name =$_POST['name'];
$email=$_POST['email'];
$phone =$_POST['phone'];
$subject =$_POST['subject'];
$message =$_POST['message'];
$sql="INSERT INTO `portfolio` (`name`, `email`, `password`, `subject`, `message`) VALUES ('$name', '$email', '$phone' ,'$subject', '$message')";
if($conn->query($sql)==true){
   echo "new record added"; 
}
else{
    echo "error";
}
$conn->close();}
?>