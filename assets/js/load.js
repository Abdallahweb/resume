
var loadingVar;

function loadingFunction() {
loadingVar = setTimeout(showPage, 1000);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("loadingDiv").style.display = "block";
$( ".filter-active" ).trigger( "click" );

}


document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});

document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);


$(document).keydown(function (event) {
    if (event.keyCode == 123) { // Prevent F12
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
        return false;
    }
});

