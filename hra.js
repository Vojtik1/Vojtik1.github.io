const audio = new Audio("zvuk.mp3");
const buttons = document.querySelectorAll("img");
var clicks = 0;
var prumer1 = 0;
var seconds = 0;
var casovac = document.getElementById('seconds-counter');

function prumer(){
    let prumer1 = clicks/seconds;
    document.getElementById("cps").innerHTML = prumer1;
}
function konecHry(){
    alert("KONEC HRY" + " " +
     "Počet kliků:" + " " + clicks + " " + "PRO NOVOU HRU RESETNI STRÁNKU");
}
    function pocitani(){
        clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
 
    }
function pocitaniCasu (){
    seconds += 1;
    casovac.innerText = seconds + " " + "sekund";
}

buttons.forEach(btn_test => {
    btn_test.addEventListener("click", () => {
      audio.play();
    });
  });

    
    button1.addEventListener('click',function(){
        setInterval(pocitaniCasu, 1000);
        document.getElementById('btn_test').style.display='block';
      setTimeout(konecHry, 30000);
    function moveElmRand(elm){
     elm.style.position ='absolute';
     elm.style.top = Math.floor(Math.random()*90+5)+'%';
     elm.style.left = Math.floor(Math.random()*90+5)+'%';
     pocitani();
     setInterval(prumer,10);
    
    }

    btn_test.addEventListener('click', function(e){ moveElmRand(e.target);});
    })
    
