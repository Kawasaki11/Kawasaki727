const game = document.querySelector("#gameiframe");
const gamelink = game.dataset.gamelink;
const container = document.querySelector(".content-container");

document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink") !== "clear"){
    rLink();
  }
});
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink2") !== "clear"){
    r3Link();
    console.log(` r3 clear link`);
  }
});
document.addEventListener('DOMContentLoaded', function () 
{
  if (localStorage.getItem("plink3") !== "clear"){
    r2Link();
    console.log(` r2 clear link`);
  }
});
console.log(game.dataset.gamelink);
function r2Link() 
{
 
    
        console.log(`start r2 change link`);
        var site = 'https://r2.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;
game.remove();
var iframeElm = document.createElement('iframe');
            iframeElm.setAttribute('id', 'riframe');
            iframeElm.setAttribute('allowfullscreen', 'true')
            iframeElm.setAttribute('scrolling', 'no')
    iframeElm.src = site;
    container.prepend(iframeElm);
    console.log(`finish r2 change link`);
    
	
}
function rLink() 
{
 
    
        console.log(`start r change link`);
        var site = 'https://r.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;
game.remove();
var iframeElm = document.createElement('iframe');
            iframeElm.setAttribute('id', 'riframe');
            iframeElm.setAttribute('allowfullscreen', 'true')
            iframeElm.setAttribute('scrolling', 'no')
    iframeElm.src = site;
    container.prepend(iframeElm);
    console.log(`finish r change link`);
    
	
}
function r3Link() 
{
 
    
        console.log(`start r3 change link`);
        var site = 'https://r3.emulatoros.ga'+ "/" + game.dataset.gamelink;
        ;
game.remove();
var iframeElm = document.createElement('iframe');
            iframeElm.setAttribute('id', 'r3iframe');
            iframeElm.setAttribute('allowfullscreen', 'true')
            iframeElm.setAttribute('scrolling', 'no')
    iframeElm.src = site;
    container.prepend(iframeElm);
    
    
    console.log(`finish r3 change link`);
}
