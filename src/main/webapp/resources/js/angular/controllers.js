var asanControllers = angular.module('relocalsApp.controllers', []);

asanControllers.controller('RelocalsController', function($scope, Persone, PromisedService, AsanService, GestioneAnniService, Entry, Processi) {

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

    $scope.f = function() {
        $scope.showDatiStruttura = true;
        $scope.showUnitaOrganizzative = true;
        PromisedService.disattiva_md_datiStruttura();
    };

    var entry = Entry.get({id: 1}, function() {
        console.log(entry);
        $scope.t = entry.nome + ' ' + entry.id;
    }); // get() singlo elemento

    var entries = Entry.query(function() {
        console.log(entries);
    }); //query() tutti gli elementi

    $scope.orderByValue = function(value) {
        return value;
    };

    $scope.ricerca = function() {
        if ($scope.data_select_ats.selectedOption) {
            console.log($scope.data_select_ats.selectedOption.id);
            console.log('DO Codice Processo: ' + $scope.do_codice_processo);
        } else {
            console.log('Nessuna ATS selezionata');
        }
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
        $scope.processoSelezionato.listaStruttureDDO = processo.listaStruttureDDO;
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

    $scope.anno_select_ats = {
        availableOpt: GestioneAnniService.getAnni(),
        selectedOption: {
            "id": "",
            "descrizione": "",
            "IDRegione": "",
            "map": "",
            "propertyToCrypt": "",
            "propertyToNotClean": ""
        } //Il valore di default della SELECT
    };

    $scope.svuota = function() {
        $scope.do_codice_processo = '';
        $scope.data_select_ats.selectedOption = {
            "id": "",
            "descrizione": "",
            "IDRegione": ""
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