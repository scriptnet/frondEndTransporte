! function (a) {
    
    function b(c, d, a) {
        
        function R(e) {
            var f = d.defer(),
                g = f.promise,
                h = {};
            return c({
                method: "POST",
                url: a.IP_BACKEND + "/POST/PERFIL_SAVE.php",
                data: e,

            }).then(function successCallback(a) {
                h = {
                    data : a,
                }

                f.resolve(h.data)
                // console.log(h);
            }), g
        }

        function F() {
            var f = d.defer(),
            g = f.promise,
            h = {};
        return c({
            method: "POST",
            url: a.IP_BACKEND + "perfilCall.php",
            data: {"user": "callUser"},

        }).then(function successCallback(a) {
            h = {
                data : a,
            }

            f.resolve(h.data)
           
        }), g
        }

        return res = {
            savePerfil: R,
            callPerfil: F
        }
    }

    a.module("view.perfil.service", [])
    .service("servicePerfil", b),
    b.$inject = ["$http", "$q", "IPBACKEND"]
}(angular)