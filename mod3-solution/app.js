(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',foundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
    
   var ctrl = this;
   ctrl.getFilteredList = function (){
       if (ctrl.searchTerm != "") 
         {MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(response){ctrl.found=response;});}
       else
         { ctrl.found=[];}
     } 

    ctrl.removeItem = function(index){
        ctrl.found.splice(index,1);
    }
};


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
 
    return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
        }).then(function(response) {
            var items = response['data']['menu_items'];
            var foundItems = [];
            for (var i = 0; i < items.length; ++i) {
                if (items[i]['description'].indexOf(searchTerm) !== -1) {
                    foundItems.push(items[i]);}
                }
                return foundItems;
        })
        .catch(function(error){
            console.log("$http error: ", error);
        });
    };

}

function foundItems () {
   return {
       templateUrl : "foundItems.directive.html",
       scope : {
            foundItems : '<',
            onRemove : '&'
       }
   } 
}

})();


