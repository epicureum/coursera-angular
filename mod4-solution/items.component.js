(function() {
 
 angular.module('MenuApp')
 .component('items', {
  templateUrl: 'items.component.html',
  bindings: {
   details: '<'
  }
 });
            
})();