! function (a) {
    
    function b(c, d, a) {
        
        function R(e) {
            var f = d.defer(),
                g = f.promise,
                h = {};
            return c({
                method: "POST",
                url: a.IP_BACKEND + "/POST/SEMI_REMOLQUE_SAVE.php",
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
            url: a.IP_BACKEND + "/POST/SEMI_REMOLQUES_CALL.php",
            data: data,

        }).then(function successCallback(a) {
            h = {
                data : a,
            }

            f.resolve(h.data)
           
        }), g
        }

        return res = {
            saveRemolque: R,
            callData: F
        }
    }

    a.module("view.semiremolque.service", [])
    .service("servicesemiremolque", b),
    b.$inject = ["$http", "$q", "IPBACKEND"]
}(angular)