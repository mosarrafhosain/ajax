function XMLHttpRequestObject() {
    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
      XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
    return XMLHttpRequestObject;
}
 
function showData(str) {
    var xmlhttp = XMLHttpRequestObject();
    if (xmlhttp) {
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          document.getElementById("id_selector").innerHTML = xmlhttp.responseText;
        }
      }
      xmlhttp.open("GET", "ajax.php?q=" + str, true);
      xmlhttp.send();
    }
}
  
showData('str');
