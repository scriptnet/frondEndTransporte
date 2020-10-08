
//  console.log(hbkProperties.IP_BACKEND); 

angular.module("init",[]),

function (a) {
    a.module("core.constants.path", [])
    .constant("constantsPath",{
        PATH_LOGIN: "/login",
        PATH_HOME: "/home",
        PATH_DASH: "/dashboard",
        PATH_SETTINGS:"/settings",
        PATH_PERFIL: "/perfil",
        PATH_FLOTA: "/flota",
        PATH_VIAJE: "/viajes",
        PATH_MANTENIMIENTO: "/mantenimiento",
        PATH_REPORTES: "/reportes",
        PATH_EMPLEADOS: "/empleados",
        PATH_DOCUMENTOS: "/documentos",
        PATH_ORDEN_TRABAJO: "/orden_trabajo",
        PATH_PLANILLA:"/planilla",
        PATH_ASISTENCIA:"/asistencia",
        PATH_PAGOSUELDO:"/pagosueldo",
        PATH_USUARIO:"/usuario",


        PATH_ACCOUNT: "/account",
        PATH_PRODUCTS: "/products",
        PATH_ORDER: "/order",
        PATH_DRIVER: "/driver",
        PATH_DRIVER_PERFIL: "/driverPerfil",
        PATH_DRIVER_PAGOS: "/driverPagos",
        PATH_DRIVER_INFO: "/driverInfo"
    }).constant("USER_ROLES",{
        all : '*',
        admin : 'admin',
        editor : 'editor',
        guest : 'guest'
    }).constant('AUTH_EVENTS', {
        loginSuccess : 'auth-login-success',
    }).constant('IPBACKEND', {
        // IP_BACKEND: 'http://67.207.87.91//apiTransporte/rest'
        IP_BACKEND: 'http://192.168.43.98//apiTransporte/rest'
    })
    
}(angular),

// socketIO
function (a) {
    
    function b(a) {
        var socket = io.connect("http://127.0.0.1:2021");
        return {
            on: function (eventName, callback) {
                socket.on(eventName, function () { 
                    var args = arguments;
                    a.$apply(function () {
                      callback.apply(socket, args);
                    });
                })
            },
            emit: function (eventName, data, callback) {
                socket.emit(eventName, data, function () {
                  var args = arguments;
                  a.$apply(function () {
                    if (callback) {
                      callback.apply(socket, args);
                    }
                  });
                })
              }
        };
    }

    a.module("core.socketio.service",[])
    .factory("socketio", b),
    b.$inject = ["$rootScope"]
}(angular),

function (a) {
    

    a.module("component.loader.directives",[])
    .component("matProgressBar", {
            templateUrl: "static/components/loader/loader_1.html",
    }).component("noResultsMessage", {
            templateUrl: "static/components/loader/mesNoResult.html",
    })  

}(angular),
// BASE64 ENCODE AND DECODE
function(a) {
    "use strict";

    function b() {
         var keys = this;
         keys.keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        
        function a(a) {
            var b, c, d, e, f, g = "",
                h = "",
                i = "",
                j = 0;
            do b = a.charCodeAt(j++), c = a.charCodeAt(j++), h = a.charCodeAt(j++), d = b >> 2, e = (3 & b) << 4 | c >> 4, f = (15 & c) << 2 | h >> 6, i = 63 & h, isNaN(c) ? f = i = 64 : isNaN(h) && (i = 64), g = g + keys.keyStr.charAt(d) + keys.keyStr.charAt(e) + keys.keyStr.charAt(f) + keys.keyStr.charAt(i), b = c = h = "", d = e = f = i = ""; while (j < a.length);
            return g
        }

        function b(a) {
            var b, c, d, e, f, g = "",
                h = "",
                i = "",
                j = 0,
                k = /[^A-Za-z0-9\+\/\=]/g;
            k.exec(a) && window.alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do d = keys.keyStr.indexOf(a.charAt(j++)), e = keys.keyStr.indexOf(a.charAt(j++)), f = keys.keyStr.indexOf(a.charAt(j++)), i = keys.keyStr.indexOf(a.charAt(j++)), b = d << 2 | e >> 4, c = (15 & e) << 4 | f >> 2, h = (3 & f) << 6 | i, g += String.fromCharCode(b), 64 !== f && (g += String.fromCharCode(c)), 64 !== i && (g += String.fromCharCode(h)), b = c = h = "", d = e = f = i = ""; while (j < a.length);
            return g
        }
      
        var c = {
            encode: a,
            decode: b
        };
        return c
    }
    a.module("core.encript.services", []).factory("$encriptService", b)
}(angular),
// Storage service
function (a) {
    "use strict";
    function b(c, e) {
        
        function u() {
            var data = c.sessionStorage.getItem("USERDATA");
                try {
                    return data = e.decode(data), JSON.parse(data)
                } catch (u) {
                    return null
                }
            
        }
        
        function v(a) {
            return a = JSON.stringify(a),
                    a= e.encode(a),
                    c.sessionStorage.setItem("USERDATA", a)
        }
    
        var X = {
            getUser: u,
            setUser: v
        }
        return X
    }
   

    a.module("core.storage.services",[])
    .factory("$storageService", b),
    b.$inject = ["$window", "$encriptService"]
}(angular),


