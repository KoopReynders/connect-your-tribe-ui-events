// Learn JavaScript Touch Events In 17 Minutes
// https://www.youtube.com/watch?v=TaPdgj8mucI


//TOUCH
document.addEventListener("touchstart", e => {
    console.log("touch start")
})
document.addEventListener("touchmove", e => {
    console.log("Move")
})
document.addEventListener("touchend", e => {
    console.log("touch end")
})