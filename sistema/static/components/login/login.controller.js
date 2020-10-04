! function(a) {
    "use strict";
    
    
    function b(c, d, e, f) {
      c.estado = false;
      c.mensaje = {
        estado: false,
        texto: ""
      };
    function doctor(a){
      console.log(a.data.scope);
      f.setUser(a.data.scope);

      a.data.errorCode === "S000" ? e.go("home") : false
     }

      function R(a){
        c.estado = true;
        var data = {
          pass : a.pass,
          user : a.user
        }

        d.login(data).then(function(a){
          console.log(a);
          c.estado = false;
          switch (a.status) {
            case 200:
               doctor(a);
              break;
            case 401:
              c.mensaje = {
                estado: true,
                texto: "Estas credenciales no coinciden con nuestros registros."
              };
                break;
            default:
              c.mensaje = {
                estado: true,
                texto: "Error de servidor"
              };
              break;
          }
        });
      }

      this.formLogin = R; 
    }

    a.module("view.login.controller", [])
    .controller("loginCtrl", b),

    b.$inject = ["$scope", "loginService", "$state", "$storageService"]
}(angular)