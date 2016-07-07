estudoAngularNodeApp.controller('ClienteController', function ClienteController($scope, clienteService){
  $scope.clientes = clienteService.getClientes();
});
