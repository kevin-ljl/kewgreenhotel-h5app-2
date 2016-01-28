<?php 

	session_start();

	// for debug use $_GET["param"]
	// http://localhost/sleep_on_gentleman_h5app/db/adduser.php?name=leon&age=18&phone=13564137185&occupation=Programmer&score=3&adate=0101
	// $name           = $_GET['name'];
	// $age              = $_GET['age'];
	// $phone          = $_GET['phone'];
	// $occupation   = $_GET['occupation'];
	// $score     	= $_GET['score'];
	// $adate          	= $_GET['adate'];


	include_once 'connect.php';

	//params
	$name            = $_POST['name'];
	$age            	 = $_POST['age'];
	$phone           = $_POST['phone'];
	$occupation    = $_POST['occupation'];
	$score           =$_POST['score'];
	$adate          = date("Y-m-d H:i:s",time());

	if ($conn)
	{
		$query = "INSERT INTO user (name,age,phone,occupation,score, adate) VALUES( '$name', '$age', '$phone', '$occupation','$score', '$adate')";
		mysqli_query($conn , $query) or die("Error in query: $query. ".mysql_error());

		echo 'insert success!';	
	}else
	{
		echo 'database is disconnect!';
	}

	mysqli_close($conn);
?>
与Kew Green酒店携手，上绅士的床，尽享英伦轻奢之旅！