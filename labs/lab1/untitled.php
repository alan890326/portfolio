<!DOCTYPE html>
<html>
<head>
	<title>Using PHP document</title>
</head>
<?php
$file = fopen("times.txt", "r");
$num = fgets($file);
$num =$num+1;
$file = fopen("times.txt","w");
fwrite($file, $num);
fclose($file);
$a= 7;
?>
<body style="font-size: 2em">
	<strong>
		你的姓名為： <?php print("$_POST[fname]"); ?>!
	</strong>
	<br/>
	你的學號為： <?php print("$_POST[fid]"); ?>
	<br/>
	你猜的數字為： <?php print("$_POST[fnumber]"); ?>
	<br/>
	<?php if($a>"$_POST[fnumber]"){
		      echo "數字太小";}
	    else if($a<"$_POST[fnumber]"){
	    	  echo"數字太大";
	    }else{
	    	  echo"猜對了";
	    }
	?>
	<br/>

	你總共猜了: <?php echo "$num" ?> 次    


</body>

<br/>
<input type ="button" onclick="history.back()" value="回到上一頁"></input>
</html>