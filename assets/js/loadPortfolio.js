
var loadingVar;

function loadingFunction() {
loadingVar = setTimeout(showPage, 1000);
}

function showPage() {
document.getElementById("loader").classList.add("zoomOut");
document.getElementById("loadingDiv").style.display = "block";
$( ".filter-active" ).trigger( "click" );

}


