"use strict";
let inventory= [];
let bakery= {};

// let fillInventory= (data)=>{
//     data.cakes.forEach(function(element){
//         inventory.push(element);
//     });
// };
// bakery.getInventory= () =>{
//     return inventory;
// };

bakery.loadInventory= () =>{
    return new Promise(function(resolve,reject){
        $.ajax({
            url: "inventory.json",
            success: function(data){
                resolve(data);
                console.log(data);
            }
        });
    });
};
module.exports= bakery;