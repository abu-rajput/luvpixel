var designShow  = document.getElementsByClassName("postdesign")[1];
 designShow.style.display="none"

document.getElementById('calculate').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    let btn = document.getElementById("Download");

    var design = document.getElementById('display');
        design.classList.add('post');
        designShow.style.display="flex";

        design.innerHTML = `
        <img src="./img/heartpixel.png" alt="" id="logo">
        <img src="./img/flame-1764.png" alt="" id="photo">
        <p id="value" style="text-align: center;">Happy Birthday</p>
        <p id="openian" style="text-align: center; ">${name}</p>
        <p id="website">www.luvpixell.com</p>
    `;
    btn.style.display="block"

// let getpic = document.getElementById("photo");
// let getimg= document.getElementById("img");

// (function imgchange(){getpic.src= URL.createObjectURL(getimg.files[0])})();

// });
});

document.getElementById('Download').addEventListener('click', function() {
    html2canvas(document.getElementById('display')).then(function(canvas){
        var canvasContainer = document.getElementById('canvasContainer');
        canvasContainer.innerHTML ='';
        canvasContainer.appendChild(canvas);
        // canvasContainer.style.display="none";

         document.getElementById('Download').addEventListener('click', (function() {
            var link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'Luvpixell_Birthday.png';
            link.click();
        })());
});

});
