! function (a) {
    "use strict";

    function b(a, b, c) {
        return {
            loadMyCtrl: ["$ocLazyLoad", "$rootScope", "$timeout", function(d, e, f) {
                var g = [].concat(a, b || []);
                return e[c] = !0, d.load(g).then(function() {
                    f(function() {
                        e[c] = !1
                    }, 1e3)
                })
            }]
        }
    }

    function c(a, c, d) {
        // d.hashPrefix('scriptnet');
        // console.log(c);
        
        c.otherwise(d.PATH_LOGIN),
		c.when(d.PATH_HOME, d.PATH_HOME + d.PATH_DASH), 
        c.when(d.PATH_HOME + "/", d.PATH_HOME + d.PATH_DASH), 
        //EMPLEADOS
        c.when(d.PATH_HOME + d.PATH_EMPLEADOS, d.PATH_HOME + d.PATH_EMPLEADOS + d.PATH_PLANILLA),
        c.when(d.PATH_HOME + d.PATH_EMPLEADOS + "/", d.PATH_HOME + d.PATH_EMPLEADOS + d.PATH_PLANILLA),
         //FLOTA
        c.when(d.PATH_HOME + d.PATH_FLOTA, d.PATH_HOME + d.PATH_FLOTA + d.PATH_FLOTA_REMOLQUE),
        c.when(d.PATH_HOME + d.PATH_FLOTA + "/", d.PATH_HOME + d.PATH_FLOTA + d.PATH_FLOTA_REMOLQUE),
        //CLIENTES
        c.when(d.PATH_HOME + d.PATH_CLIENTES, d.PATH_HOME + d.PATH_CLIENTES + d.PATH_CLIENTES_CLIENTE),
        c.when(d.PATH_HOME + d.PATH_CLIENTES + "/", d.PATH_HOME + d.PATH_CLIENTES + d.PATH_CLIENTES_CLIENTE),
        a.state("login", {
            url: d.PATH_LOGIN,
            controller: "loginCtrl",
            controllerAs: "login",
            templateUrl: "views/login/login.html",
            resolve: b("view.login", [])
        }),
        a.state("home",{
            url: d.PATH_HOME,
            controller: "homeCtrl",
            controllerAs: "homeVM",
            templateUrl: "views/home/home.html",
            resolve: b("view.home", [])
           
        }),
        a.state("home.dashboard", {
            url: d.PATH_DASH,
            // controller: "dashboardCtrl",
            // controllerAs: "dashVM",
            templateUrl: "views/home/dashboard/dashboard.html",
            // resolve: b("view.dashboard", [])
        }),
        a.state("home.clientes",{
            url: d.PATH_CLIENTES,
            // controller: "viajesCtrl",
            // controllerAs: "viajesVM",
            templateUrl: "views/home/clientes/clientes.html",
            // resolve: b("view.viajes", [])
        }),
        a.state("home.clientes.cliente",{
            url: d.PATH_CLIENTES_CLIENTE,
            controller: "clientesCtrl",
            controllerAs: "clienteVM",
            templateUrl: "views/home/clientes/cliente/cliente.html",
            resolve: b("view.cliente", [])
        }),
        a.state("home.clientes.rutas",{
            url: d.PATH_CLIENTES_RUTAS,
            controller: "rutasCtrl",
            controllerAs: "rutasVM",
            templateUrl: "views/home/clientes/rutas/rutas.html",
            resolve: b("view.rutas", [])
        }),
        a.state("home.clientes.tarifas",{
            url: d.PATH_CLIENTES_TARIFAS,
            controller: "tarifasCtrl",
            controllerAs: "tarifasVM",
            templateUrl: "views/home/clientes/tarifas/tarifas.html",
            resolve: b("view.tarifas", [])
        }),
        a.state("home.flota",{
            url: d.PATH_FLOTA,
            // controller: "settingsCtrl",
            // controllerAs: "settingsVM",
            templateUrl: "views/home/flota/flota.html",
            // resolve: b("view.settings", [])
        }),
        a.state("home.flota.remolque",{
            url: d.PATH_FLOTA_REMOLQUE,
            controller: "remolqueCtrl",
            controllerAs: "remolqueVM",
            templateUrl: "views/home/flota/remolque/remolque.html",
            resolve: b("view.remolque", [])
        }),
        a.state("home.flota.semiremolque",{
            url: d.PATH_FLOTA_SEMIREMOLQUE,
            controller: "semiremolqueCtrl",
            controllerAs: "semiremolqueVM",
            templateUrl: "views/home/flota/semiremolque/semiremolque.html",
            resolve: b("view.semiremolque", [])
        }),
        a.state("home.viajes",{
            url: d.PATH_VIAJE,
            controller: "viajesCtrl",
            controllerAs: "viajesVM",
            templateUrl: "views/home/viajes/viajes.html",
            resolve: b("view.viajes", [])
        }),
        a.state("home.mantenimiento",{
            url: d.PATH_MANTENIMIENTO,
            // controller: "settingsCtrl",
            // controllerAs: "settingsVM",
            templateUrl: "views/home/mantenimiento/mantenimiento.html",
            // resolve: b("view.settings", [])
        }),
        a.state("home.reportes",{
            url: d.PATH_REPORTES,
            // controller: "settingsCtrl",
            // controllerAs: "settingsVM",
            templateUrl: "views/home/reportes/reportes.html",
            // resolve: b("view.settings", [])
        }),
        a.state("home.empleados",{
            url: d.PATH_EMPLEADOS,
            // controller: "settingsCtrl",
            // controllerAs: "settingsVM",
            templateUrl: "views/home/empleados/empleados.html",
            // resolve: b("view.settings", [])
        }),
        a.state("home.empleados.planilla",{
            url: d.PATH_PLANILLA,
            controller: "planillaCtrl",
            controllerAs: "planillaVM",
            templateUrl: "views/home/empleados/planilla/planilla.html",
            resolve: b("view.planilla", [])
        }),
        a.state("home.empleados.asistencia",{
            url: d.PATH_ASISTENCIA,
            // controller: "settingsCtrl",
            // controllerAs: "settingsVM",
            templateUrl: "views/home/empleados/asistencia/asistencia.html",
            // resolve: b("view.settings", [])
        }),
        a.state("home.empleados.pagosueldo",{
            url: d.PATH_PAGOSUELDO,
            // controller: "settingsCtrl",
            // controllerAs: "settingsVM",
            templateUrl: "views/home/empleados/pagoSueldo/pagoSueldo.html",
            // resolve: b("view.settings", [])
        }),
        a.state("home.empleados.usuario",{
            url: d.PATH_USUARIO,
            // controller: "settingsCtrl",
            // controllerAs: "settingsVM",
            templateUrl: "views/home/empleados/usuarios/usuarios.html",
            // resolve: b("view.settings", [])
        }),
        a.state("home.documentos",{
            url: d.PATH_DOCUMENTOS,
            // controller: "settingsCtrl",
            // controllerAs: "settingsVM",
            templateUrl: "views/home/documentos/documentos.html",
            // resolve: b("view.settings", [])
        }),

        a.state("home.perfil",{
            url: d.PATH_PERFIL,
            controller: "perfilCtrl",
            controllerAs: "perfilVM",
            templateUrl: "views/home/perfil/perfil.html",
            resolve: b("view.perfil", [])
        }),
        a.state("home.ordenTrabajo",{
            url: d.PATH_ORDEN_TRABAJO,
            controller: "ordenTrabajoCtrl",
            controllerAs: "ordenTrabajoVM",
            templateUrl: "views/home/ordenTrabajo/ordenTrabajo.html",
            resolve: b("view.ordenTrabajo", [])
        }),

        
        a.state("home.settings",{
            url: d.PATH_SETTINGS,
            controller: "settingsCtrl",
            controllerAs: "settingsVM",
            templateUrl: "views/settings/settings.html",
            resolve: b("view.settings", [])
        }),
        a.state("home.settings.account",{
            url: d.PATH_ACCOUNT,
            controller: "accountCtrl",
            controllerAs: "accountVM",
            templateUrl: "views/account/account.html",
            resolve: b("view.account", [])
        }), 
        a.state("home.productos",{
            url: d.PATH_PRODUCTS,
            controller: "productCtrl",
            controllerAs: "productVM",
            templateUrl: "views/product/product.html",
            resolve: b("view.products", [])
        }), 
        a.state("home.orden",{
            url: d.PATH_ORDER,
            controller: "ordenCtrl",
            controllerAs: "ordenVM",
            templateUrl: "views/orden/orden.html",
            resolve: b("view.orden", [])
        }), 
        a.state("home.drive",{
            url: d.PATH_DRIVER,
            controller: "driverCtrl",
            controllerAs: "driverVM",
            templateUrl: "views/driver/driver.html",
            resolve: b("view.driver", [])
        }),
        a.state("home.drive.perfil",{
            url: d.PATH_DRIVER_PERFIL,
            controller: "driverPerfilCtrl",
            controllerAs: "driverPerfilVM",
            templateUrl: "views/driver/perfil/perfil.html",
            params: {
                objDriver: null,
            },
            resolve: b("view.driverPerfil", [])
        })
        ,
        a.state("home.drive.pagos",{
            url: d.PATH_DRIVER_PAGOS,
            // controller: "driverPerfilCtrl",
            // controllerAs: "driverPerfilVM",
            templateUrl: "views/driver/pagos/pagos.html",
            // resolve: b("view.driverPerfil", [])
        })
       

    }



    a.module("routes", [])
    .config(c), 
    c.$inject = ["$stateProvider", "$urlRouterProvider", "constantsPath"]
}(angular)