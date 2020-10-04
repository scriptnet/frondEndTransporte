! function(a){
    "use strict";

    function index(a) {
     
     
      
    }
    function c(d){
        
        d.interceptors.push("coreInterceptor"); 
        d.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest",
        d.defaults.withCredentials = !0
    }

    function b(a, c) {
        a.title = "Hola mundo";
        a.estadoServidor = function (cod) {
          console.log(cod);
          "CO00" === cod ? c.error('Error de servidor','Error!') : !0;
          


       
        }
    }
    a.module("app", ["module.third-parties", "module.core", "routes"])
    .run(index)
    .config(c)
    .config(function(toastrConfig) {
        angular.extend(toastrConfig, {
          autoDismiss: false,
          containerId: 'toast-container',
          maxOpened: 0,    
          newestOnTop: true,
          positionClass: 'toast-bottom-center',
          preventDuplicates: false,
          preventOpenDuplicates: false,
          target: 'body'
        });
      })
    .run(function($state){
        window.myAppErrorLog = [];
        $state.defaultErrorHandler(function(error) {
            console.log(error);
            
          // This is a naive example of how to silence the default error handler.
          window.myAppErrorLog.push(error);
        });
    })
    .controller("appController", b),
    index.$inject = ["$location"];
    b.$inject = ["$rootScope", "toastr"];
    c.$inject = ["$httpProvider"];


}(angular)