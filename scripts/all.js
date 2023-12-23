
//ELEMENTS
//query elementen
var items = document.querySelectorAll("a");
var menu = document.querySelector("nav");

//EVENT LISTENERS
//add eventlisteners
items.forEach(element => {
    element.addEventListener("click",color_green);
    element.addEventListener("dblclick",color_purple);
    element.addEventListener("mousedown",longpress_start);
    element.addEventListener("mouseup",longpress_clear);
});

//FUNCTIONS 
//SET COLORS
function color_green(e){
    console.log("color_green", this)
    this.classList.toggle("green")
    //this.classList.remove("purple")
    //e.preventDefault();
}
function color_purple(e){
    console.log("color_purple", this)
    this.classList.toggle("purple")
    //this.classList.remove("green")
    //e.preventDefault();
}
function color_highlight(me){
    console.log("color_highlight", this)
    // console.log("clearcolor", me)
    // me.classList.toggle("yellow")
    me.classList.toggle("pink")
}

//LONGPRESS 
//set timers
//na 2 sec krijgt het element een highlight
function longpress_start(e){
    //console.log("longpress", this)
    this.timer = window.setTimeout(color_highlight,2000,this);
    e.preventDefault();
}
//clear time out 
function longpress_clear(){
    clearTimeout(this.timer);
}

//KEYDOWN
document.addEventListener("keydown",keydown)
function keydown(e){

    //Toon menu
    //console.log("keydown: ",e.code)
    if(e.code == "Space"){
        console.log("TOON MENU");
        menu.classList.toggle("hide");
        e.preventDefault();
        return;
    }

    //Doe iets met een letter
    const letter = e.key;
    //console.log("keydown: " + letter)
    switch (letter) {
        case 'x':
            //als de keydown een 'x' is
            //alle classes weghalen en functie stoppen
            items.forEach(element => {
                element.classList.remove("purple")
                element.classList.remove("green")
                element.classList.remove("yellow")
                element.classList.remove("pink")
            })
            e.preventDefault();
          break;
        default:
            //check welke letter overeenkomt met de eerste letter van een element
            //de elementen krijgen een highlight
            items.forEach(element => {     
               if(element.textContent.charAt(0).toLowerCase() == letter) {
                    console.log(element)
                    element.classList.toggle("yellow")
                    e.preventDefault();
                } 
            }); //end:forEach
      };//end: switch
}

//SHOW HELPER
const helper = document.querySelector("button#help");
const helper_close = document.querySelector("nav button");
window.onload = function() {
    console.log("onload")
    document.querySelector("label[for='help']").classList.add("showhelper");
    window.focus();
  };
helper.addEventListener("click",function(e){
    menu.classList.toggle("hide")
    // e.preventDefault();
});
helper_close.addEventListener("click",function(e){
    menu.classList.toggle("hide")
    // e.preventDefault();
});
