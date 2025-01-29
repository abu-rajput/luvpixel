let close = document.getElementById("close");
let menu = document.getElementsByClassName("menuitem")[0];
let icon = document.getElementsByClassName("bx");


// menu.style.display="none";
function showMenu(){
    if(menu.style.display=="none")
        {
            menu.style.display="block";
            
       
        }
    else{
        menu.style.display="none"
    }
}