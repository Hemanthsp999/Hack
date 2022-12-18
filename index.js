$(document).ready(function(){
    $("#register").click(function(){
        var name = $("#name1").val();
        var email = $("#email1").val();
        var password = $("#password1").val();
        if(name == '' || email == '' || password == ''){
            alert("User! Please enter your name!");
        }
        else if((password.length) < 8){
            alert("Password should atleast 8 character in length....!!!!!!");
        }
        else{
            $.post("index.php", {
                name1: name,
                email1: email,
                password1: password
            }, function(data) {
                if(data== 'You have Successfully Registered......'){
                    $("form")[0].reset();

                }
                alert(data);

            });
        }
    });
});
<!DOCTYPE html>
    <html lag="en">
    <head>
    <title>ANONYMOUS</title>
    <meta name="Author",content="METAMORPHISI Group 5">
    <meta name="keywords" content="ANONYMOUS,BOOKS">


<title>BIBLIOTHIC</title>
<meta name="Author", content="METAMORPHOSIS GROUP 5">
<meta name="keywords", content="BIBLIOTHIC, Books">
<title>BIBLIOTHIC</title>
<!-- LINKS -->
<link rel="stylesheet" href="css/styles.css">
<link rel="icon" href="images/logo.png">
<!-- FONT -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap"
rel="stylesheet">
</head>
<body>
<br><br>
<!-- NAVIGATION -->
<nav style="margin-right: 1000px;">
<img src="images/logo.png" alt="Logo" height="80" width="80"
style="margin-left: 4%; border-bottom-right-radius: 10%; border-bottom-left-
radius: 10%;">
<a style="font-size: 60px; position: relative; bottom: 30%; margin-right:
200px;">BIBLIOTHIC</a>
<a href="#welcomePage" class="nav-items">Home |</a>
<a href="#login-user" class="nav-items">Login |</a>
<a href="#form-user" class="nav-items">Register |</a>
<a href="#about" class="nav-items">About Us</a>
</nav>
<!-- ADMIN -->
<center><h2>ADMIN PAGE</h2></center>
<hr>
<!-- USER INFO -->
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bibliothic";
$con1 = mysqli_connect($servername, $username, $password, $dbname);
?>
<div class="user-info">
<center>
<h3>USERS INFORMATION</h3>
<table>
<?php
$query1 = "select * from users";
$result1 = $con1->query($query1);
echo "<tr>";
echo "<td>Name</td>";
echo "<td>Age</td>";
echo "<td>Number</td>";
echo "<td>Gender</td>";
echo "<td>Email</td>";
echo "<tr>";
while($row = $result1->fetch_assoc()) {
$name = $row['username'];
$age = $row['userage'];
$number = $row['userphno'];
$gender = $row['usergender'];
$email = $row['useremail'];
echo "<tr>";
echo "<td>$name</td>";
echo "<td>$age</td>";
echo "<td>$number</td>";
echo "<td>$gender</td>";
echo "<td>$email</td>";
echo "<tr>";
}
?>
</table>
</center>
</div>
<br>
<hr>
<!-- BOOKS INFO -->
<div class="books-info">
<center>
<h3>BOOKS INFORMATION</h3>
<table>
<?php
$query2 = "select * from books";
$result2 = $con1->query($query2);
echo "<tr>";
echo "<td>Book ID</td>";
echo "<td>Book Name</td>";
echo "<td>Year</td>";
echo "<td>Price [INR]</td>";
echo "<td>Availibility</td>";
echo "<tr>";
while($row1 = $result2->fetch_assoc()) {
$name = $row1['bookid'];
$age = $row1['bookname'];
$number = $row1['year'];
$gender = $row1['price'];
$email = $row1['available'];
echo "<tr>";
echo "<td>$name</td>";
echo "<td>$age</td>";
echo "<td>$number</td>";
echo "<td>$gender</td>";
echo "<td>$email</td>";
echo "<tr>";
}
?>
</table>
</center>
<br>
</div>
<hr>
<!-- FOOTER -->
<footer>
<center><img src="images/logo.png" alt="LOGO" class="footer-
image"></center>
<center style="color: white;">BIBLIOTHIC</center>
<center>
<a href=""><img src="images/facebook.png" alt="" height="32px"
width="32px"></a>
<a href=""><img src="images/linkedin.png" alt="" height="32px"
width="32px"></a>
<a href=""><img src="images/twitter.png" alt="" height="32px"
width="32px"></a>
<a href=""><img src="images/youtube.png" alt="" height="32px"
width="32px"></a>
<a href=""><img src="images/instagram.png" alt="" height="32px"
width="32px"></a>
</center>
<br>
<center style="color: white; font-family: Arial, Helvetica, sans-serif;
font-size: 1.5rem;">© METAMORPHOSIS GROUP 5</center>
</footer>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
<title>BIBLIOTHIC</title>
<meta name="Author", content="METAMORPHOSIS GROUP 5">
<meta name="keywords", content="BIBLIOTHIC, Books">
<title>BIBLIOTHIC</title>
<!-- LINKS -->
<link rel="stylesheet" href="css/styles.css">
<link rel="icon" href="images/logo.png">
<!-- FONT -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
href="https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap"
rel="stylesheet">
</head>
<body>
<br><br>
<!-- NAVIGATION -->
<nav style="margin-right: 1000px;">
<img src="images/logo.png" alt="Logo" height="80" width="80"
style="margin-left: 4%; border-bottom-right-radius: 10%; border-bottom-left-
radius: 10%;">
<a style="font-size: 60px; position: relative; bottom: 30%; margin-right:
200px;">BIBLIOTHIC</a>
<a href="index.php" class="nav-items">Home |</a>
<a href="index.php" class="nav-items">Login |</a>
<a href="index.php" class="nav-items">Register |</a>
<a href="index.php" class="nav-items">About Us</a>
</nav>
<!-- BOOKS SEARCH -->
<center class="search" id="bookSearch">
<h2>FIND BOOKS</h2>
<form>
<input type="text" name="pin" placeholder="Search Books, Novels,
Textbooks near your Location ..." style="width: 50%; border-radius: 15px; font-
size: 1.5rem;">
<input type="submit" id="findBooks" value="Search!">
</form>
</center>
<?php
if(isset($_GET['pin'])){
$pin = $_GET['pin'];
echo $pin;
if($pin == "632014"){
header("Location: books.php");
}
else if($pin == "632013"){
header("Location: books2.php");
}
}
?>
<br><hr>
<!-- BOOKS DISPLAY -->
<div class="books-main">
<div>
<table class="books-display" style="width: 100%;">
<tr>
<td>
<img src="images/Harry-Potter.jpg" alt="Harry-Potter"
width="150px" height="250px" style="margin:auto;">
</td>
<td>Harry Potter</td>
<td>Year : 2010</td>
<td>INR 150</td>
<td>Pincode : 632013</td>
<td><button style="width: 100%;" onclick="addItem(1001)">Add
to Cart</button></td>
</tr>
<tr>
<td>
<img src="images/lotr.jpg" alt="LOTR" width="150px"
height="250px" style="margin:auto;">
</td>
<td>Lord of The Rings</td>
<td>Year : 2002</td>
<td>INR 300</td>
<td>Pincode : 632014</td>
<td><button style="width: 100%;" onclick="addItem(1002)">Add
to Cart</button></td>
</tr>
<tr>
<td>
<img src="images/2states.jpg" alt="2 States"
width="150px" height="250px" style="margin:auto;">
</td>
<td>2 States</td>
<td>Year : 2009</td>
<td>INR 175</td>
<td>Pincode : 632014</td>
<td><button style="width: 100%;" onclick="addItem(1003)">Add
to Cart</button></td>
</tr>
<tr>
<td>
<img src="images/jobs.jpg" alt="Steve Jobs" width="150px"
height="250px" style="margin:auto;">
</td>
<td>Steve Jobs: The Exclusive Biography</td>
<td>Year : 2011</td>
<td>INR 350</td>
<td>Pincode : 632013</td>
<td><button style="width: 100%;" onclick="addItem(1004)">Add
to Cart</button></td>
</tr>
</table>
<script>
function addItem($bid){
$.ajax({
url:"books-search.php",
data: {id:$bid},
success:function(result){
$("div p").text(result);
}
})
}
</script>
</div>
<div><p></p></div>
</div>
<center>
<button onclick="submit">Proceed To Checkout!</button>
</center>
<?php
// $id = $_GET['id'];
// function addItemPhp($id){
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "bibliothic";
// $con1 = mysqli_connect($servername, $username, $password, $dbname);
// $query1 = "insert into cart values('$id')";
// $result1 = $con1->query($query1);
// }
// addItemPhp(1001);
// addItemPhp(1002);
?>
<br>
<!-- FOOTER -->
<footer>
<center><img src="images/logo.png" alt="LOGO" class="footer-
image"></center>
<center style="color: white;">BIBLIOTHIC</center>
<center>
<a href=""><img src="images/facebook.png" alt="" height="32px"
width="32px"></a>
<a href=""><img src="images/linkedin.png" alt="" height="32px"
width="32px"></a>
<a href=""><img src="images/twitter.png" alt="" height="32px"
width="32px"></a>
<a href=""><img src="images/youtube.png" alt="" height="32px"
width="32px"></a>
<a href=""><img src="images/instagram.png" alt="" height="32px"
width="32px"></a>
</center>
<br>
<center style="color: white; font-family: Arial, Helvetica, sans-serif;
font-size: 1.5rem;">© METAMORPHOSIS GROUP 5</center>
</footer>
</body>
</html
