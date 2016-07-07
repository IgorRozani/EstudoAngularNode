'use strict';

estudoAngularNodeApp.factory('clienteService', function ($resource){
  var service = $resource('/clientes');

  return {
    getClientes: function (){
      return service.query();
    }
  };

});
