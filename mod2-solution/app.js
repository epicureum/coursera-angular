(function(){
    'use strict';

    angular
        .module('ShoppingListCheckOff', [])
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .controller('ToBuyController', ToBuyController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController (ShoppingListCheckOffService){
    this.lista = ShoppingListCheckOffService.toBuy;

    this.buyThis = function(index) {ShoppingListCheckOffService.buyThis(index);};

}


AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
function AlreadyBoughtController (ShoppingListCheckOffService) {
    this.lista = ShoppingListCheckOffService.bought;
};


function ShoppingListCheckOffService () {
    var service = this;

    service.toBuy = [{name:'pizza', quantity:'2'},
                    {name:'sushi', quantity:'8'},
                    {name:'beer', quantity:'6'},
                    {name:'wine', quantity:'1'},
                    {name:'chocolate', quantity:'10'}];
    
    service.bought = [];

    service.buyThis= function (index){
              service.bought.push(service.toBuy[index]);
              service.toBuy.splice(index, 1);
    };
}

}());