function change() {
    document.getElementById('cgu').innerHTML = "CSIE@CGU"; 
    document.getElementById('good').innerHTML = "怎麼那麼棒！！."; 
}
function new_button(){
    var btn = document.createElement("BUTTON"); 
    btn.innerHTML = "Change this document"; 
    document.body.appendChild(btn); 
    btn.addEventListener("click",change);
}