function asanInterceptor($q, jspTransporter) {
    return {
        request: function(config) {
            config.headers['X-AUTH-TOKEN'] = 'Z2FkYW1vfHBnYWRhbW98Ng==.bzJkLCxLN2YTntv+rMrfjsGVzLiXeSdOIbRntFdcdZ4=';
            return config;
        },
        response: function(result) {
            return result;
        },
        responseError: function(rejection) {
            return $q.reject(rejection);
        }
    };
}


var services = angular.module('relocalsApp.services', []);


services.service('AggParMac', function($resource, $q) {
    var lista_macro = [];
    var risorsaBackENDTest = $resource('/asan/web/pddo/aggparmac/:id');
    return {
        lista_macro: lista_macro,
        caricaTest: function(tipoMacroId) {

            return  risorsaBackENDTest.query({id: tipoMacroId}, function(data) {
                lista_macro.push(lista_macro, data);
            });
        }
    };
});

services.factory('Processi', function($resource, $q) {

    var prcs = [];
    var all = $resource('/restTEST/rest/persone/');

    return {
        prcs: prcs,
        caricaProcessi: function() {
            var promessa = $q.defer();
            all.query(function(data) {
                prcs.push(data);
                promessa.resolve(prcs);
            });
            return promessa.promise;
        }
    };
});

services.factory('jspTransporter', function() {
    var valore = '';
    return {
        valore: valore,
        setToken: function(input) {
            valore = input;
        },
        getToken: function() {
            return valore;
        }
    };
});

services.factory('ClassiProfiloService', function($resource) {
    return $resource('/asan/web/dcod/classiProfilo');
});

services.factory('Persone', function($resource) {

    var users = [];
    var all = $resource('/restTEST/rest/persone/');
    var single = $resource('/restTEST/rest/persone/:id');

    return {
        users: users,
        caricaPersone: function() {
            return all.query(function(data) {
                users.push(users, data);
                console.log(data);
            });
        },
        caricaPersona: function(id) {
            return single.get({id: id});
        }
    };
});


services.factory('ProcessiService', function($resource, $q) {

    var deferred = $q.defer();

    deferred.resolve($resource('/restTEST/rest/persone/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    }));
    return deferred.promise;
});

services.factory('StatoInserimentoService', function($resource) {
    return $resource('/asan/web/dcod/statiPDDO');
});



services.factory('SelezionaSingoloService', function($resource) {
    return $resource('/asan/web/pddo/seleziona/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
});

services.factory('ProcessiUpdate', function($resource) {
    return $resource('/restTEST/rest/persone/modifica');
});

services.factory('ProcessiUpdate2', function($resource) {
    return $resource('/restTEST/rest/persone/modifica');
});




services.factory('ProcessiTest', function($resource) {

    var prcs = [];
    var all = $resource('oggettoJson_DDO_1.json');

    return {
        prcs: prcs,
        caricaProcessi: function() {
            return all.get(function(data) {
                console.log('I dati sono: ' + data.dataApertura);
                prcs.push(prcs, data);
            });
        }
    };
});



services.factory('AsanService', function($resource) {

    var ats = [];
    var all = $resource('/asan/web/dcod/ats');

    return {
        ats: ats,
        caricaAts: function() {
            return all.query(function(data) {
                ats.push(ats, data);
            });
            return ats;
        }
    };
});



services.factory('PromisedService', function($q, $timeout) {
    var stringa = new Object();
    return {
        stringa: stringa,
        getMessages: function() {
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve('ciao');
                angular.element("#caricamento").click();
            }, 1500);
            return deferred.promise;
        },
        disattiva_md_caricamento: function() {
            $timeout(function() {
                angular.element("#caricamento").click();
                angular.element("#hValori").click();
            }, 0000);
            return 'OK';
        },
        disattiva_md_ricerca: function() {
            $timeout(function() {
                angular.element("#caricamento").click();
                angular.element("#hResults").click();
            }, 1500);
            return 'OK';
        },
        disattiva_md_ricerca_errore: function() {
            $timeout(function() {
                angular.element("#caricamento").click();

            }, 0000);
            $timeout(function() {
                angular.element("#dialog-link").click();
            }, 100);
            return 'OK';
        },
        disattiva_md_datiStruttura: function() {
            function fun() {
                return 1500;
            }
            $timeout(function() {
                angular.element("#caricamento").click();
                angular.element(".datiStruttura").click();
            }, fun());
            return 'OK';
        },
        OggettoInserimento: function(idEnte, ats, anno, quadrimestre) {
            var inserisciProcessoDDO = {
                asl: {id: ats},
                ente: {id: idEnte},
                anno: anno,
                quadrimestre: quadrimestre
            };
            return inserisciProcessoDDO;
        },
        OggettoRicerca: function(codiceProcesso, codiceFiscale, partitaIva, nome, idAsl, idStato, anno, quadrimestre) {
            var ricercaProcessoDDO = {
                codiceProcesso: codiceProcesso,
                codiceFiscale: codiceFiscale,
                partitaIva: partitaIva,
                nome: nome,
                idAsl: idAsl,
                idStato: idStato,
                anno: anno,
                quadrimestre: quadrimestre,
                "attributiRicerca": {
                    maxRecords: "10",
                    pageNumber: "1",
                    sortMode: null,
                    useWildcard: "2",
                    sortOrder: null,
                    dataValidita: null
                }
            };
            return ricercaProcessoDDO;
        }

    };
});
services.factory('Entry', function($resource) {
    return $resource('/restTEST/rest/persone/:id'); // Quì l'endpoint è fisso
});

services.factory('GestioneAnniService', function() {
    var anni = [];
    var dateA = moment('2016-01-01');
    var dateB = moment();
    return {
        getAnni: function() {
            var limite = dateA.diff(dateB, 'years');
            for (i = 0; i === limite; i++) {
                anni[i] = {anno: 2016 - i};
            }
            return anni;
        }
    };
});

services.factory('asanInterceptor', asanInterceptor);