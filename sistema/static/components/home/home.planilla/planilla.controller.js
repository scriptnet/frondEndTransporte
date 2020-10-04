! function (a) {
    "use strict";

    function b(a, c, d, e,f, g){
        // VARIABLES
        a.estado = false;
        a.prueba = "alex";
        a.clickToOpen = function () {
            var idDialog = g.open({ 
                template: 'views/home/empleados/planilla/popupTmpl.html', 
                className: 'ngdialog-theme-default',
                controller: 'ModalCtrl',
                scope: a,
                width: '50%',
                showClose: false
             });

             idDialog.closePromise.then(function (data) {
                console.log(data.id + ' has been dismissed.');
            });
        };
         //   FUNCION GUARDAR EMPLEADO
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
       //   FUNCION LLAMAR EMPLEADO
       function CD(a) {
           estado
       }

        var S = this;
        S.FormData = FD,
        S.CallData = CD;
        // S.CallData();

    }

   function d(a) {
       console.log("alex");
   }
    a.module("view.planilla.controller", [])
    .controller("planillaCtrl", b)
    .controller("ModalCtrl", d)
    d.$inject = []
    b.$inject = ["$scope", "$state", "$storageService", "serviceplanilla", "toastr", 'ngDialog']
    // socketio
}(angular)