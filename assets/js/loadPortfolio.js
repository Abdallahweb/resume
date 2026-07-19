
var loadingVar;

function loadingFunction() {
loadingVar = setTimeout(showPage, 1000);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("loadingDiv").style.display = "block";
$( ".filter-active" ).trigger( "click" );

}


