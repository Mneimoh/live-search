// global variable to manage the timeout
var t;

function startSearch(){
	if (t) window.clearTimeout(t);
	t = window.setTimeout("liveSearch()",200);
}
// Perform the search
function liveSearch(){
	var query = document.getElementById("searchlive").value;
	loadDoc("liveSearch.php?query=" + query,displayResults);

}
// Display search results
function displayResults(){
	// remove old list
	ul = document.getElementById("list");
	result = document.getElementById("results");
	result.removeChild(ul);
	// make a new list
	ul = document.createElement("UL");
	ul.id = "list";
	var names = ajaxreq.responseXML.getElementsByTagName("name");
	for (var i = 0; i < names.length; i++) {
		name = names[i].firstChild.nodeValue;
		li = document.createElement("LI");
		text = document.createTextNode(name);
		ul.appendChild(li);
		li.appendChild(text);
	}
	if (names.length == 0) {
		li = document.createElement("LI");
		text = document.createTextNode("(No Result)");
		ul.appendChild(li);
		li.appendChild(text);
	}
	// display the new list
	result.appendChild(ul);
}
// set up event handler
obj = document.getElementById("searchlive");
obj.onkeydown = startSearch;