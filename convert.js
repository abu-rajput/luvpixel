var design  = document.getElementsByClassName("postdesign")[1];
console.log(design);
 design.style.display="none"

document.getElementById('calculated').addEventListener('click', function() {

    var name = document.getElementById('textt').value;
    var rename= name.split('').reverse().join('');
    var no = name.length;
    let btn = document.getElementById("Download");
    var displayDiv = document.getElementById('display');
    displayDiv.classList.add('post');
    design.style.display="flex";
    displayDiv.innerHTML = `
       <div class="post">
        <img src="./img/heartpixel.png" alt="" id="logo" ">

                <div class="blur">
                    <img src="/img/3d-fluency-face-with-tears-of-joy-emoji.png" alt="" id="img">
                    <h4>Name : <span id="name">${name}</span> </h4> 
                    <h4>ReverseName : <span id="rename" text-aline="center">${rename}</span></h4>
                    <h4>No Of Latter : <span id="no">${no}</span></h4>
                </div>
                    <p  style="text-transform: lowercase; ">www.luvpixel.com</p>
            </div>
    `;
    btn.style.display="block"


});


document.getElementById('Download').addEventListener('click', function() {
    html2canvas(document.getElementById('display')).then(function(canvas) {
        var canvasContainer = document.getElementById('canvasContainer');
        canvasContainer.innerHTML ='';
        canvasContainer.appendChild(canvas);
        canvasContainer.style.display="none";

        document.getElementById('Download').addEventListener('click', (function() {
            var link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'ReverseName.png';
            link.click();
        })());
        
    });
}); 


