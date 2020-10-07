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

        function F(data) {
            var f = d.defer(),
            g = f.promise,
            h = {};
        return c({
            method: "POST",
            url: a.IP_BACKEND + "/POST/VIAJES_CALL.php",
            data: data,

        }).then(function successCallback(a) {
            h = {
                data : a,
            }

            f.resolve(h.data)
           
        }), g
        }

        return res = {
            saveData: R,
            callData: F
        }
    }

    a.module("view.viajes.service", [])
    .service("serviceviajes", b),
    b.$inject = ["$http", "$q", "IPBACKEND"]
}(angular)