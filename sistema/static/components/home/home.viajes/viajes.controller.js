// const { and } = require("@uirouter/angularjs");

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
          a.showAdvancedViaje = function (ev, data) {
            // console.log(ev, data);
            h.show({
              controller: DialogController,
              templateUrl: 'views/home/viajes/modalDialog.html',
              // Appending dialog to document.body to cover sidenav in docs app
              // Modal dialogs should fully cover application to prevent interaction outside of dialog
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true,
              fullscreen: true, // Only for -xs, -sm breakpoints.
              locals: { viajeData: data }
            }).then(function (answer) {
              a.status = 'You said the information was "' + answer + '".';
            }, function () {
              a.status = 'You cancelled the dialog.';
            });
          };

          function DialogController($scope, $mdDialog, ngDialog, viajeData, serviceviajes) {
            // DEFINIMOS VARIABLES
            // generar hash
            $scope.hash = function(name){
              return name + Math.random().toString(36).substr(2, 9);
            }
         
            $scope.datas = viajeData;
            $scope.loadingG = true;
            $scope.guias = {};
            $scope.showNoResult = false;
            var dataViaje = {
              'id_viaje': $scope.datas.cod_Viaje
            };
            $scope.dataGrTrans = {
              'codigo': $scope.hash("GRT_"),
              'idViaje': dataViaje.id_viaje
            }
            $scope.dataGrRemit = {
              'codigo': $scope.hash("GRR_"),
              'cod_grt': ""
            }
            // LLAMAMOS LAS GUIAS
            function CallGuiasTra() {
              serviceviajes.Callguias(dataViaje).then(function (data) {
                $scope.loadingG = false;
                0 === data.data.contar ? $scope.showNoResult = true : $scope.showNoResult = false; 
                $scope.guias = data.data.data;
                // $scope.PrimerArray = $scope.guias[0].cod_ngTranspor;
           

              1 > $scope.guias.length ? !0 : $scope.PrimerArray = $scope.guias[0].cod_ngTranspor, $scope.selectGuiaT(0, $scope.PrimerArray);

              });
            }
            CallGuiasTra();
            // ELEGUIMOS LA GUIA DEL TRANSPORTISTA
            $scope.selectGuiaT = function (idArr, codNgt) {
              var codGRT = {
                'codigois': codNgt
              };
              $scope.dataContent =  $scope.guias[idArr];
              // llamamos las guias del remitente
              serviceviajes.CallgrRemit(codGRT).then(function (data) {
               
                $scope.grrr = data.data.dataGrr;
                $scope.combustible = data.data.dataCom;
                $scope.gastos = data.data.datagasto;
              
              })
            
            }

           

            // MOSTRAR MODAL PARA AGREGAR GUIAS
            $scope.showFormGRT = function () {
              var idDialog = ngDialog.open({ 
                  template: 'views/home/viajes/modal/grTransportista.html', 
                  className: 'alexxxxxx',
                  scope: $scope,
                  width: '30%',
                  showClose: false,
                  closeByEscape: false,
                  disableAnimation: true,
                  closeByDocument:false
                  
               })
          };

             // AGREGAR NUEVA GUIA DE TRANSPORTISTA
             $scope.saveGrt = function (data) {
              $scope.dataGrTrans.codigo = $scope.hash("GRT_");
              console.log(data);
              serviceviajes.SaveGuiaT(data).then(function (respuesta) {
                
                var codError = respuesta.data.codError;
                var mensaje = respuesta.data.mensaje;
                "CO00" === codError ? f.error(mensaje,'Error!') : !0;
                "0E00" === codError ? f.warning(mensaje,'Cuidado!') : !0;
                "SI00" === codError ? f.success(mensaje, 'Genial!') & CallGuiasTra() & ngDialog.close()  : !0;
              })
             
            }


             // MOSTRAR MODAL PARA AGREGAR GUIAS REMITENTE
             $scope.showFormGRRemitente = function (data) {

              $scope.dataGrRemit.cod_grt = data.cod_ngTranspor;

              
              var idDialog = ngDialog.open({ 
                  template: 'views/home/viajes/modal/grRemitente.html', 
                  className: 'alexxxxxx',
                  scope: $scope,
                  width: '30%',
                  showClose: false,
                  closeByEscape: false,
                  disableAnimation: true,
                  closeByDocument:false
                  
               })
          };
           // AGREGAR NUEVA GUIA DE REMITENTE
           $scope.saveGrR = function (data) {
            $scope.dataGrRemit.codigo = $scope.hash("GRR_");
            console.log(data);
            serviceviajes.SaveGuiaR(data).then(function (respuesta) {
              $scope.selectGuiaT(0, $scope.dataGrRemit.cod_grt);

              var codError = respuesta.data.codError;
              var mensaje = respuesta.data.mensaje;
              "CO00" === codError ? f.error(mensaje,'Error!') : !0;
              "0E00" === codError ? f.warning(mensaje,'Cuidado!') : !0;
              "SI00" === codError ? f.success(mensaje, 'Genial!') & CallGuiasTra() & ngDialog.close()  : !0;
            })
           
          }

          // MOSTRAR MODAL PARA AGREGAR GASTOS OPERATIVOS
          $scope.showGastosOpe = function (data) {

            $scope.dataGrRemit.cod_grt = data.cod_ngTranspor;

            
            var idDialog = ngDialog.open({ 
                template: 'views/home/viajes/modal/showGastosOpe.html', 
                className: 'alexxxxxx',
                scope: $scope,
                width: '30%',
                showClose: false,
                closeByEscape: false,
                disableAnimation: true,
                closeByDocument:false
                
             })
        };
          // AGREGAR NUEVA GUIA DE GASTOS OPERATIVOS
          $scope.saveGasto = function (data) {
            console.log(data);
          }



        // MOSTRAR MODAL PARA AGREGAR COMBUSTIBLE
        $scope.showcombustible = function (data) {

          $scope.dataGrRemit.cod_grt = data.cod_ngTranspor;

          
          var idDialog = ngDialog.open({ 
              template: 'views/home/viajes/modal/showcombustible.html', 
              className: 'alexxxxxx',
              scope: $scope,
              width: '30%',
              showClose: false,
              closeByEscape: false,
              disableAnimation: true,
              closeByDocument:false
              
           })
      };

          // AGREGAR COMBUSTIBLE
          $scope.saveComb = function (data) {
            console.log(data);
          }

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