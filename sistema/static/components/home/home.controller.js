! function (a) {
    "use strict";

    function b(a, b, c, d, e){
		//DEFINIMOS VARIABLES
		a.orden = [];
        a.ErrorServer = false;
        a.parametros = {
            search: '',
            limit: 15,
            page: 1,
            store: null
          };
        a.styleSearchPanel = {
            'transform' : '',
            'visibility': '',
            'transition':'transform 0.8s ease-out',
            'boxshadow': false
        };

           // buscador
           a.$watch('parametros.search', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                if (newValue == '') {
                    a.styleSearchPanel = {
                        'transform' : '',
                        'visibility': '',
                        'transition':'transform 0.8s ease-out',
                        'boxshadow': false
                     };
                } else {
                    a.styleSearchPanel = {
                        'transform' : 'transformado',
                        'visibility': 'visible',
                        'transition':'transform 0.8s ease-out',
                        'boxshadow': true
                    };
                }
                // console.log(newValue + 'nuevo');
                // console.log(oldValue + 'antiguo');
                // c.parametros.page = 1;
                // S.CallData(S.query);
            }
         })

        //  transition: transform 0.2s ease-out;
        // ACTIVAR CONTENT SEARCH
        a.activarSearchContent = function () {
            a.styleSearchPanel = {
                'transform' : 'transformado',
                'visibility': 'visible'
            };
        }
        // CERRAR SESSION
        a.clearSession = function(){
            b.clearAllData(), c.go("login");
        }
        //MOSTRAR DATOS DEL USUARIO
        a.DataUser = d.getUser();
        a.NameUser = a.DataUser.user.name_user;
        a.sideNav = a.DataUser.sidenav;
        // console.log(a.sideNav );
        // var codUser = a.nameUser.user.user_cod;
        
        // //SERVIRA PARA RECIBIR LAS ORDENES
        //  e.on('user_connected', function (data) {
        //     // a.orden = data;
        //     console.log("recibimos:", data);
		// 	//a.formTemp();
            
        // })
        
        // // SERVIRA PARA ENVIAR EL codigo del user
        // a.formTemp = function () {
        //     e.emit('user_connected', codUser )
    
        // }
       
		// // recibira orden si lo hay
        // e.on('new_ordenv2', function (data) {
        //      a.orden = a.orden.concat(data);
        //     console.log("OrdenRecibida:", data);
            
        // })
	
		
		// 	e.on('connect', function(){
		// 		console.log('Connected');
		// 		 a.formTemp();
		// 		a.ErrorServer = false;
		// 	});
		
		
		
		// e.on('connect_error', function(){
		// 	console.log('Connection Failed');
		// 	a.ErrorServer = true;
		// });
		// e.on('disconnect', function () {
		// 	  console.log('Disconnected');
		// 	  a.ErrorServer = true;
		// });

    }

   
    a.module("view.home.controller", [])
    .controller("homeCtrl", b)
    b.$inject = ["$scope", "$tokenStorage", "$state", "$storageService"]
    // socketio
}(angular)