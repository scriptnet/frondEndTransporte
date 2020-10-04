! function(a){
    "use strict";

    function b(a,b, c){

        function e (e){
           
            var f = b.defer(),
                g = f.promise,
                h = {};
            return a({
                method: "POST",
                url: c.IP_BACKEND + "/POST/LOGIN_USER.php",
                data: e,

            }).then(function successCallback(a) {
                h = {
                    data : a,
                    headers : a.headers
                }
             
                
                f.resolve(h.data)
                // console.log(h);
            }), g
        }

        var r = {
            login : e
        }
        return r;
    }

    a.module("view.login.service", [])
    .service("loginService", b)
    b.$inject = ["$http", "$q", "IPBACKEND"]
}(angular)