<!DOCTYPE html>
<html>
<head>
<title>Insurance Management System - Registration Details</title>
</head>
<body bgcolor="orange">
<form>
<fieldset>
<legend align="center">PERSONAL INFO</legend>
<center>

<?php
    echo "Name : " . $_POST["n1"] . " " . $_POST["l1"];
    echo "<br>";
    echo "DOB : " . $_POST["d1"];
    echo "<br>";
    echo "Gender : " . $_POST["g1"];
    echo "<br>";
    $sem = (isset($_POST['sem']) ? $_POST['sem'] : null);
    if ($sem) {
        echo "Semester: " . $sem[0];
        echo "<br>";
    }
    $brn = (isset($_POST['brn']) ? $_POST['brn'] : null);
    if ($brn) {
        echo "Branch: " . $brn[0];
        echo "<br>";
    }
    echo "Address : " . $_POST["a1"];
    echo "<br>";
    echo "Contact no.  : " . $_POST["m1"];
    echo "<br>";
    echo "Email-ID : " . $_POST["e1"];
    echo "<br>";
    $blg = (isset($_POST['blg']) ? $_POST['blg'] : null);
    if ($blg) {
        echo "Blood Group: " . $blg[0];
        echo "<br>";
    }
?>

</center>
</fieldset>
</form>
</body>
</html>
