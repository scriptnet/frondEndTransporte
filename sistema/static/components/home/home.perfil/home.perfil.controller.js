! function (a) {
    "use strict";

    function b(a, c, d, e,f, g){
        // VARIABLES
        a.estado = false;
        //MOSTRAR DATOS DEL USUARIO
        a.DataUser = d.getUser();
        a.dataPerfil = a.DataUser.Perfil;
        a.cuentaUser = a.DataUser.user;
        a.authUser = a.DataUser.Auth.name_auth;
        function FD(a){
            a.estado = true;
           
            e.savePerfil(a).then(function (respuesta) {
               
                var codError = respuesta.data.codError;
                var mensaje = respuesta.data.mensaje;
       

                "CO00" === codError ? f.error(mensaje,'Error!') : !0;
                "0E00" === codError ? f.warning(mensaje,'Cuidado!') : !0;
                "SI00" === codError ? f.success(mensaje, 'Genial!') : !0;
               
              
                // f.success('Hello world!', 'Toastr fun!');
            })
        }
      
       function CD(a) {
           estado
       }

        var S = this;
        S.FormData = FD,
        S.CallData = CD;
        // S.CallData();

    }

   
    a.module("view.perfil.controller", [])
    .controller("perfilCtrl", b)
    b.$inject = ["$scope", "$state", "$storageService", "servicePerfil", "toastr"]
    // socketio
}(angular)