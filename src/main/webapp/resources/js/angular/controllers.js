var asanControllers = angular.module('relocalsApp.controllers', []);

asanControllers.controller('RelocalsController', function($scope, ProcessiUpdate, Persone, ProcessiService, SelezionaSingoloService, PromisedService, AsanService, GestioneAnniService, Entry, Processi, RicercaProcessiDDO) {


    // **** Parte RESTful
    $scope.testProcessi = ProcessiService.query();
// **** 
    $scope.RicercaProcessoDDO = {
        "codiceProcesso": $scope.do_codice_processo
    };
    $scope.ente_gestore = 'ASST OVEST MILANESE';
    $scope.quadrimestri = [{"id": 1, "descrizione": 'Primo quadrimestre'}, {"id": 2, "descrizione": 'Secondo quadrimestre'}, {"id": 3, "descrizione": 'Terzo quadrimestre'}];
    $scope.persone = Persone.caricaPersone();
    $scope.ats = AsanService.caricaAts();
    $scope.processi = Processi.caricaProcessi();
    $scope.anni_ricerca = GestioneAnniService.getAnni();
    $scope.showDatiStruttura = false;
    $scope.showUnitaOrganizzative = false;
    $scope.showDettaglioUnitaOrganizzative = {
        "visibilita": false
    };
    $scope.showDettaglioMacroAttivita = {
        "visibilita": false
    };

    $scope.dettaglio = [];

    //dopo aver  selezionato un processo DDO dai risultati
    $scope.processoSelezionato = {
        "visibilita": false,
        "unitaOrganizzative": [],
        "macroAttivita": [],
        "classiProfili": [],
        "listaUOAssociate": [],
        "listaStruttureDDO": {
            "strutturaSelezionata": null,
            "unitaSelezionata": null,
            "macroSelezionata": null
        }
    };

    $scope.getDettagliStrutturaSelezionata = function() {
        $scope.showDatiStruttura = true;
        $scope.showUnitaOrganizzative = true;
        PromisedService.disattiva_md_datiStruttura();
    };


    $scope.defineProcesso = function(processo) {
        var p = ProcessiService.get({id: processo.id});
        console.log('Hai selezionato: ' + p.data);
        $scope.prc = p;
    };

    $scope.update = function() {
        var input = $scope.prc;
        $scope.restTest = ProcessiUpdate.save(input);
        for (var k = 0; k < $scope.testProcessi.length; k++) {
            if ($scope.testProcessi[k].id === $scope.restTest.id) {
                $scope.testProcessi[k].nome = $scope.restTest.nome;
                $scope.testProcessi[k].cognome = $scope.restTest.cognome;
            }

        }
        //  $scope.testProcessi.push($scope.restTest);
    };



    $scope.nuovo = {};
    $scope.insert = function() {
        if (!angular.equals($scope.nuovo, {})) {
            var a = ProcessiService.save($scope.nuovo, function() {
                console.log(a);
                $scope.testProcessi.push(a);
            });
            $scope.nuovo = {};
        }
        //  $scope.nuovo = new ProcessiService();
    };

    var entry = Entry.get({id: 1}, function() {
        console.log('La persona selezionata è: ' + entry.nome);
    }); // get() singlo elemento

    var entries = Entry.query(function() {
        console.log('La lista delle persona ha ' + entries.length + ' dipendenti.');
    }); //query() tutti gli elementi

    $scope.orderByValue = function(value) {
        return value;
    };

    $scope.ricerca = function() {
        var codice_processo;
        var ente_gestore;
        var ats;
        var stato;
        var anno;
        var quadrimestre;

        (!$scope.do_codice_processo) ? codice_processo = "" : codice_processo = $scope.do_codice_processo;

        ente_gestore = $scope.ente_gestore;

        (!$scope.data_select_ats.selectedOption) ? ats = "" : ats = $scope.data_select_ats.selectedOption.id;

        stato = 'Stato In inserimento';

        !($scope.anno_select_ats.selectedOption.anno === null) ? anno = "" : anno = $scope.anno_select_ats.selectedOption.anno.toString();

        (!$scope.quadrimestre_select.selectedOption) ? quadrimestre = "" : quadrimestre = $scope.quadrimestre_select.selectedOption.id;

        var oggettoRicerca = PromisedService.OggettoRicerca(codice_processo, ente_gestore, ats, stato, anno, quadrimestre);

        RicercaProcessiDDO.save(oggettoRicerca);

        $scope.svuota();

    };

    $scope.$watch('data_select_ats.selectedOption', function(prima, dopo) {
        if (prima === dopo)
            return;
    });

    $scope.getUnitaSelezionata = function(unita) {
        $("#unita_dettaglio").prop("disabled", false);
        $("#macro_dettaglio").prop("disabled", true);
        $scope.processoSelezionato.listaStruttureDDO.macroSelezionata = null;
        $scope.processoSelezionato.listaStruttureDDO.unitaSelezionata = unita;
        $scope.processoSelezionato.macroAttivita = [];
        $scope.processoSelezionato.classiProfili = [];
        $scope.processoSelezionato.listaUOAssociate = [];

        for (var k = 0; k < unita.listaOreLavorateDDO.length; k++) {
            var unita_lavoro_ore = unita.listaOreLavorateDDO[k];
            var uo_associata = unita.listaUOAssociateDDO[k];
            if (unita_lavoro_ore.classeProfilo) {
                $scope.processoSelezionato.classiProfili.push(unita.listaOreLavorateDDO[k]);
            }
            if (uo_associata) {
                $scope.processoSelezionato.listaUOAssociate.push(uo_associata);
            }
        }
        //alert('Lunghezza dell array: ' + $scope.processoSelezionato.classiProfili.length);


        for (var j = 0; j < unita.listaMacroAttivitaDDO.length; j++) {
            $scope.processoSelezionato.macroAttivita.push(unita.listaMacroAttivitaDDO[j]);
        }
        //alert('UO Assiciate: ' + $scope.processoSelezionato.listaUOAssociate.length);
    };

    $scope.getStrutturaSelezionata = function(struttura) {
        $scope.processoSelezionato.listaStruttureDDO.unitaSelezionata = null;
        $scope.processoSelezionato.unitaOrganizzative = [];
        $scope.processoSelezionato.macroAttivita = [];
        $scope.processoSelezionato.listaStruttureDDO.strutturaSelezionata = struttura;
        $("#but").prop("disabled", false);
        $scope.showDatiStruttura = false;
        $scope.showUnitaOrganizzative = false;
        $scope.showDettaglioUnitaOrganizzative.visibilita = false;
        $scope.showDettaglioMacroAttivita.visibilita = false;
        for (var i = 0; i < struttura.listaUnitaOrganizzativeDDO.length; i++) {
            var unita = struttura.listaUnitaOrganizzativeDDO[i];
            $scope.processoSelezionato.unitaOrganizzative.push(unita);
        }
        console.log('Nr macroattivita' + $scope.processoSelezionato.macroAttivita.length);
    };

    $scope.getDettagliSingoloProcesso = function(processo) {
        $scope.processoSelezionato.visibilita = true;
        $scope.showDatiStruttura = false;
        $scope.showUnitaOrganizzative = false;
        $scope.showDettaglioUnitaOrganizzative.visibilita = false;
        $scope.showDettaglioMacroAttivita.visibilita = false;
        $("#but").prop("disabled", true);
        $scope.processoSelezionato.listaStruttureDDO.strutturaSelezionata = null;
        var processoSelezionato = SelezionaSingoloService.get({id: 1});
        console.log(processoSelezionato);
        $scope.processoSelezionato.listaStruttureDDO = processoSelezionato.listaStruttureDDO;
        console.log($scope.processoSelezionato.listaStruttureDDO);
        PromisedService.disattiva_md_caricamento();
    };

    $scope.getDettaglioPerSingolaUnita = function() {
        var dati_unita = {
            "unitaSelezionata": $scope.processoSelezionato.listaStruttureDDO.unitaSelezionata,
            "classi_di_profili": ''
        };
        $scope.showUnitaOrganizzative = false;
        $scope.showDettaglioUnitaOrganizzative.visibilita = true;
        $("#unita_dettaglio").prop("disabled", false);
        //alert('Unità: ' + dati_unita.unitaSelezionata.codice);
    };


    $scope.getMacroSelezionata = function(macro) {
        $("#macro_dettaglio").prop("disabled", false);
        $scope.processoSelezionato.listaStruttureDDO.macroSelezionata = macro;
    };

    $scope.getDettaglioMacroSelezionata = function() {
        var dati_macro = {
            "macroSelezionata": $scope.processoSelezionato.listaStruttureDDO.macroSelezionata
        };
        $scope.showUnitaOrganizzative = false;
        $scope.showDettaglioUnitaOrganizzative.visibilita = false;
        $scope.showDettaglioMacroAttivita.visibilita = true;
    };


    $scope.backToUnita = function() {
        $scope.showUnitaOrganizzative = true;
        $scope.showDettaglioMacroAttivita.visibilita = false;
        $scope.showDettaglioUnitaOrganizzative.visibilita = false;
    };


    $scope.$watch('processoSelezionato', function(prima, dopo) {
        if (prima === dopo)
            return;
    });

    $scope.testa = function() {
        console.log('Valore singolo: ' + Entry.getUser());
    };

    $scope.testPromise = function() {
        PromisedService.getMessages().then(function(data) {
            $scope.test_cacca = data;
            console.log('Funziona');
            //
        });
    };

    $scope.data_select_ats = {
        availableOptions: AsanService.caricaAts(),
        selectedOption: {
            "id": "",
            "descrizione": "",
            "IDRegione": ""
        } //Il valore di default della SELECT
    };

    $scope.quadrimestre_select = {
        availableOpt: $scope.quadrimestri,
        selectedOption: {
            "id": "",
            "descrizione": ""
        } //Il valore di default della SELECT
    };

    $scope.anno_select_ats = {
        availableOpt: GestioneAnniService.getAnni(),
        selectedOption: {
            "anno": ""
        } //Il valore di default della SELECT
    };

    $scope.svuota = function() {
        $scope.do_codice_processo = '';
        $scope.data_select_ats.selectedOption = {
            "id": "",
            "descrizione": "",
            "IDRegione": ""
        },
        $scope.anno_select_ats.selectedOption = {
            "anno": ""
        },
        $scope.quadrimestre_select.selectedOption = {
            "id": "",
            "descrizione": ""
        };


        $scope.anno_select_ats.selectedOption = {
            "id": "",
            "descrizione": "",
            "IDRegione": "",
            "map": "",
            "propertyToCrypt": "",
            "propertyToNotClean": ""
        };
    };
});

