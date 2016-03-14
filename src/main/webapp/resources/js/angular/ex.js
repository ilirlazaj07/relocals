angular.module('plunker', []);
function DialogDemoCtrl($scope){

  // Inlined template for demo
  var t =  '<div class="modal hide fade" id="caricamento" role="dialog">'+
                '<div class="modal-dialog">'+
                '</div>'+
            '</div>';
  $scope.opts = {
    backdrop: true,
    keyboard: true,
    backdropClick: true,
    controller: "TestDialogController",
    template:  t //  
  };
  
  $scope.initialized = false;
  
  $dialog.dialog($scope.opts).open()
      .then(function(result) {
          $scope.initialized = result.isInitialized;
          $scope.data = result.data;
          console.log("Done Loading Data");
          app.directive("myWidget", function() {
  return {
    restrict: "E",
    replace: true,
    template: "<p>Hello World</p>"
  };
});
      });
 
}

function TestDialogController($scope, $timeout, dialog){
  //simulate $http get
  $timeout(function() {
         var httpGetData = [1, 2, 3, 4];
         console.log("Loading Data");
        dialog.close({ isInitialized: true, data: httpGetData });         
  }, 3000);
}
