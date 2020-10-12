! function (a) {
    
    function b(c, d, a) {
        
        function R(e) {
            var f = d.defer(),
                g = f.promise,
                h = {};
            return c({
                method: "POST",
                url: a.IP_BACKEND + "/POST/RUTAS_SAVE.php",
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
                url: a.IP_BACKEND + "/GET/RUTAS_CALL.php",
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
            callData: F,
          
        }
    }

    a.module("view.rutas.service", [])
    .service("servicerutas", b),
    b.$inject = ["$http", "$q", "IPBACKEND"]
}(angular)