/* 
 asanControllers.controller('ModalController', function($scope, $modal) {
 $scope.open = function() {
 var options = {
 template: '<div class="modal fade" id="caricamento" role="dialog">' +
 '<div id="crop" class="modal-dialog">' +
 '<img src="http://loadinggif.com/images/image-selection/32.gif" />' +
 '</div>' +
 '</div>',
 controller: function($scope, $modalInstance) {
 $scope.ok = function() {
 $modalInstance.close();
 };
 
 $scope.cancel = function() {
 $modalInstance.dismiss('cancel');
 };
 }
 };
 var modalInstance = $modal.open(options);
 modalInstance.result.then(function() {
 alert('Modal success at:' + new Date());
 }, function() {
 alert('Modal dismissed at: ' + new Date());
 });
 };
 });
 
 
 var ModalInstanceCtrl = function($scope, $modalInstance) {
 $scope.ok = function() {
 $modalInstance.close();
 };
 
 $scope.cancel = function() {
 $modalInstance.dismiss('cancel');
 };
 };
 
 
 
 
 * USO dello $scope.$apply
 * 
 $scope.message = "Waiting 2000ms for update";
 
 setTimeout(function () {
 $scope.$apply(function () {
 $scope.message = "Timeout called!";
 });
 }, 0000);
 
 */