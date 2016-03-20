
var services = angular.module('relocalsApp.services', []);
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

services.factory('Processi', function($resource) {

    var prcs = [];
    var all = $resource('oggettoJson_DDO.json');

    return {
        prcs: prcs,
        caricaProcessi: function() {
            return all.query(function(data) {
                prcs.push(prcs, data);
            });
        }
    };
});

services.factory('ProcessiService', function($resource) {
    return $resource('/restTEST/rest/persone/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
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



services.factory('PromisedService', function($q, $timeout, Processi) {
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
            }, 1500);
            return 'OK';
        },
        disattiva_md_ricerca: function() {
            $timeout(function() {
                angular.element("#caricamento").click();
                angular.element("#hResults").click();
            }, 1500);
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
        OggettoRicerca: function(codiceProcesso, idEnte, idAsl, idstato, anno, quadrimestre) {
            var RicercaProcessoDDO = {
                codiceProcesso: codiceProcesso,
                idEnte: idEnte,
                idAsl: idAsl,
                idstato: idstato,
                anno: anno,
                quadrimestre: quadrimestre
            };
            return RicercaProcessoDDO;
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