"use strict";
console.log("main has loaded");
let Handlebars= require("hbsfy/runtime"),
    cakeInventory= require("./bakery.js"),
    cakeTemplate= require("../templates/cake-grid.hbs"),
    eventStuff= require("./events.js"),
    welcomeTemplate= require("../templates/welcome.hbs"),
    welcomeData= require("../templates/welcome-data.js");
    
Handlebars.registerHelper("increment", (value)=> parseInt(value)+1);

$("#welcome").append(welcomeTemplate(welcomeData));
function populatePage(event){
    let newDiv= document.createElement('div');
    newDiv.innerHTML= cakeTemplate(event);
    $("#cakeCards").append(newDiv);
    eventStuff();
    console.log(event);
}

cakeInventory.loadInventory()
.then(
    (inventoryFromLoadInventoryResolve)=>{
        console.log('cake promise', inventoryFromLoadInventoryResolve);
        populatePage(inventoryFromLoadInventoryResolve);
        console.log(inventoryFromLoadInventoryResolve);
},
(reason)=>{
    console.log('An error occured');
});