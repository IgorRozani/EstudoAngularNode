estudoAngularNodeApp.controller('ClienteController', function ClienteController($scope){
  $scope.clientes = [
    { codigo : 1, nome : 'Joao Marcelo', dataNascimento: '1986-09-10T00:00:00Z'},
    { codigo : 2, nome : 'Raimundo Ferreira', dataNascimento: '1972-05-16T00:00:00Z'},
    { codigo : 3, nome : 'José Agusto', dataNascimento: '2000-12-31T00:00:00Z'},
    { codigo : 4, nome : 'Pedro Vieira', dataNascimento: '1995-01-02T00:00:00Z'},
    { codigo : 5, nome : 'Mauricio Garcia', dataNascimento: '1990-10-19T00:00:00Z'}
  ];
});
