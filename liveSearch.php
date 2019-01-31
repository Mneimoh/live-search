<?php 
header("Content-type: text/xml");
$names = array("John Smith", "John Jones", "Jane Smith", "Jane Tillman",
"Abraham Lincoln", "Sally Johnson", "Kilgore Trout",
"Bob Atkinson","Joe Cool", "Dorothy Barnes",
"Elizabeth Carlson", "Frank Dixon", "Gertrude East",
"Harvey Frank", "Inigo Montoya", "Jeff Austin",
"Lynn Arlington", "Michael Washington", "Nancy West");

$query=$_GET['query'];
echo "<?xml version=\"1.0\" ?>\n";
echo "<names>\n";
while (list($key,$var) = each($names)) {
	if (stristr($var, $query)) {
		echo "<name>".$var."</name>\n";
	}
}
echo "</names>";