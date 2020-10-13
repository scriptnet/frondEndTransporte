! function (a) {
    "use strict";

    function b(a, c, d, e,f, g){
        // VARIABLES
        
          a.hash = function(name){
            return name + Math.random().toString(36).substr(2, 9);
          }

        a.desserts = '';
        a.clientes = {};
        a.rutas = {};
        a.tiposCarga = {};
        a.estado = false;
        a.isLoading = true;
        a.showMessage = false;
        a.parametrosChild = {
            search: '',
            limit: 15,
            page: 1,
          };
        a.NumeroViaje = 0;
            // ============================
            // ABRIR EL POPUP
            // ============================
        a.clickToOpen = function () {
           
            var idDialog = g.open({ 
                template: 'views/home/clientes/tarifas/modal/tarifasModal.html', 
                className: 'alexxxxxx',
                // controller: 'ModalCtrl',
                scope: a,
                width: '30%',
                // height: 00,
                showClose: false,
                closeByEscape: false,
                disableAnimation: true,
                closeByDocument:false
                
             })
          console.log(idDialog);
             idDialog.closePromise.then(function (dataGrTrans) {
              console.log(dataGrTrans);
            });
        };

        a.saveOrden = function (data) {
            FD(data);
            // console.log(data);
        }
        a.editTarifas = function (data) {
            a.clickToOpen();
            a.dataTarifa = data;
            console.log(data);
          
           
        }
        a.ShouModal = function () {
            a.clickToOpen();
            a.dataTarifa = {};
        }



        
            // ============================
            // FUNCION PARA GUARDAR
            // ============================
        function FD(data){
            a.estado = true;
            data.numViaje = a.NumeroViaje; 
            data.codigo = a.hash('VIA_');
            console.log(data);
            e.saveData(data).then(function (respuesta) {
        
                a.estado = false;
                // CD();
                console.log(respuesta);
                var codError = respuesta.data.codError;
                var mensaje = respuesta.data.mensaje;
       

                "CO00" === codError ? f.error(mensaje,'Error!') : !0;
                "0E00" === codError ? f.warning(mensaje,'Cuidado!') : !0;
                "SI00" === codError ? f.success(mensaje, 'Genial!') && c.go('home.viajes')  : !0;
               
            
            })
        }
            // ============================
            // FUNCION PARA LLAMAR
            // ============================
       function CD() {
          a.isLoading = true;
          a.promise =  e.callData(a.parametrosChild).then(function (data) {
            // console.log(data);
       
           
            a.isLoading = false;

            0 === data.data.arrayCount ? a.showMessage = true : a.showMessage = false; 
            a.clientes = data.data.data;
            a.datatarifa =  data.data.datatarifa;
            a.SemRemolqu = data.data.SemRemolqu;
            a.dataremolq = data.data.dataremolq;
            a.ConductorData = data.data.ConductorData;
            

            0 === data.data.NumeroViaje.length ?  a.NumeroViaje = 1 : a.NumeroViaje = Number(data.data.NumeroViaje[0].numero_Viaje) + 1;
           
           
          });
        
       }
 



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
    a.module("view.ordenTrabajo.controller", [])
    .controller("ordenTrabajoCtrl", b)
    .controller("ModalCtrl", d)
    d.$inject = []
    b.$inject = ["$scope", "$state", "$storageService", "serviceordenTrabajo", "toastr", 'ngDialog']
    // socketio
}(angular)