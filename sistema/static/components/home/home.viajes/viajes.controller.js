! function (a) {
    "use strict";

    function b(a, c, d, e,f, g, h){
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
        // a.clickToOpen = function () {
        //     var idDialog = g.open({ 
        //         template: 'views/home/empleados/planilla/popupTmpl.html', 
        //         className: 'ngdialog-theme-default',
        //         controller: 'ModalCtrl',
        //         scope: a,
        //         width: '50%',
        //         showClose: false,
        //         closeByEscape: false,
        //         disableAnimation: true,
        //         // closeByDocument:false
        //      });

        //      idDialog.closePromise.then(function (data) {
        //         console.log(data.id + ' has been dismissed.');
        //     });
        // };
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


            // ============================
            // ABRIR MENU
            // ============================
        var originatorEv;

        a.openMenu = function($mdMenu, ev) {
            originatorEv = ev;
            $mdMenu.open(ev);
          };


            // ============================
            // ABRIR MODAL
            // ============================
          a.showAdvanced = function (ev) {
            h.show({
              controller: DialogController,
              templateUrl: 'views/home/viajes/modalDialog.html',
              // Appending dialog to document.body to cover sidenav in docs app
              // Modal dialogs should fully cover application to prevent interaction outside of dialog
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true,
              fullscreen: true // Only for -xs, -sm breakpoints.
            }).then(function (answer) {
              a.status = 'You said the information was "' + answer + '".';
            }, function () {
              a.status = 'You cancelled the dialog.';
            });
          };

          function DialogController($scope, $mdDialog, ngDialog) {

            $scope.showFormGRT = function () {
              var idDialog = ngDialog.open({ 
                  template: 'views/home/viajes/modal/grTransportista.html', 
                  className: 'alexxxxxx',
                  // controller: 'ModalCtrl',
                  scope: $scope,
                  width: '30%',
                  // height: 00,
                  showClose: false,
                  closeByEscape: false,
                  disableAnimation: true,
                  closeByDocument:false
                  
               })


               $scope.testAlex = "alexxxxxxxxxxx";


               $scope.confirm = function(data){
                // b.close("dataaaaaa");
                // close(data);
                console.log(data);
        
              }
              //  .then(function (modal) {
              //   console.log(modal);
              //   // modal.dataConfirm.then(function (data) {
              //   //   console.log(data);
              //   // })
              //  });
            console.log(idDialog);
               idDialog.closePromise.then(function (dataGrTrans) {
                console.log(dataGrTrans);
              });
          };

            

            $scope.hide = function () {
              $mdDialog.hide();
            };
        
            $scope.cancel = function () {
              $mdDialog.cancel();
            };
        
            $scope.answer = function (answer) {
              $mdDialog.hide(answer);
            };
          }



        var S = this;
        S.FormData = FD,
        S.CallData = CD;
        S.CallData();

    }
    // ============================
    // CONTROLADOR DEL POPUP GRTRANSPPORTE Y REMITENTE
    // ============================
   function d(a, b) {
       a.dataGrTrans = {
         'numeroGT': '',
         'puntoPart': '',
         'putnoFin': ''
       };
      // a.closeThisDialog = function(data){

       console.log(b);
      //   b.close();
      // }
      a.confirm = function(data){
        b.close("dataaaaaa");
        // close(data);
        // console.log(data);

      }
      
   }
    a.module("view.viajes.controller", [])
    .controller("viajesCtrl", b)
    .controller("ModalCtrl", d)
    d.$inject = ["$scope", "ngDialog",]
    b.$inject = ["$scope", "$state", "$storageService", "serviceviajes", "toastr", 'ngDialog', '$mdDialog']
    // socketio
}(angular)