! function (a) {
    "use strict";

    function b(a, c, d, e,f, g){
        // VARIABLES
        a.desserts = '';
        a.estado = false;
        a.isLoading = true;
        a.showMessage = false;
        a.busy = false;
        a.totalPaginas = 0;
        a.parametrosChild = {
            search: '',
            limit: 15,
            page: 1,
          };
            // ============================
            // ABRIR EL POPUP
            // ============================
        a.clickToOpen = function () {
            var idDialog = g.open({ 
                template: 'views/home/empleados/planilla/popupTmpl.html', 
                className: 'ngdialog-theme-default',
                controller: 'ModalCtrl',
                scope: a,
                width: '50%',
                showClose: false,
                closeByEscape: false,
                disableAnimation: true,
                // closeByDocument:false
             });

             idDialog.closePromise.then(function (data) {
                console.log(data.id + ' has been dismissed.');
            });
        };
            // ============================
            // FUNCION PARA GUARDAR
            // ============================
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
            // ============================
            // FUNCION PARA LLAMAR
            // ============================
       function CD() {
          a.isLoading = true;
          a.promise =  e.callData(a.parametrosChild).then(function (data) {
            console.log(data);
            a.desserts  = data.data.data;
            a.parametrosChild.page = data.data.pagActual;
            a.totalPaginas = data.data.totalPaginas;
            a.isLoading = false;

            0 === data.data.arrayCount ? a.showMessage = true : a.showMessage = false; 

          });
        
       }
            // ============================
            // FUNCION PARA EL SCROLL INFINITO
            // ============================
       a.loadMore = function(){
                if ( a.busy ) {
                    return;
                }

                if ( a.parametrosChild.page >= a.totalPaginas) {
                return;
                }
                a.isLoading = true;
                a.busy = true;
                a.parametrosChild.page = a.parametrosChild.page + 1;

                e.callData(a.parametrosChild).then(function (data) {
                a.desserts = a.desserts.concat(data.data.data);
               
                }, function (error) {
                console.log('error', error);
                }).finally(function () {
                a.busy = false;
                a.isLoading = false;
                // $rootScope.isLoading = false;
            });
        }

            // ============================
            // ESCUCHAR BUSCADOR
            // ============================
          a.$watch('parametrosChild.search', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                a.parametrosChild.page = 1;
                S.CallData(S.query);
            }
         });





        var S = this;
        S.FormData = FD,
        S.CallData = CD;
        S.CallData();

    }
    // ============================
    // CONTROLADOR DEL POPUP
    // ============================
   function d(a) {
    //    console.log("alex");
   }
    a.module("view.planilla.controller", [])
    .controller("planillaCtrl", b)
    .controller("ModalCtrl", d)
    d.$inject = []
    b.$inject = ["$scope", "$state", "$storageService", "serviceplanilla", "toastr", 'ngDialog']
    // socketio
}(angular)