//sessionstorage
function (a) {
    
    a.module("core.token.factory",[])
    .factory("$tokenStorage", function() {
        return {
            storeAnyToken: function (a, b) {
                return b ? (sessionStorage.setItem(a, b), !0) : !1
            },
            retrieveAnyToken: function(a) {
                return a ? sessionStorage.getItem(a) : ""
            },
            clearAnyToken: function(a) {
                sessionStorage.removeItem(a)
            },
            clearAllData: function() {
                sessionStorage.clear()
            },
        }
    })
}(angular),


//interceptores
function(a){
    "use strict";
    function b(c,d, e, f, g, h){

        //success peticio
        function l(a) {
            // var c = null;
           
            if("POST" === a.method){
                // a.headers.KEY = c
                var c = e.retrieveAnyToken("INITKEY"),
                    d = g.getUser();
                  
                    a.headers.INITKEY = c, d == null ? true : a.headers.CODUSER = d.user.cod_usuario;
                
                    

            }
            
            return a
        }

        //respuesta success
        function m(response) {
         
            if ("GET" === response.config.method) {
                null === e.retrieveAnyToken("INITKEY") ? f.get("$state").go("login") : !0
            }
            if ("POST" === response.config.method) {
                e.storeAnyToken("INITKEY", response.headers("INITKEY"));
                "CO00" === response.data.codError ? f.get("$state").go("login") && e.clearAllData() : !0

                
            }

           

            return response;
        }

         //respuesta error
         function n(rejection) {
            // console.log(rejection);
            c.estadoServidor('CO00');
            // h.error('ERROR DE SERVIDOR','Error!');
           
            return rejection || d.when(rejection);
        }

        //peticion error
        function o(rejection) {
            c.estadoServidor('0E00');
            // console.log(rejection);
            return rejection || d.when(rejection);
        }

        var n = {
            request: l,
            response: m,
            responseError: n,
            requestError: o
        };
        return n
    }

    a.module("core.auth.interceptor",[])
    .factory("coreInterceptor", b),
    b.$inject = ["$rootScope", "$q", "$tokenStorage", "$injector", "$storageService"]

}(angular),

function (a) {
    
    a.module("infinite-scroll").value('THROTTLE_MILLISECONDS', 200)
}(angular),

function(a){
    "use strict";
    a.module("module.core",["ocLazyLoad.component", "core.constants.path","core.auth.interceptor", "core.token.factory", "core.encript.services", "core.storage.services", "component.loader.directives", "core.socketio.service"])
}(angular),

function(a){
    "use strict";

    a.module("module.third-parties", ['oc.lazyLoad', 'ui.router', 'ngSanitize', 'ngMaterial', 'ngMessages', 'md.data.table', 'infinite-scroll', 'ngAnimate','toastr', 'ngDialog'])
}(angular)