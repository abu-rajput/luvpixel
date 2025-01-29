var designShow  = document.getElementsByClassName("postdesign")[1];
//  designShow.style.display="none"

document.getElementById('calculate').addEventListener('click', function() {
    
    
var heading= document.getElementById('name').value;
var no= document.getElementById('partner').value;
(function print(){
    var pri  = document.getElementsByClassName("post")[1];
        pri.innerHTML="";

for(let i=0; i<=no; i++){
    pri.innerHTML +=`
    
    ${i} . ${heading}<br>`;
}        

})();
// designShow.style.display="flex"

let btn = document.getElementById("copy");
btn.addEventListener("click",copyText)
function copyText(){
    var prin  = document.getElementsByClassName("post")[1];
    const range = document.createRange(0,2000);
    
    range.selectNode(prin);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert("Text Copied")
}

let share = document.getElementById("share");
share.addEventListener('click',shareText);

function shareText(){
    var content  = document.getElementsByClassName("post")[1];
    content.innerHTML;
    if(navigator.share){
        navigator.share({
            title: 'Text Message',
            text: content
        }).then(()=> alert('Text shared!')).catch((error) => console.log('Error sharing',error));}
        else{
            alert("Web share API not supported on this browser.");
        }
    }
    

}

);
    


      