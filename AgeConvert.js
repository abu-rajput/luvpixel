var designs  = document.getElementsByClassName("ageCalculate")[1];
 designs.style.display="none";

document.getElementById('Convert').addEventListener('click', function() {
    var Name = document.getElementById("name").value;
    var getdate = document.getElementById("EnterDate").value;    
    
    var btn = document.getElementById('Convert');
    let download = document.getElementById("Download");

    designs.style.display="flex";

  
download.style.display="block"

btn.addEventListener('click',(function () {
    // const birthDate = document.getElementById('birthDate').value;
    var birthDate = document.getElementById("EnterDate").value;
            

    if (!birthDate) {
        const design = document.getElementById('display');
        design.innerHTML = "Please select a birth date.";
        return;
    }

    const birthDateObj = new Date(birthDate);
    const today = new Date();

    const diffInMilliseconds = today - birthDateObj;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 31); // approximate months
    const diffInYears = Math.floor(diffInMonths / 12);


    document.getElementById('display').classList.add('design');

    document.getElementById('display').innerHTML= `

 <div class="design" style="background-color: white;">
        <div class="left">
            <h1>Calculate your days</h1> 
            <p >Name &nbsp;  &nbsp; :<span id="printname"><Strong style="text-transform:capitalize;">${Name}</Strong></span></p>
            <p >DOB &nbsp;&nbsp; :  <span id="putdate"><Strong>${getdate}</Strong></span></p>
            <p>Years &nbsp;&nbsp;&nbsp; :&nbsp;<span id="year"> ${diffInYears}</span></p>
            <p>Total Month &nbsp; : &nbsp;<span id="month">${diffInMonths}</span></p>
            <p>Total Week &nbsp; : &nbsp;<span id="month">${diffInWeeks}</span></p>
            <p>Total Days &nbsp;&nbsp;: &nbsp;<span id="day"> ${diffInDays}</span></p>
            <p>Total Hours &nbsp;&nbsp;: &nbsp;<span id="hours">${diffInHours}</span></p>
            <p>Total Minutes &nbsp;: &nbsp;<span id="min"> ${diffInMinutes}</span></p>
            <p>Total Secound : &nbsp; <span id="second">${diffInSeconds}</span></p>
            <p id="webname">www.luvpixell.com</p>
            <img src="./img/heartpixel.png" alt="">


        </div>
        <div class="circle">
            <div class="cir">A</div>
            <div class="cir">G</div>
            <div class="cir">E</div>
        </div>
        <div class="right">
            <img src="./img/3D Illustration WFH Character.jpeg" alt="" id="getpic">
        </div>
    </div>

`
})());
let getpic = document.getElementById("getpic");
let getimg= document.getElementById("imag");

(function imgchange(){getpic.src= URL.createObjectURL(getimg.files[0])})();

})



document.getElementById('Download').addEventListener('click', function() {
    html2canvas(document.getElementById('display')).then(function(canvas) {
        var canvasContainer = document.getElementById('canvasContainer');
        canvasContainer.innerHTML ='';
        canvasContainer.appendChild(canvas);
        canvasContainer.style.display="none";

        document.getElementById('Download').addEventListener('click', (function() {
            var link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'AgeCalculate_luvpixell.png';
            link.click();
        })());
        
    });
}); 
