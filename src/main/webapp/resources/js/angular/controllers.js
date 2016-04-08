var angular;
var asanControllers = angular.module('relocalsApp.controllers', []);

asanControllers.controller('RelocalsController', function($scope, ClassiProfiloService, jspTransporter, $http, StatoInserimentoService, ProcessiUpdate, Persone, ProcessiService, SelezionaSingoloService, PromisedService, AsanService, GestioneAnniService) {
    // **** Parte RESTful





// **** Parte UPDATE *****


    $scope.classeDaModificare = {
        valore: '',
        id: '',
        visibilita: false
    };

    $scope.persona1 = {
        nome: '',
        cognome: ''
    };

    $scope.personaDaModificare = {
        valore: '',
        visibilita: false
    };

    $scope.setPersonaSelezionata = function(persona) {
        console.log('Funzione chiamata ' + 'setPersonaSelezionata');
        if ($scope.personaDaModificare.valore !== persona)
            $scope.personaDaModificare.visibilita = false;
        $scope.personaDaModificare.valore = persona;
    };


//valore necessario per settare il valore di default in modalità di modifica
    $scope.classeProfiloDefault = {
        "id": 1,
        "descrizione": "",
        "dataInizioValidita": ""
    };

//Parte di Modifica delle classe
    $scope.setClasseSelezionata = function(classe) {

        if ($scope.classeDaModificare.valore !== classe)
            $scope.classeDaModificare.visibilita = false;
        if (!$scope.classeDaModificare.visibilita) {
            $scope.classeDaModificare.valore = classe;
            $scope.classeProfiloDefault.id = classe.classeProfilo.id;
            $scope.classi_profilo_select.selectedOption.id = classe.classeProfilo.id;
        }
    };

    $scope.modificaClasse = function() {
        $scope.classeDaModificare.visibilita = !$scope.classeDaModificare.visibilita;
    };
//Fine Parte di Modifica delle classe
    $scope.modificaRigaSelezionata = function() {
        console.log('Funzione chiamata ' + 'modificaRigaSelezionata');
        $scope.svuota();
        $scope.personaDaModificare.visibilita = !$scope.personaDaModificare.visibilita;
    };

    $scope.cancelModifica = function() {
        console.log('Funzione chiamata ' + 'cancelModifica');
        $scope.personaDaModificare.valore = null;
        $scope.classeDaModificare.valore = null;
    };


    $scope.aggiornaClasse = function() {
        alert('Aggiornamento classe mancante');
    };

    $scope.modifica = function(p) {
        var nome;
        var cognome;
        if (p.nome !== '') {
            nome = p.nome;
        } else {
            nome = $scope.personaDaModificare.valore.nome;
        }
        if (p.cognome !== '') {
            cognome = p.cognome;
        } else {
            cognome = $scope.personaDaModificare.valore.cognome;
        }
        $scope.personaUPDATE = ProcessiUpdate.save({"cognome": cognome, "id": $scope.personaDaModificare.valore.id, "nome": nome});
        $scope.personaDaModificare.valore.nome = $scope.personaUPDATE.nome;
        $scope.personaDaModificare.valore.cognome = $scope.personaUPDATE.cognome;
        $scope.personaDaModificare.visibilita = !$scope.personaDaModificare.visibilita;
        $scope.persona1.nome = '';
        $scope.persona1.cognome = '';
        $scope.testProcessi = ProcessiService.query();
    };



// **** Fine della Parte UPDATE ****

    $scope.transport = function(inp) {
        $scope.jspVal = inp;
        jspTransporter.setToken($scope.jspVal);
    };

    $scope.idEnte = '';
    $scope.getIdEnte = function(idEnte) {
        $scope.idEnte = idEnte;
    };


    $scope.RicercaProcessoDDO = {
        "codiceProcesso": $scope.do_codice_processo
    };
    $scope.ente_gestore = 'ASST OVEST MILANESE';
    $scope.quadrimestri = [{"id": 1, "descrizione": 'Primo quadrimestre'}, {"id": 2, "descrizione": 'Secondo quadrimestre'}, {"id": 3, "descrizione": 'Terzo quadrimestre'}];
    $scope.persone = Persone.caricaPersone();
    $scope.ats = AsanService.caricaAts();
    $scope.anni_ricerca = GestioneAnniService.getAnni();
    $scope.showDatiStruttura = false;
    $scope.showUnitaOrganizzative = false;
    $scope.showDatiStrutturaMOD = false;
    $scope.showUnitaOrganizzativeMOD = false;
    $scope.showDettaglioUnitaOrganizzative = {
        "visibilita": false
    };
    $scope.showDettaglioUnitaOrganizzativeMOD = {
        "visibilita": false
    };
    $scope.showDettaglioMacroAttivita = {
        "visibilita": false
    };
    $scope.showDettaglioMacroAttivitaMOD = {
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
            "macroSelezionata": null,
            "classeSelezionata": null
        }
    };

    $scope.processoSelezionatoMOD = {
        "visibilita": false,
        "unitaOrganizzative": [],
        "macroAttivita": [],
        "classiProfili": [],
        "listaUOAssociate": [],
        "listaStruttureDDO": {
            "strutturaSelezionata": null,
            "unitaSelezionata": null,
            "macroSelezionata": null,
            "classeSelezionata": null
        }
    };

    $scope.getDettagliStrutturaSelezionata = function() {
        $scope.showDatiStruttura = true;
        $scope.showUnitaOrganizzative = true;
        PromisedService.disattiva_md_datiStruttura();
    };

    $scope.getDettagliStrutturaSelezionataMOD = function() {
        $scope.showDatiStrutturaMOD = true;
        $scope.showUnitaOrganizzativeMOD = true;
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

    $scope.orderByValue = function(value) {
        return value;
    };

    $scope.inserimento = function() {
        var idEnte;
        var ats;
        var anno;
        var quadrimestre;

        idEnte = $scope.idEnte;

        (!$scope.ricerca_data_select_ats.selectedOption) ? ats = "" : ats = $scope.ricerca_data_select_ats.selectedOption.id;

        anno = $scope.ricerca_anno_select_ats.selectedOption.anno;

        (!$scope.ricerca_quadrimestre_select.selectedOption) ? quadrimestre = "" : quadrimestre = $scope.ricerca_quadrimestre_select.selectedOption.id;

        var risultato = $http.post('/asan/web/pddo/inserisci', PromisedService.OggettoInserimento(idEnte, ats, anno, quadrimestre));

        risultato.success(function(risposta, stato, headers) {

            if (risposta.esitoOK) {
                $("#dialog-link").click();
                $scope.messaggio = 'Inserimento effettuato con successo !';
            } else {
                $("#dialog-link").click();
                $scope.messaggio = 'Inserimento non effettuato !' + risposta.errori[0].descrizione;
            }
        });

        risultato.error(function(risposta) {
            $("#dialog-link").click();
            $scope.messaggio = 'Errore durante il processo di inserimento: ' + risposta;
        });
        $scope.svuota_inserimento();
    };

    $scope.ricerca = function() {
        var codice_processo;
        var ente_gestore;
        var ats;
        var stato;
        var anno;
        var quadrimestre;
        var codice_fiscale;
        var partitaIva;
        var nome;

        (!$scope.do_codice_processo) ? codice_processo = "" : codice_processo = $scope.do_codice_processo;

        ente_gestore = $scope.ente_gestore;

        (!$scope.do_codice_fiscale) ? codice_fiscale = "" : codice_fiscale = $scope.do_codice_fiscale;

        (!$scope.do_partita_iva) ? partitaIva = "" : partitaIva = $scope.do_partita_iva;

        (!$scope.do_nome_ente) ? nome = "" : nome = $scope.do_nome_ente;

        (!$scope.data_select_ats.selectedOption) ? ats = "" : ats = $scope.data_select_ats.selectedOption.id;

        (!$scope.stato_select.selectedOption) ? stato = "" : stato = $scope.stato_select.selectedOption.id;

        !($scope.anno_select_ats.selectedOption) ? anno = "" : anno = $scope.anno_select_ats.selectedOption.anno.toString();

        (!$scope.quadrimestre_select.selectedOption) ? quadrimestre = "" : quadrimestre = $scope.quadrimestre_select.selectedOption.id;

        var risultato = $http.post('/asan/web/pddo/ricerca', PromisedService.OggettoRicerca(codice_processo, codice_fiscale, partitaIva, nome, ats, stato, anno, quadrimestre));
        risultato.success(function(risposta, stato, headers) {

            if (risposta.esitoOK) {
                $scope.processi = risposta.risultato.processoDDOlist;
                PromisedService.disattiva_md_ricerca();
                $scope.svuota();
            } else {
                console.log('Lista DDO non trovata');
                PromisedService.disattiva_md_ricerca_errore();
                $scope.svuota();
                $scope.messaggio = risposta.errori[0].descrizione;

            }
        });
    };


    $scope.testUtenti = function(utente) {
        $scope.testUtente = utente;
    };



    $scope.getUnitaSelezionata = function(unita) {
        $("#unita_dettaglio").prop("disabled", false);
        $("#macro_dettaglio").prop("disabled", true);
        $scope.codiceUOUnita = unita.tipoUnitaOrganizzativa.codice;
        $scope.nomeUOUnita = unita.tipoUnitaOrganizzativa.descrizione;
        $scope.sequenzaUOUnita = unita.numSequenza;
        $scope.descrizioneUOUnita = unita.descrizione;
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


    $scope.getUnitaSelezionataMOD = function(unita) {
        $("#unita_dettaglio_mod").prop("disabled", false);
        $("#macro_dettaglio_mod").prop("disabled", true);
        $scope.codiceUOUnita = unita.tipoUnitaOrganizzativa.codice;
        $scope.nomeUOUnita = unita.tipoUnitaOrganizzativa.descrizione;
        $scope.sequenzaUOUnita = unita.numSequenza;
        $scope.descrizioneUOUnita = unita.descrizione;
        $scope.processoSelezionatoMOD.listaStruttureDDO.macroSelezionata = null;
        $scope.processoSelezionatoMOD.listaStruttureDDO.unitaSelezionata = unita;
        $scope.processoSelezionatoMOD.macroAttivita = [];
        $scope.processoSelezionatoMOD.classiProfili = [];
        $scope.processoSelezionatoMOD.listaUOAssociate = [];

        for (var k = 0; k < unita.listaOreLavorateDDO.length; k++) {
            var unita_lavoro_ore = unita.listaOreLavorateDDO[k];
            var uo_associata = unita.listaUOAssociateDDO[k];
            if (unita_lavoro_ore.classeProfilo) {
                $scope.processoSelezionatoMOD.classiProfili.push(unita.listaOreLavorateDDO[k]);
            }
            if (uo_associata) {
                $scope.processoSelezionatoMOD.listaUOAssociate.push(uo_associata);
            }
        }
        //alert('Lunghezza dell array: ' + $scope.processoSelezionato.classiProfili.length);


        for (var j = 0; j < unita.listaMacroAttivitaDDO.length; j++) {
            $scope.processoSelezionatoMOD.macroAttivita.push(unita.listaMacroAttivitaDDO[j]);
        }
        //alert('UO Assiciate: ' + $scope.processoSelezionato.listaUOAssociate.length);
    };


    $scope.getStrutturaSelezionata = function(struttura) {
        $scope.tipoStruttura = struttura.tipoStruttura.descrizione;
        $scope.tipoOspedale = struttura.tipoOspedale.descrizione;
        //$scope.codiceStruttura = struttura
        $scope.nomeStruttura = struttura.nome;
        $scope.codiceStruttura = struttura.codiceNoVincolo;
        $scope.processoSelezionato.listaStruttureDDO.unitaSelezionata = null;
        $scope.processoSelezionato.unitaOrganizzative = [];
        $scope.processoSelezionato.macroAttivita = [];
        $scope.processoSelezionato.listaStruttureDDO.strutturaSelezionata = struttura;
        $("#but").prop("disabled", false);
        $("#unita_dettaglio").prop("disabled", true);
        $("#macro_dettaglio").prop("disabled", true);
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

    $scope.getStrutturaSelezionataMOD = function(struttura) {
        $scope.tipoStruttura = struttura.tipoStruttura.descrizione;
        $scope.tipoOspedale = struttura.tipoOspedale.descrizione;
        //$scope.codiceStruttura = struttura
        $scope.nomeStruttura = struttura.nome;
        $scope.codiceStruttura = struttura.codiceNoVincolo;
        $scope.processoSelezionatoMOD.listaStruttureDDO.unitaSelezionata = null;
        $scope.processoSelezionatoMOD.unitaOrganizzative = [];
        $scope.processoSelezionatoMOD.macroAttivita = [];
        $scope.processoSelezionatoMOD.listaStruttureDDO.strutturaSelezionata = struttura;
        $("#but_mod").prop("disabled", false);
        $("#unita_dettaglio_mod").prop("disabled", true);
        $("#macro_dettaglio_mod").prop("disabled", true);
        $scope.showDatiStrutturaMOD = false;
        $scope.showUnitaOrganizzativeMOD = false;
        $scope.showDettaglioUnitaOrganizzativeMOD.visibilita = false;
        $scope.showDettaglioMacroAttivitaMOD.visibilita = false;
        for (var i = 0; i < struttura.listaUnitaOrganizzativeDDO.length; i++) {
            var unita = struttura.listaUnitaOrganizzativeDDO[i];
            $scope.processoSelezionatoMOD.unitaOrganizzative.push(unita);
        }
        console.log('Nr macroattivita' + $scope.processoSelezionatoMOD.macroAttivita.length);
    };



    $scope.getDettagliSingoloProcesso = function(processo) {
        $scope.idProcessoDaModificare = processo.id; // Su questo punto viene definito l'id per il processo che si va a modificare in seguito
        $scope.processoSelezionato.visibilita = true;
        $scope.showDatiStruttura = false;
        $scope.showUnitaOrganizzative = false;
        $scope.showDettaglioUnitaOrganizzative.visibilita = false;
        $scope.showDettaglioMacroAttivita.visibilita = false;
        $("#but").prop("disabled", true);
        $scope.processoSelezionato.listaStruttureDDO.strutturaSelezionata = null;
        var processoSelezionato = SelezionaSingoloService.get({id: processo.id}, function() {
            $scope.processoSelezionato.listaStruttureDDO = processoSelezionato.risultato.listaStruttureDDO;
            $scope.ente = processoSelezionato.risultato.ente.nome;
            $scope.asl = processoSelezionato.risultato.asl.descrizione;
            $scope.annoPDO = processoSelezionato.risultato.anno;
            $scope.quadrimestre = processoSelezionato.risultato.quadrimestre;
            $scope.statoPDO = processoSelezionato.risultato.stato;
            $scope.dataApertura = processoSelezionato.risultato.dataApertura;
            $scope.dataChiusura = processoSelezionato.risultato.dataChiusura;
            $scope.dataConsolidamento = processoSelezionato.risultato.dataConsolidamento;
            $scope.dataInizioValidita = processoSelezionato.risultato.dataInizioValidita;
            PromisedService.disattiva_md_caricamento();
        });


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

    $scope.getDettaglioPerSingolaUnitaMOD = function() {
        var dati_unita = {
            "unitaSelezionataMOD": $scope.processoSelezionatoMOD.listaStruttureDDO.unitaSelezionata,
            "classi_di_profiliMOD": ''
        };
        $scope.showUnitaOrganizzativeMOD = false;
        $scope.showDettaglioUnitaOrganizzativeMOD.visibilita = true;
        $("#unita_dettaglio_mod").prop("disabled", false);
        //alert('Unità: ' + dati_unita.unitaSelezionata.codice);
    };


    $scope.getMacroSelezionata = function(macro) {
        $scope.macroSelezionataNome = macro.tipoMacroAttivita.descrizione;
        $scope.macroSelezionataNSeq = macro.numSequenza;
        $scope.macroSelezionataDescrizione = macro.descrizione;
        $("#macro_dettaglio").prop("disabled", false);
        $scope.processoSelezionato.listaStruttureDDO.macroSelezionata = macro;
        $scope.listaParametriMacro = macro.listaParametriDDO;
    };

    $scope.getMacroSelezionataMOD = function(macro) {
        $scope.macroSelezionataNome = macro.tipoMacroAttivita.descrizione;
        $scope.macroSelezionataNSeq = macro.numSequenza;
        $scope.macroSelezionataDescrizione = macro.descrizione;
        $("#macro_dettaglio_mod").prop("disabled", false);
        $scope.processoSelezionatoMOD.listaStruttureDDO.macroSelezionata = macro;
        $scope.listaParametriMacroMOD = macro.listaParametriDDO;
    };

    $scope.getDettaglioMacroSelezionata = function() {
        $scope.showUnitaOrganizzative = false;
        $scope.showDettaglioUnitaOrganizzative.visibilita = false;
        $scope.showDettaglioMacroAttivita.visibilita = true;
    };

    $scope.getDettaglioMacroSelezionataMOD = function() {
        $scope.showUnitaOrganizzativeMOD = false;
        $scope.showDettaglioUnitaOrganizzativeMOD.visibilita = false;
        $scope.showDettaglioMacroAttivitaMOD.visibilita = true;
    };


    $scope.backToUnita = function() {
        $scope.showUnitaOrganizzative = true;
        $scope.showDettaglioMacroAttivita.visibilita = false;
        $scope.showDettaglioUnitaOrganizzative.visibilita = false;
    };

    $scope.backToUnitaMOD = function() {
        $scope.showUnitaOrganizzativeMOD = true;
        $scope.showDettaglioMacroAttivitaMOD.visibilita = false;
        $scope.showDettaglioUnitaOrganizzativeMOD.visibilita = false;
    };


    $scope.$watch('$scope.setClasseSelezionata', function(prima, dopo) {
        if (prima === dopo)
            return;
        alert('Cambio della classe');
    });


    $scope.classi_profilo_select = {
        availableOptions: ClassiProfiloService.query(),
        selectedOption: {
            "id": "",
            "descrizione": "",
            "dataInizioValidita": ""
        }
    };



    $scope.data_select_ats = {
        availableOptions: AsanService.caricaAts(),
        selectedOption: {
            "id": "",
            "descrizione": "",
            "IDRegione": ""
        } //Il valore di default della SELECT
    };

    $scope.ricerca_data_select_ats = {
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

    $scope.ricerca_quadrimestre_select = {
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

    $scope.ricerca_anno_select_ats = {
        availableOpt: GestioneAnniService.getAnni(),
        selectedOption: {
            "anno": ""
        } //Il valore di default della SELECT
    };

    $scope.stato_select = {
        availableOpt: StatoInserimentoService.query(),
        selectedOption: {
            "id": "",
            "codice": "",
            "descrizione": "",
            "dataInizioValidita": ""
        }
    };




    $scope.svuota = function() {
        $scope.do_codice_processo = '';
        $scope.do_codice_fiscale = '';
        $scope.do_partita_iva = '';
        $scope.do_nome_ente = '';
        $scope.stato_select.selectedOption = {
            "id": "",
            "codice": "",
            "descrizione": "",
            "dataInizioValidita": ""
        },
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

        $scope.classi_profilo_select.selectedOption = {
            "id": "",
            "descrizione": "",
            "dataInizioValidita": ""
        };
    };

    $scope.svuota_inserimento = function() {
        $scope.ricerca_do_nome_ente = '';
        $scope.ricerca_anno_select_ats.selectedOption.anno = '';
        $scope.ricerca_data_select_ats.selectedOption = {
            "id": '',
            "descrizione": '',
            "IDRegione": ''
        };
        $scope.ricerca_quadrimestre_select.selectedOption = {
            "id": '',
            "descrizione": ''
        };
    };


    $scope.attivaModifica = function() {
        var processoSelezionatoMOD = SelezionaSingoloService.get({id: $scope.idProcessoDaModificare}, function() {
            $scope.processoSelezionatoMOD.listaStruttureDDO = processoSelezionatoMOD.risultato.listaStruttureDDO;
            $scope.processoSelezionatoMOD.visibilita = true;

            angular.element("#caricamento").click();
            angular.element("#parteModifica").click();
            // PromisedService.disattiva_md_caricamento();

        });

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
asanControllers.controller('ModalController', function($scope, close) {

    $scope.close = function(result) {
        close(result, 500);
    };

});