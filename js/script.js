const slider = document.querySelector(".slider");
const back = document.querySelector(".back");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();


tl.fromTo(slider, 1,{height: "0%"},{height:"100%", ease:Power2.easeInOut},)
.fromTo(slider, 1.2, {width:"100%"}, {width:"90%", ease:Power2.easeInOut})
.fromTo(back, 1.2, {y:"-100%"}, {y:"0%",ease:Power2.easeInOut})
.fromTo(logo, 1, {opacity:"0", x:"-20"}, {opacity:"1", x:"0",ease:Power2.easeInOut})
.fromTo(menu, 1, {opacity:"0", x:"20"}, {opacity:"1", x:"0",ease:Power2.easeInOut},"-=1")
.fromTo(headline, 1, {opacity:"0", y:"-20"}, {opacity:"1", y:"0",ease:Power2.easeInOut},"-=1")

;