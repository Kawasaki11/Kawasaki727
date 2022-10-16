const buildfilterdiv = (games) => {
    const $divwrap = document.createElement("button");
    $divwrap.classList.add("filter-item");
    for (var i = 0; i < games.filter.length; i++){
        $divwrap.classList.add(games.filter[i]);
    }

    const $imgcontainer = buildimgcontainer(games);
    const $gridcardtext = buildgridcardtext(games);

    const $filtermask = document.createElement("div");
    $filtermask.classList.add("filter-mask");

    $divwrap.appendChild($imgcontainer);
    $divwrap.appendChild($gridcardtext);
    $divwrap.appendChild($filtermask)
    return $divwrap;
  };

  const buildimgcontainer = (games) => {

    const $imgtag = document.createElement("img"); //create the img tag
    $imgtag.classList.add("hover-center");
    $imgtag.src = "/assets/img/games/" + games.imgsrc;
    $imgtag.alt = games.name; //alt is the same as the game's name


    return $imgtag;
  };

  const buildgridcardtext = (games) => {
    
    const $p = document.createElement("p"); //create the p tag
    $p.classList.add("game-name");
    $p.innerText = games.name; //set the title



    return $p;
  };

  const filterwrap = document.querySelector(".filter-wrap");

  for (let i = 0; i < gamesArr.length; i++) {
    let $item = buildfilterdiv(gamesArr[i]);
    filterwrap.appendChild($item);
  }

//Create element for no filter matched
const $noitem = document.createElement("div");
$noitem.classList.add("filter-no-item");
$noitem.innerText = "Sorry, no games match your filter selections";
document.querySelector(".filter-wrap").appendChild($noitem);

//Random game
const randGame = () => {
  for (let i = 0; i < gamesArr.length; i++){
    let randInd = Math.floor(Math.random() * gamesArr.length);
    window.location = "/" + gamesArr[randInd].link + ".html";
  }
}