! function (a) {
    "use strict";

    function b(a) {
        a.config({
            modules:[{
                        name: "view.dashboard",
                        files: [
                            "static/components/dashboard/dashboard.controller.js",
                            "static/components/dashboard/dashboard.module.js",
                        ]
                    },{
                        name: "view.login",
                        files: [
                            "static/components/login/login.controller.js",
                           // "static/components/login/login.factory.js",
                            "static/components/login/login.service.js",
                            "static/components/login/login.module.js",
                            
                        ]
                    },{
                        name: "view.home",
                        files: [
                            "static/components/home/home.controller.js",
                            "static/components/home/home.module.js",
                        ]
                    },{
                        name: "view.perfil",
                        files: [
                            "static/components/home/home.perfil/home.perfil.controller.js",
                            "static/components/home/home.perfil/perfil.service.js",
                            "static/components/home/home.perfil/home.perfil.module.js",
                        ]
                    },{
                        name: "view.planilla",
                        files: [
                            "static/components/home/home.planilla/planilla.controller.js",
                            "static/components/home/home.planilla/planilla.service.js",
                            "static/components/home/home.planilla/planilla.module.js",
                        ]
                    },{
                        name: "view.viajes",
                        files: [
                            "static/components/home/home.viajes/viajes.controller.js",
                            "static/components/home/home.viajes/viajes.service.js",
                            "static/components/home/home.viajes/viajes.module.js",
                        ]
                    },{
                        name: "view.remolque",
                        files: [
                            "static/components/home/home.remolque/remolque.controller.js",
                            "static/components/home/home.remolque/remolque.service.js",
                            "static/components/home/home.remolque/remolque.module.js",
                        ]
                    },{
                        name: "view.semiremolque",
                        files: [
                            "static/components/home/home.semiremolque/semiremolque.controller.js",
                            "static/components/home/home.semiremolque/semiremolque.service.js",
                            "static/components/home/home.semiremolque/semiremolque.module.js",
                        ]
                    },
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    {
                        name: "view.settings",
                        files: [
                            "static/components/settings/settings.controller.js",
                            "static/components/settings/settings.module.js",
                        ]
                    },{
                        name: "view.account",
                        files: [
                            "static/components/account/account.controller.js",
                            "static/components/account/account.module.js",
                        ]
                    },{
                        name: "view.products",
                        files: [
                            "static/components/productos/products.controller.js",
                            "static/components/productos/products.service.js",
                            "static/components/productos/products.module.js",
                        ]
                    },{
                        name: "view.orden",
                        files: [
                            "static/components/orden/orden.controller.js",
                            "static/components/orden/orden.service.js",
                            "static/components/orden/orden.module.js",
                        ]
                    },{
                        name: "view.driver",
                        files: [
                            "static/components/driver/driver.controller.js",
                            "static/components/driver/driver.service.js",
                            "static/components/driver/driver.module.js",
                        ]
                    },{
                        name: "view.driverPerfil",
                        files: [
                            "static/components/driver/perfil/perfil.controller.js",
                            "static/components/driver/perfil/perfil.service.js",
                            "static/components/driver/perfil/perfil.module.js",
                        ]
                    },{
                        name: "component.keypad-login",
                        files: [
                            "static/components/keypad-login/keypad-login.controller.js",
                            "static/components/keypad-login/keypad-login.constantes.js",
                            "static/components/keypad-login/keypad-login.component.js",
                            "static/components/keypad-login/keypad-login.factory.js",
                            "static/components/keypad-login/keypad-login.service.js",
                            "static/components/keypad-login/keypad-login.module.js",
                        ]
                    },
            ]
        })
    }


    a.module("ocLazyLoad.component", [])
    .config(b),
    b.$inject = ["$ocLazyLoadProvider"]
}(angular);