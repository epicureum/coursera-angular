(function() {
 
 angular.module('data')
 .service('MenuDataService', MenuDataService)
 
 MenuDataService.$inject = ['$http'];
 
 function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });
  };


  service.getItemsForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };

}
})();