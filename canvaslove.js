var designShow  = document.getElementsByClassName("postdesign")[1];
 designShow.style.display="none"

document.getElementById('calculate').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var partnerName = document.getElementById('partner').value;

    var couples = name + partnerName;
    let total = 0;
    let good=  document.getElementById("openian");
    let btn = document.getElementById("Download");


    for(let i = 0; i < couples.length; i++) {
        total += couples.charCodeAt(i);
    }
    const percentage = total % 101;
    if(percentage<=10 || percentage<=50){
        good=  "Good 👌 Relationship"

    }
    else if(percentage<=51 || percentage<=100){
        good="Lovely 🥰 Relationship"
        
    }

    
    var design = document.getElementById('display');
        design.classList.add('post');
        designShow.style.display="flex";

        design.innerHTML = `
        <img src="./img/heartpixel.png" alt="" id="logo">
        <img src="./img/flame-1764.png" alt="">
            <p style= "text-align: center; line-height: 24px; margin-bottom:.7rem;"> <br> <strong style="font-size: 2rem;">${percentage}</strong> % of love <strong>${name}</strong> and <strong>${partnerName}</strong> </p>
        <p id="openian">${good}</p>

        <p id="website" >www.luvpixell.com</p>
    `;
    btn.style.display="block"

});

document.getElementById('Download').addEventListener('click', function() {
    html2canvas(document.getElementById('display')).then(function(canvas){
        var canvasContainer = document.getElementById('canvasContainer');

        
        canvasContainer.innerHTML ='';
        canvasContainer.appendChild(canvas);
        canvasContainer.style.display="none";

         document.getElementById('Download').addEventListener('click', (function() {
            var link = document.createElement('a');

            link.href = canvas.toDataURL('image/png');
            link.download = 'Luvpixell_love.png';
            link.click();
        })());
});

});
