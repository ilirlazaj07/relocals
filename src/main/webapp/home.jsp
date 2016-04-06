<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">

        <script src="resources/js/jquery-1.10.0.min.js" type="text/javascript"></script>
        <link href="jquery-ui.css" rel="stylesheet" type="text/css" />

        <link href="resources/css/bootstrap.min.css" rel="stylesheet" type="text/css" />

        <script src="resources/js/bootstrap.min.js" type="text/javascript"></script> 

        <!-- altre librerie JS e file CSS CUSTOM -->
        <link href="resources/css/style_lombardia.css" rel="stylesheet" type="text/css" />
        <link href="resources/css/relocals.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/angular-ui/bower-ui-grid/master/ui-grid.min.css"> 

        <script type="text/javascript" src="resources/js/angular/angular.min.js"></script>     
        <script type="text/javascript" src="resources/js/angular/angular-resource.js"></script>   

        <link rel="stylesheet" href="https://rawgit.com/esvit/ng-table/master/dist/ng-table.min.css">
        <script src="https://rawgit.com/esvit/ng-table/master/dist/ng-table.min.js"></script>        
        <script type="text/javascript" src="resources/js/angular/controllers.js"></script>
        <script type="text/javascript" src="resources/js/angular/services.js"></script>
        <script type="text/javascript" src="resources/js/angular/directives.js"></script>
        <script type="text/javascript" src="resources/js/angular/app.js"></script>


        <script type="text/javascript" src="resources/js/moment.js"></script>
        <script type="text/javascript" src="resources/js/twix.js"></script>

        <script type="text/javascript" src="resources/js/relocals.js"></script>



        <script>


        </script>
        <title>Relocals</title>
    </head>
    <body data-ng-app="relocalsApp" data-ng-controller="RelocalsController" style="background: lightgrey">


        <c:set var="tokenTEST" scope="page" value="${param.token}"/>
        <input type="hidden" id="passaValori" value="Test" data-ng-click="transport('${tokenTEST}');" />
        <input type="hidden" id="idEnte" value="idEnte" data-ng-click="getIdEnte('${idEnte}');" />




        <!-- BARRA ISTITUZIONALE 
        Per la customizzazione del TEMA ricordarsi di usare i file già forniti dopo il download
        -->
        <div class="modal fade" id="caricamento" role="dialog">
            <div id="crop" class="modal-dialog">
                <img src="http://loadinggif.com/images/image-selection/32.gif" /> 
            </div>
        </div>

        <div id="final">
            <div id="barra_istituzionale">
                <div class="spalla_sx">
                    <a href="http://www.regione.lombardia.it">
                        <img class="logo" src="images/tagli_html/top_logoregione.gif" alt="Regione Lombardia"/>
                    </a>
                    <div class="fascia_sup"></div>
                    <div class="fascia_inf"></div>
                </div>
                <div class="spalla_dx">
                    <div class="fascia_sup"></div>
                    <div class="fascia_inf"></div>
                </div>
                <div class="fascia_sup">
                    <ul class="voci_navigazione">

                    </ul>
                </div>
                <div class="fascia_inf">
                    <div class="sormontante_titolo"></div>
                    <div class="area_titolo">
                        <div class="spalla_sx"></div>
                        <div class="spalla_dx"></div>
                        <span class="numero_verde">ver. 80.14.00</span>
                        <h1 class="titolo">sintel </h1>
                        <h1 class="nome_gamma_servizi">e-procurement </h1>
                    </div>
                </div>
            </div>
            <h2 id="sottoTitolo" class="sottotitolo_applicativo" style="background: white">Sistema Intermediazione Telematica</h2>
            <div id="separatore"   class="content_separator" style="background: white">&nbsp;</div>

            <!-- AREA UTENTE  -->

            <div id="area_utente">
                <span class="dati_utente">
                    <span class="ico_utente"></span>
                    Utente: <%= request.getParameter("token")%>
                </span>

                <span class="dati_utente asnspa">
                    -
                </span>

                <span class="dati_utente asnspa">
                    Ruolo: <span>da definire</span>
                </span>

                <span class="dati_utente asnspa">
                    -
                </span>

                <span class="dati_utente asnspa">
                    SUPERVISORE: <span>da definire</span>
                </span>

                <span class="dati_utente asnspa">
                    -
                </span>

                <span class="dati_utente asnspa">
                    Profilo: <span>da definire</span>
                </span>

                <span class="dati_utente asnspa">
                    -
                </span>

                <span class="dati_utente asnspa">
                    Ente/Ats Rif.: <span>da definire</span>
                </span>

                <ul class="links">
                    <li class="first">
                        <a href="#"><img src="images/icone/18/ico_cambioIdentita_18.gif" alt="disconetti"/>Disconnetti</a>
                    </li>
                </ul>
            </div>
        </div>

        <div id="contenuto">

            <div id="parte_nav">
                <div id="nav-accordion">
                    <h3 id="hRicerca">Processo DO</h3>
                    <div style="background: lightgrey">
                        <ul>
                            <li ><a href='#'><span id="test">Ricerca</span></a></li>
                            <li><a href='#'><span id="inserimento">Inserimento</span></a></li>
                        </ul>
                    </div> 
                </div>
            </div>

            <div id="parte_contenuto">
                <div id="accordion">

                    <h3 id="hInserimento">Processo DO- Inserimento</h3>
                    <div>

                        <div hidden="true">  
                            <p><a href="#" id="dialog-link" class="ui-state-default ui-corner-all">
                                    <span class="ui-icon ui-icon-newwin"></span></a>
                            </p>
                        </div> 

                        <form class="form-ricerca" role="form" data-ng-submit="inserimento()">
                            <div class="form-group">
                                <!-- Parte di test per l'inserimento 
                                <div class="left-label">
                                    <label>Ente</label>
                                </div>
                                <div>
                                    <span>ASST OVEST MILANESE</span>
                                </div><br><br>


                                <div class="left-label">
                                    <label>ATS</label>
                                </div>

                                <div>
                                    <select class="form-control" name="stato_processo_do" id="stato_processo_do">
                                        <option value="" selected="selected"></option>
                                    </select>    
                                </div><br><br>    

                                <div class="left-label">
                                    <label>Anno</label>
                                </div>
                                <div>
                                    <p>12/02/1987 </p>
                                    <p>Quadrimestre </p>
                                    <p>1 </p>
                                    <p>Stato </p>
                                    <p>in inserimento </p>
                                </div><br><br>

                                <div class="left-label">
                                    <label>Data apertura</label>
                                </div>

                                <div>
                                    <p>12/02/1987 </p>
                                    <p>Data consilidamento </p>
                                    <p>1</p>
                                    <p>Data chiusura</p>
                                    <p>12/02/1987</p>
                                </div> <br><br>
                                <div id="div-inserimento">
                                    <div id="result">
                                        <div>

                                            <table data-ng-show="persone.length">
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Nome</th>
                                                    <th>Cognome</th>
                                                </tr>
                                                <tr data-ng-repeat="persona in persone" data-ng-click="setPersonaSelezionata(persona);" ng-class="{strutturaSelezionataClass: persona === personaDaModificare.valore}">
                                                    <td ng-class="{strutturaSelezionataClass: persona === personaDaModificare.valore}">
                                                        <select style="width: 165px;background: white; color: black"  data-ng-show="personaDaModificare.visibilita && (persona === personaDaModificare.valore)" class="form-control" name="quadrimestre" 
                                                                data-ng-model="quadrimestre_select.selectedOption"
                                                                data-ng-options="option.descrizione for option in quadrimestre_select.availableOpt track by option.id">
                                                            <option value="" selected="selected"></option>
                                                        </select>   
                                <!--   <input class="form-control" style="height: 17px;" type="text" data-ng-show="personaDaModificare.visibilita && (persona === personaDaModificare.valore)"  />--><span data-ng-show="!(personaDaModificare.visibilita && persona === personaDaModificare.valore)">{{persona.id}}</span></td >
                                <!--          <td  ng-class="{strutturaSelezionataClass: persona === personaDaModificare.valore}">
                                            <input data-ng-model="personaDaModificare.valore.nome" class="form-control"  style="height: 30px;width: 120px;background: white;color: black" type="text" data-ng-show="personaDaModificare.visibilita && (persona === personaDaModificare.valore)"  />   <span data-ng-show="!(personaDaModificare.visibilita && (persona === personaDaModificare.valore))">{{persona.nome}}</span>
                                        </td>
                                        <td  ng-class="{strutturaSelezionataClass: persona === personaDaModificare.valore}">
                                            <input class="form-control" data-ng-model="personaDaModificare.valore.cognome" style="height: 30px;width: 120px;background: white;color: black" type="text" data-ng-show="personaDaModificare.visibilita && (persona === personaDaModificare.valore)"  />     <span data-ng-show="!(personaDaModificare.visibilita && (persona === personaDaModificare.valore))">{{persona.cognome}}</span>
                                        </td>
                                    </tr>
                                </table>                                             

                            </div>
                        </div>
                        <div id="bottonidiv">
                            <button type="submit" id="button-ricerca" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" data-toggle="modal" data-target="#caricamento" role="button" style="width: 50%;">
                                <span id="ricerca" class="ui-button-text">Aggiungi</span>
                            </button>

                            <button id="button-ricerca" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" data-toggle="modal" data-target="#caricamento" role="button" style="width: 50%;">
                                <span id="ricerca" class="ui-button-text">Elimina</span>
                            </button>

                            <input type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" data-ng-click="modificaRigaSelezionata();" style="width: 50%" value="Modifica" />

                            <input type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" data-ng-click="cancelModifica();" style="width: 50%" value="Cancel" />


                            <button  type="submit" id="button-modifica" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"  role="button" style="width: 50%;">
                                <span id="modifica" class="ui-button-text">Salva</span>
                            </button>
                        </div>
                    </div>

                    <br><br> -->


                                <div class="left-label" >                
                                    <label for="ats">Nome Ente </label>
                                </div>
                                <div>
                                    <span>${nomeEnte}</span>
                                </div>
                                <br><br>
                                <div class="left-label" >                
                                    <label for="ats">ATS </label>
                                </div>
                                <div>
                                    <select data-ng-model="ricerca_data_select_ats.selectedOption" 
                                            data-ng-options="option.codice+' - '+option.descrizione for option in data_select_ats.availableOptions track by option.id" 
                                            name="ats" 
                                            id="ats" 
                                            class="form-control">
                                        <option value="" selected="selected"></option>
                                    </select>   
                                </div><br><br>
                                <div class="left-label">                
                                    <label for="anno">Anno </label>
                                </div>
                                <div>
                                    <select data-ng-model="ricerca_anno_select_ats.selectedOption" 
                                            data-ng-options="option.anno for option in anno_select_ats.availableOpt track by option.anno" 
                                            class="form-control" 
                                            name="anno" 
                                            id="anno">
                                        <option value="" selected="selected"></option>
                                    </select>    
                                </div><br><br>


                                <div class="left-label">                
                                    <label for="quadrimestre">Quadrimestre </label>
                                </div>
                                <div>
                                    <select class="form-control" name="quadrimestre" id="quadrimestre" 
                                            data-ng-model="ricerca_quadrimestre_select.selectedOption"
                                            data-ng-options="option.descrizione for option in quadrimestre_select.availableOpt track by option.id">
                                        <option value="" selected="selected"></option>
                                    </select>    
                                </div><br><br>



                            </div>        
                            <div class="bottoni_form">
                                <button type="submit" id="button-ricerca" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button">
                                    <span id="ricerca" class="ui-button-text">Salva</span>
                                </button>
                            </div>
                        </form>
                    </div>


                    <h3 id="hTest">Processo DO- Ricerca</h3>
                    <div>
                        <form  class="form-ricerca" role="form" data-ng-submit="ricerca()" >
                            <div class="form-group">
                                <div class="left-label">                
                                    <label for="codice_processo_do">Codice Processo DO </label>
                                </div>
                                <div>
                                    <input data-ng-model="do_codice_processo" type="text" class="form-control" id="codice_processo_do" name="codice_processo_do" > 
                                </div>
                                <br><br>
                                <div class="left-label">
                                    <span style="font-weight: bold">Codice Fiscale Ente</span>
                                </div>
                                <div>
                                    <input style="margin-right: 15px;" data-ng-model="do_codice_fiscale" type="text" class="form-control" id="codice_processo_do" name="codice_processo_do" > 
                                    <p style="font-weight: bold">Partita IVA Ente </p>
                                    <p>{{quadrimestre}}</p>
                                    <input data-ng-model="do_partita_iva" type="text" class="form-control" id="codice_processo_do" name="codice_processo_do" > 
                                </div>
                                <br><br>
                                <div class="left-label" >                
                                    <label for="ats">Nome Ente </label>
                                </div>
                                <div>
                                    <input data-ng-model="do_nome_ente" type="text" class="form-control" id="codice_processo_do" name="codice_processo_do" > 

                                </div>
                                <br><br>
                                <div class="left-label" >                
                                    <label for="ats">ATS </label>
                                </div>
                                <div>
                                    <select data-ng-model="data_select_ats.selectedOption" 
                                            data-ng-options="option.codice+' - '+option.descrizione for option in data_select_ats.availableOptions track by option.id" 
                                            name="ats" 
                                            id="ats" 
                                            class="form-control">
                                        <option value="" selected="selected"></option>
                                    </select>   
                                </div><br><br>
                                <div class="left-label">                
                                    <label for="anno">Anno </label>
                                </div>
                                <div>
                                    <select data-ng-model="anno_select_ats.selectedOption" 
                                            data-ng-options="option.anno for option in anno_select_ats.availableOpt track by option.anno" 
                                            class="form-control" 
                                            name="anno" 
                                            id="anno">
                                        <option value="" selected="selected"></option>
                                    </select>    
                                </div><br><br>


                                <div class="left-label">                
                                    <label for="quadrimestre">Quadrimestre </label>
                                </div>
                                <div>
                                    <select class="form-control" name="quadrimestre" id="quadrimestre" 
                                            data-ng-model="quadrimestre_select.selectedOption"
                                            data-ng-options="option.descrizione for option in quadrimestre_select.availableOpt track by option.id">
                                        <option value="" selected="selected"></option>
                                    </select>    
                                </div><br><br>

                                <div class="left-label">                
                                    <label for="stato_processo_do">Stato del Processo DO </label>
                                </div>
                                <div>
                                    <select class="form-control" name="stato_processo_do" id="stato_processo_do"
                                            data-ng-model="stato_select.selectedOption"
                                            data-ng-options="option.descrizione for option in stato_select.availableOpt track by option.id">
                                        <option value="" selected="selected"></option>
                                    </select>    
                                </div><br><br>     
                            </div>     

                            <div class="bottoni_form">
                                <button  id="buttonRicerca" data-toggle="modal" data-target="#caricamento" type="submit" style="width: 65px;margin-left: 2px" >
                                    Ricerca
                                </button> 
                                <button type="button" ng-click="svuota()"  id="buttonSvuota" data-ng-click="svuota();" style="width: 65px;margin-left: 2px" >
                                    Svuota
                                </button>  
                            </div>

                        </form>
                    </div>


                    <h3 id="hResults">Processo DO- Risultati</h3>
                    <div>


                        <!--
                        
                         <table class="asanScrollbar table-condensed" style="width: 100%;">
                            <thead class="asanHead">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                </tr>
                            </thead>
                            <tr data-ng-repeat="processo in testProcessi" data-ng-click="defineProcesso(processo);">
                                <td><span>{{processo.id}}</span></td>
                                <td><span>{{processo.nome}}</span></td>
                            </tr>                       
                        </table>
                        
                        -->


                        <table data-ng-show="processi.length"> 

                            <tr>
                                <th>Codice DDO</th> 
                                <th>Ente Gestore</th> 
                                <th>ATS</th> 
                                <th>Anno</th> 
                                <th>Quad.</th> 
                                <th>Stato</th> 
                            </tr>

                            <tr data-ng-repeat="processo in processi"  data-ng-click="getDettagliSingoloProcesso(processo);" data-toggle="modal" data-target="#caricamento">
                                <td><span>{{processo.codiceProcesso}}</span></td >
                                <td><span>{{processo.ente.nome}}</span></td >
                                <td><span>{{processo.asl.descrizione}}</span></td > 
                                <td><span>{{processo.anno}}</span></td > 
                                <td><span>{{processo.quadrimestre}}</span></td >
                                <td><span>{{processo.stato.descrizione}}</span></td>
                            </tr>
                        </table>


                    </div>

                    <h3 id="hValori">Processo DO- Visualizza</h3>
                    <!--                      
                        {{dettaglio}}<br><br>
                       <asan-submit nome="Registra"></asan-submit>                                               
                    -->

                    <div id="tabs">
                        <ul data-ng-show="processoSelezionato.visibilita">
                            <li><a href="#processo-do">Processo DO</a></li>
                            <li><a class="datiStruttura" href="#dati-struttura">Dati Struttura</a></li>
                            <li><a href="#unita-org">Unità organizzative</a></li>
                        </ul>


                        <div id="processo-do" data-ng-show="processoSelezionato.visibilita">

                            <form class="form-ricerca" role="form" >
                                <div class="form-group">
                                    <div class="left-label2">
                                        <span style="font-weight: bold ">Ente</span>
                                    </div>
                                    <div>
                                        <span>{{ente}}</span>
                                    </div><br><br>


                                    <div class="left-label2">
                                        <span style="font-weight: bold">ATS</span>
                                    </div>

                                    <div>
                                        <span>{{asl}}</span>
                                    </div><br><br>    
                                    <div class="left-label2">
                                        <span style="font-weight: bold">Anno</span>
                                    </div>
                                    <div>
                                        <p>{{annoPDO}}</p>
                                        <p style="font-weight: bold">Quadrimestre </p>
                                        <p>{{quadrimestre}}</p>
                                        <p style="font-weight: bold">Stato </p>
                                        <p>{{statoPDO.descrizione}}</p>
                                    </div><br><br>
                                    <div class="left-label2">
                                        <span style="font-weight: bold">Data apertura</span>
                                    </div>

                                    <div>
                                        <p>{{dataApertura}}</p>
                                        <p style="font-weight: bold">Data consilidamento </p>
                                        <p>{{dataConsolidamento}}</p>
                                        <p style="font-weight: bold">Data chiusura</p>
                                        <p>{{dataChiusura}}</p>
                                    </div> <br><br>

                                    <div class="bordo" style="border: 1px solid #D7EAD5;">
                                        <div id="bordo_div">
                                            <span>Strutture</span>
                                        </div>
                                        <div>
                                            <table id="strutture" style="width: 70%; float: left">
                                                <tr data-ng-repeat="struttura in processoSelezionato.listaStruttureDDO" ng-click="getStrutturaSelezionata(struttura)" ng-class="{strutturaSelezionataClass: struttura === processoSelezionato.listaStruttureDDO.strutturaSelezionata}">
                                                    <td style="border: 1px solid lightgray;"><asan-stato hidden="true" stato="{{struttura.cdStatoCompilazione}}"></asan-stato> <span>{{struttura.nome}}</span></td >
                                                </tr>
                                            </table>
                                            <button  id="but" data-toggle="modal" data-target="#caricamento" data-ng-click="getDettagliStrutturaSelezionata();" style="width: 90px;margin-left: 2px" >
                                                Visualizza
                                            </button>  
                                        </div>
                                    </div><br> 

                                </div>   
                                <div class="bottoni_form">
                                    <asan-submit nome="Modifica" id="buttonModifica"></asan-submit>           
                                    <asan-submit nome="Calcolo dot."></asan-submit>  
                                    <asan-submit nome="Report"></asan-submit>  
                                    <asan-submit nome="Consolida"></asan-submit>  
                                </div>

                            </form>

                        </div>


                        <div id="dati-struttura" data-ng-show="showDatiStruttura" style="border: 2px solid #D7EAD5">       
                            <form class="form-ricerca" role="form" >
                                <div class="form-group">
                                    <div class="left-label">
                                        <label>Codice</label>
                                    </div>
                                    <div>
                                        <span>{{codiceStruttura}}</span>
                                    </div>
                                    <br><br>
                                    <div class="left-label">
                                        <label>Nome</label>
                                    </div>
                                    <div>
                                        <span>{{nomeStruttura}}</span>
                                    </div>
                                    <br><br> 

                                    <div class="left-label">
                                        <label>Tipo struttura</label>
                                    </div>
                                    <div>
                                        <span>{{tipoStruttura}}</span>
                                    </div><br><br>


                                    <div class="left-label">
                                        <label>Tipo Ospedale</label>
                                    </div>

                                    <div>
                                        <span>{{tipoOspedale}}</span>
                                    </div><br><br>    

                                    <div class="left-label">
                                        <label>Situazione Inserimento dati</label>
                                    </div>
                                    <div>
                                        <span></span>
                                    </div>
                                </div>   

                                <div class="bottoni_form">
                                    <asan-submit nome="Modifica" id="buttonModifica2"></asan-submit>           
                                    <asan-submit nome="Calcolo dot."></asan-submit>  
                                    <asan-submit nome="Report"></asan-submit>  
                                    <asan-submit nome="Consolida"></asan-submit>  
                                </div>
                            </form><div style="height: 197px"></div>
                        </div>



                        <div id="unita-org">
                            <div>
                                <!-- style="border: 2px solid #D7EAD5" -->
                                <form class="form-ricerca" role="form" data-ng-show="showUnitaOrganizzative">
                                    <div class="form-group" data-ng-show="true">
                                        <div>                                  
                                            <table id="unita" style="width: 65%; float: left"><br>
                                                <tr>
                                                    <th></th>
                                                    <th>Codice UO</th>
                                                    <th>Nome</th>
                                                    <th>N.Seq</th>
                                                    <th>Descrizione</th>
                                                </tr>
                                                <tr data-ng-repeat="unita in processoSelezionato.unitaOrganizzative" data-ng-click="getUnitaSelezionata(unita);" ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}">
                                                    <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><asan-stato hidden="true" stato="{{unita.numSequenza}}"></asan-stato></td>
                                                <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><span>{{unita.tipoUnitaOrganizzativa.codice}}</span></td>
                                                <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><span>{{unita.tipoUnitaOrganizzativa.descrizione}}</span></td>
                                                <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><span>{{unita.numSequenza}}</span></td>
                                                <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><span>{{unita.descrizione}}</span></td>
                                                </tr>
                                            </table> 
                                            <div style="width: 35%;float: left">
                                                <button  id="unita_dettaglio"  data-ng-click="getDettaglioPerSingolaUnita();" style="width: 90px;margin-left: 2px" >
                                                    Dettaglio
                                                </button> 
                                            </div>
                                        </div>

                                        <div data-ng-show="processoSelezionato.listaStruttureDDO.unitaSelezionata"><br>
                                            <div data-ng-show="processoSelezionato.listaStruttureDDO.unitaSelezionata">
                                                <span style="border: 1px solid #D7EAD5;
                                                      background: #c2ddc0">Macroattività
                                                </span>
                                            </div>
                                            <table id="macro" style="width: 65%; float: left"><br>
                                                <tr>
                                                    <th></th>
                                                    <th>Nome</th>
                                                    <th>N.Seq</th>
                                                    <th>Descrizione</th>
                                                </tr>
                                                <tr data-ng-repeat="macro in processoSelezionato.macroAttivita" data-ng-click="getMacroSelezionata(macro);" ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}">
                                                    <td ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}"><asan-stato hidden="true" stato="{{2}}"></asan-stato></td>
                                                <td ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}"><span>{{macro.tipoMacroAttivita.descrizione}}</span></td>  
                                                <td ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}"><span>{{macro.numSequenza}}</span></td>  
                                                <td ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}"><span>{{macro.descrizione}}</span></td>  
                                                </tr>
                                            </table>
                                            <div style="width: 35%;float: left">
                                                <button  id="macro_dettaglio" data-ng-click="getDettaglioMacroSelezionata();" style="width: 90px;margin-left: 2px" >
                                                    Dettaglio
                                                </button> 
                                            </div>
                                        </div>
                                    </div>   

                                    <div class="bottoni_form">
                                        <asan-submit nome="Modifica" id="buttonModifica4"></asan-submit>           
                                        <asan-submit nome="Calcolo dot."></asan-submit>  
                                        <asan-submit nome="Report"></asan-submit>  
                                        <asan-submit nome="Consolida"></asan-submit>  
                                    </div>
                                </form>

                                <!-- Parte per i dettagli singola Unita -->    
                                <form class="form-ricerca" role="form" data-ng-show="showDettaglioUnitaOrganizzative.visibilita" >
                                    <div class="form-group">

                                        <div class="left-label2">
                                            <label>Codice UO</label>
                                        </div>
                                        <div style="float: left">
                                            <p>{{codiceUOUnita}}</p>
                                            <p style="font-weight: bold;">Nome </p>
                                            <p>{{nomeUOUnita}}</p>
                                        </div><br><br>

                                        <div class="left-label2">
                                            <label>N.Seq</label>
                                        </div>
                                        <div>
                                            <p>{{sequenzaUOUnita}}</p>
                                            <p style="font-weight: bold;">Descrizione </p>
                                            <p>{{descrizioneUOUnita}}</p>
                                        </div> <br><br>
                                        <div class="left-label">
                                            <label>Situazione Inserimento dati</label>
                                        </div>
                                        <div>
                                            <span>val</span>
                                        </div><br><br>

                                        <div id="tabs_unita">
                                            <ul>
                                                <li><a href="#ragruppamento_uo">Ragruppamento UO</a></li>
                                                <li><a href="#classi_d_profili">Classi di profili</a></li>
                                            </ul>
                                            <div id="ragruppamento_uo">
                                                <div>
                                                    <!--  -->

                                                    <table id="strutture_classi_d_profili" style="float: left">
                                                        <tr>
                                                            <th>Codice UO</th>
                                                            <th>Nome</th>
                                                            <th>N.SEQ</th>
                                                            <th>Descrizione</th>
                                                        </tr>
                                                        <tr data-ng-repeat="unita_assiociata in processoSelezionato.listaUOAssociate">
                                                            <td><span>{{unita_assiociata.codice}}</span></td>  
                                                            <td><span>{{unita_assiociata.nome}}</span></td>  
                                                            <td><span>{{unita_assiociata.numSequenza}}</span></td>  
                                                            <td><span>{{unita_assiociata.descrizione}}</span></td>  

                                                        </tr>
                                                    </table>
                                                </div>
                                                <button  id="ok" data-ng-click="backToUnita();" style="width: 90px;margin-left: 2px; float: left" >
                                                    OK
                                                </button> 
                                            </div>
                                            <div id="classi_d_profili">
                                                <div>
                                                    <table id="strutture_ragruppamento_uo" style="float: left">
                                                        <tr>
                                                            <th>Classe di profilo</th>
                                                            <th>Numero ore lavorate</th>
                                                        </tr>
                                                        <tr data-ng-repeat="classe in processoSelezionato.classiProfili">
                                                            <td><span>{{classe.classeProfilo.descrizione}}</span></td>  
                                                            <td><span>{{classe.numeroOre}}</span></td>  
                                                        </tr>
                                                    </table>
                                                </div>
                                                <button  id="ok3" data-ng-click="backToUnita();" style="width: 90px;margin-left: 2px" >
                                                    OK
                                                </button> 
                                            </div>

                                            <!-- Update TEST -->

                                        </div><br> 
                                    </div>   
                                    <div class="bottoni_form">
                                        <asan-submit nome="Modifica" id="buttonModifica5"></asan-submit>           
                                        <asan-submit nome="Calcolo dot."></asan-submit>  
                                        <asan-submit nome="Report"></asan-submit>  
                                        <asan-submit nome="Consolida"></asan-submit>  
                                    </div>

                                </form> 



                                <!-- Parte per i dettagli singola MacroAttività -->    
                                <form class="form-ricerca" role="form" data-ng-show="showDettaglioMacroAttivita.visibilita" >
                                    <div class="form-group">

                                        <div class="left-label">
                                            <label>Nome</label>
                                        </div>
                                        <div>
                                            <span>{{macroSelezionataNome}}</span>
                                        </div><br><br>

                                        <div class="left-label">
                                            <label>N.Seq</label>
                                        </div>
                                        <div>
                                            <p>{{macroSelezionataNSeq}}</p>
                                            <p style="font-weight: bold;">Descrizione </p>
                                            <p>{{macroSelezionataDescrizione}}</p>
                                        </div> <br><br>


                                        <div class="left-label">
                                            <label>Situazione definizione valori</label>
                                        </div>
                                        <div>
                                            <span></span>
                                        </div><br><br>

                                        <table id="dettagli_macro" style="width: 50%; float: left">
                                            <tr>
                                                <th>Codice</th>
                                                <th>Descrizione</th>
                                                <th>Valore</th> 
                                            </tr>
                                            <tr data-ng-repeat="dettaglioMacro in listaParametriMacro">
                                                <td><span>{{dettaglioMacro.tipo.codice}}</span></td>  
                                                <td><span>{{dettaglioMacro.tipo.descrizione}}</span></td>  
                                                <td><span>{{dettaglioMacro.valore}}</span></td>  
                                            </tr>
                                        </table>

                                        <button  id="ok2" data-ng-click="backToUnita();" style="width: 90px;margin-left: 2px" >
                                            OK
                                        </button> 


                                    </div>   
                                    <div class="bottoni_form">
                                        <asan-submit nome="Modifica" id="buttonModifica7"></asan-submit>           
                                        <asan-submit nome="Calcolo dot."></asan-submit>  
                                        <asan-submit nome="Report"></asan-submit>  
                                        <asan-submit nome="Consolida"></asan-submit>  
                                    </div>

                                </form> 

                            </div>
                            <div id="compensatore"></div>
                        </div>
                    </div> <!-- Fine del main tabs -->

                    <h3 id="parteModifica">Processo DO- Modifica</h3>
                    <div>
                        <div>
                            <table class="tabmia1" >
                                <tr>
                                    <th>ID</th>
                                    <th >Nome</th>
                                    <th>Cognome</th>
                                </tr>
                            </table>
                            <div style="height: 100px; overflow-y: auto; overflow-x: hidden; width: 50%;border: 0.1px solid lightgrey">
                                <table class="tabmia">
                                    <tbody >
                                        <tr data-ng-repeat="utente in utenti">
                                            <td><span>{{utente.id}}</td>  
                                            <td><span>{{utente.nome}}</span></td>    
                                            <td><span>{{utente.cognome}}</span></td>    
                                        </tr>
                                    </tbody>
                                </table>
                            </div>       
                        </div>
                        <style>
                            .tabmia1{
                                table-layout: fixed;
                                width: 50%;
                            }
                            th, td {
                                width: 100px;
                            }
                        </style>
                        <br>

                        <!-- ui-dialog -->

                        <div id="tabs_modifica">
                            <ul data-ng-show="processoSelezionato.visibilita">
                                <li><a href="#processo-do">Processo DO</a></li>
                                <li><a class="datiStruttura" href="#dati-struttura">Dati Struttura</a></li>
                                <li><a href="#unita-org">Unità organizzative</a></li>
                            </ul>

                            <div id="processo-do" data-ng-show="processoSelezionato.visibilita">


                                <div hidden="true" id="dialog-message" title="Esito Operazione">
                                    <p>{{messaggio}}</p>
                                </div>

                                <form class="form-ricerca" role="form" >
                                    <div class="form-group">
                                        <div class="left-label2">
                                            <span style="font-weight: bold ">Ente</span>
                                        </div>

                                        <div>
                                            <span>{{ente}}</span>
                                        </div><br><br>

                                        <div class="left-label2">
                                            <span style="font-weight: bold">ATS</span>
                                        </div>

                                        <div>
                                            <span>{{asl}}</span>
                                        </div><br><br>    
                                        <div class="left-label2">
                                            <span style="font-weight: bold">Anno</span>
                                        </div>
                                        <div>
                                            <p>{{annoPDO}}</p>
                                            <p style="font-weight: bold">Quadrimestre </p>

                                            <p style="font-weight: bold">Stato </p>
                                            <p>{{statoPDO.descrizione}}</p>
                                        </div><br><br>
                                        <div class="left-label2">
                                            <span style="font-weight: bold">Data apertura</span>
                                        </div>

                                        <div>
                                            <p>{{dataApertura}}</p>
                                            <p style="font-weight: bold">Data consilidamento </p>
                                            <p>{{dataConsolidamento}}</p>
                                            <p style="font-weight: bold">Data chiusura</p>
                                            <p>{{dataChiusura}}</p>
                                        </div> <br><br>

                                        <div class="bordo" style="border: 1px solid #D7EAD5;">
                                            <div id="bordo_div">
                                                <span>Strutture</span>
                                            </div>
                                            <div>
                                                <table id="strutture2" style="width: 70%; float: left">
                                                    <tr data-ng-repeat="struttura in processoSelezionato.listaStruttureDDO" ng-click="getStrutturaSelezionata(struttura)" ng-class="{strutturaSelezionataClass: struttura === processoSelezionato.listaStruttureDDO.strutturaSelezionata}">
                                                        <td onclick="al(this);" style="border: 1px solid lightgray;"><asan-stato stato="{{struttura.cdStatoCompilazione}}"></asan-stato> <span>{{struttura.nome}}</span></td >
                                                    </tr>
                                                </table>
                                                <button  id="but" data-toggle="modal" data-target="#caricamento" data-ng-click="getDettagliStrutturaSelezionata();" style="width: 90px;margin-left: 2px" >
                                                    Visualizza
                                                </button>  
                                            </div>
                                        </div><br> 

                                    </div>   


                                </form>

                            </div>


                            <div id="dati-struttura" data-ng-show="showDatiStruttura" style="border: 2px solid #D7EAD5">       
                                <form class="form-ricerca" role="form" >
                                    <div class="form-group">
                                        <div class="left-label">
                                            <label>Codice</label>
                                        </div>
                                        <div>
                                            <span>{{codiceStruttura}}</span>
                                        </div>
                                        <br><br>
                                        <div class="left-label">
                                            <label>Nome</label>
                                        </div>
                                        <div>
                                            <span>{{nomeStruttura}}</span>
                                        </div>
                                        <br><br> 

                                        <div class="left-label">
                                            <label>Tipo struttura</label>
                                        </div>
                                        <div>
                                            <span>{{tipoStruttura}}</span>
                                        </div><br><br>


                                        <div class="left-label">
                                            <label>Tipo Ospedale</label>
                                        </div>

                                        <div>
                                            <span>{{tipoOspedale}}</span>
                                        </div><br><br>    

                                        <div class="left-label">
                                            <label>Situazione Inserimento dati</label>
                                        </div>
                                        <div>
                                            <span></span>
                                        </div>
                                    </div>   


                                </form><div style="height: 197px"></div>
                            </div>



                            <div id="unita-org">
                                <div>
                                    <!-- style="border: 2px solid #D7EAD5" -->
                                    <form class="form-ricerca" role="form" data-ng-show="showUnitaOrganizzative">
                                        <div class="form-group" data-ng-show="true">
                                            <div>
                                                <table id="unitamod" style="width: 65%; float: left">
                                                    <tr>
                                                        <th></th>
                                                        <th>Codice UO</th>
                                                        <th>Nome</th>
                                                        <th>N.Seq</th>
                                                        <th>Descrizione</th>
                                                    </tr>

                                                    <tr data-ng-repeat="unita in processoSelezionato.unitaOrganizzative" data-ng-click="getUnitaSelezionata(unita);" ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}">
                                                        <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><asan-stato hidden="true" stato="{{unita.numSequenza}}"></asan-stato></td>
                                                    <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><span>{{unita.tipoUnitaOrganizzativa.codice}}</span></td>
                                                    <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><span>{{unita.tipoUnitaOrganizzativa.descrizione}}</span></td>
                                                    <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><span>{{unita.numSequenza}}</span></td>
                                                    <td ng-class="{unitaSelezionataClass: unita === processoSelezionato.listaStruttureDDO.unitaSelezionata}" style="border: 1px solid lightgray;"><span>{{unita.descrizione}}</span></td>
                                                    </tr>
                                                </table> 
                                                <div style="width: 35%;float: left">
                                                    <button  id="unita_dettaglio"  data-ng-click="getDettaglioPerSingolaUnita();" style="width: 90px;margin-left: 2px" >
                                                        Dettaglio
                                                    </button> 
                                                </div>
                                            </div>

                                            <div data-ng-show="processoSelezionato.listaStruttureDDO.unitaSelezionata"><br>
                                                <div data-ng-show="processoSelezionato.listaStruttureDDO.unitaSelezionata"><span style="border: 1px solid #D7EAD5;background: #c2ddc0">Macroattività</span></div>
                                                <table id="macro" style="width: 65%; float: left"><br>
                                                    <tr>
                                                        <th></th>
                                                        <th>Nome</th>
                                                        <th>N.Seq</th>
                                                        <th>Descrizione</th>
                                                    </tr>
                                                    <tr data-ng-repeat="macro in processoSelezionato.macroAttivita" data-ng-click="getMacroSelezionata(macro);" ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}">
                                                        <td ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}"><asan-stato stato="{{2}}"></asan-stato></td>
                                                    <td ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}"><span>{{macro.tipoMacroAttivita.descrizione}}</span></td>  
                                                    <td ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}"><span>{{macro.numSequenza}}</span></td>  
                                                    <td ng-class="{macroSelezionataClass: macro === processoSelezionato.listaStruttureDDO.macroSelezionata}"><span>{{macro.descrizione}}</span></td>  
                                                    </tr>
                                                </table>
                                                <div style="width: 35%;float: left">
                                                    <button  id="macro_dettaglio" data-ng-click="getDettaglioMacroSelezionata();" style="width: 90px;margin-left: 2px" >
                                                        Dettaglio
                                                    </button> 
                                                </div>
                                            </div>
                                        </div>   

                                    </form>

                                    <!-- Parte per i dettagli singola Unita -->    
                                    <form class="form-ricerca" role="form" data-ng-submit="aggiornaClasse();"  data-ng-show="showDettaglioUnitaOrganizzative.visibilita" >
                                        <div class="form-group">
                                            <div class="left-label2">
                                                <label>Codice UO</label>
                                            </div>
                                            <div style="float: left">
                                                <p>{{codiceUOUnita}}</p>
                                                <p style="font-weight: bold;">Nome </p>
                                                <p>{{nomeUOUnita}}</p>
                                            </div><br><br>

                                            <div class="left-label2">
                                                <label>N.Seq</label>
                                            </div>
                                            <div>
                                                <p>{{sequenzaUOUnita}}</p>
                                                <p style="font-weight: bold;">Descrizione </p>
                                                <p>{{descrizioneUOUnita}}</p>
                                            </div> <br><br>
                                            <div class="left-label">
                                                <label>Situazione Inserimento dati</label>
                                            </div>
                                            <div>
                                                <span>val</span>
                                            </div><br><br>

                                            <div id="tabs_unita_modifica">
                                                <ul>
                                                    <li><a href="#ragruppamento_uo">Ragruppamento UO</a></li>
                                                    <li><a href="#classi_d_profili">Classi di profili</a></li>
                                                </ul>
                                                <div id="ragruppamento_uo">
                                                    <div>
                                                        <table id="strutture_classi_d_profili" style="float: left">
                                                            <tr>
                                                                <th>Codice UO</th>
                                                                <th>Nome</th>
                                                                <th>N.SEQ</th>
                                                                <th>Descrizione</th>
                                                            </tr>
                                                            <tr data-ng-repeat="unita_assiociata in processoSelezionato.listaUOAssociate">
                                                                <td><span>{{unita_assiociata.codice}}</span></td>  
                                                                <td><span>{{unita_assiociata.nome}}</span></td>  
                                                                <td><span>{{unita_assiociata.numSequenza}}</span></td>  
                                                                <td><span>{{unita_assiociata.descrizione}}</span></td>  

                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <button  id="ok" data-ng-click="backToUnita();" style="width: 90px;margin-left: 2px; float: left" >
                                                        OK
                                                    </button> 
                                                </div>

                                                <!-- Parte di lavoro UPDATE -->
                                                <div id="classi_d_profili">
                                                    <div>
                                                        <table id="strutture_ragruppamento_uo" style="float: left">
                                                            <tr>
                                                                <th>Classe di profili</th>
                                                                <th>Numero ore lavorate</th>
                                                            </tr>

                                                            <tr data-ng-repeat="classe in processoSelezionato.classiProfili" 
                                                                data-ng-click="setClasseSelezionata(classe);" 
                                                                data-ng-class="{strutturaSelezionataClass: classe === classeDaModificare.valore}">
                                                                <td data-ng-class="{strutturaSelezionataClass: classe === classeDaModificare.valore}">
                                                                    <select data-ng-init ="classi_profilo_select.selectedOption = classeProfiloDefault" style="width: 165px;background: white; color: black"  data-ng-show="classeDaModificare.visibilita && (classe === classeDaModificare.valore)" class="form-control" name="classi_profilo" 
                                                                            data-ng-model="classi_profilo_select.selectedOption"
                                                                            data-ng-options="option.descrizione for option in classi_profilo_select.availableOptions track by option.id">
                                                                        <!--  <option value="classeDaModificare.valore.classeProfilo.descrizione" selected="selected"></option> -->
                                                                    </select>   
                                                                    <!--    <input  class="form-control"  style="height: 30px;width: 120px;background: white;color: black" type="text" data-ng-show="classeDaModificare.visibilita && (classe === classeDaModificare.valore)"  /> -->
                                                                    <span data-ng-show="!(classeDaModificare.visibilita && (classe === classeDaModificare.valore))">{{classe.classeProfilo.descrizione}}</span>
                                                                </td>  
                                                                <td data-ng-class="{strutturaSelezionataClass: classe === classeDaModificare.valore}">
                                                                    <span data-ng-show="!(classeDaModificare.visibilita && (classe === classeDaModificare.valore))">{{classe.numeroOre}}</span>
                                                                    <input data-ng-model="classeDaModificare.valore.numeroOre"  class="form-control" style="height: 30px;width: 120px;background: white;color: black" type="text" data-ng-show="classeDaModificare.visibilita && (classe === classeDaModificare.valore)"  />
                                                                </td>  
                                                            </tr>
                                                        </table>
                                                    </div>
                                                    <input type="button" id="ok3" data-ng-click="backToUnita();" style="width: 90px;margin-left: 2px" value="OK" />

                                                    <input type="button" id="ok55" data-ng-click="modificaClasse();" style="width: 90px;margin-left: 2px" value="Modifica" />

                                                    <input   id="ok56" type="submit" style="width: 90px;margin-left: 2px" value="Salva" />



                                                </div>

                                                <!-- Update TEST -->

                                            </div><br> 
                                        </div>   


                                    </form> 



                                    <!-- Parte per i dettagli singola MacroAttività -->    
                                    <form class="form-ricerca" role="form" data-ng-show="showDettaglioMacroAttivita.visibilita" >
                                        <div class="form-group">

                                            <div class="left-label">
                                                <label>Nome</label>
                                            </div>
                                            <div>
                                                <span>{{macroSelezionataNome}}</span>
                                            </div><br><br>

                                            <div class="left-label">
                                                <label>N.Seq</label>
                                            </div>
                                            <div>
                                                <p>{{macroSelezionataNSeq}}</p>
                                                <p style="font-weight: bold;">Descrizione </p>
                                                <p>{{macroSelezionataDescrizione}}</p>
                                            </div> <br><br>


                                            <div class="left-label">
                                                <label>Situazione definizione valori</label>
                                            </div>
                                            <div>
                                                <span></span>
                                            </div><br><br>

                                            <table id="dettagli_macro" style="width: 50%; float: left">
                                                <tr>
                                                    <th>Codice</th>
                                                    <th>Descrizione</th>
                                                    <th>Valore</th> 
                                                </tr>
                                                <tr data-ng-repeat="dettaglioMacro in listaParametriMacro">
                                                    <td><span>{{dettaglioMacro.tipo.codice}}</span></td>  
                                                    <td><span>{{dettaglioMacro.tipo.descrizione}}</span></td>  
                                                    <td><span>{{dettaglioMacro.valore}}</span></td>  
                                                </tr>
                                            </table>

                                            <button  id="ok2" data-ng-click="backToUnita();" style="width: 90px;margin-left: 2px" >
                                                OK
                                            </button> 


                                        </div>   


                                    </form> 

                                </div>
                                <div id="compensatore"></div>
                            </div>
                        </div>
                    </div>
                    <h3 id="hResults">Processo DO- TEST</h3>
                    <div>


                    </div>

                    <!-- 
                                            ------- Parte: Form di TEST -------
                    
                                            <form data-ng-submit="submit()">
                                                Enter text and hit enter:
                                                <input type="text" ng-model="text" name="text" />
                                                <button type="submit" id="button-ricerca" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" style="width: 20%;">
                                                    <span id="ricerca" class="ui-button-text">Submit</span>
                                                </button>                            
                                                <pre>list={{list}}</pre>
                                            </form>
                    
                                             Valore di promise: <p>{{test_cacca}}</p> 
                                          <div>
                                              <button class="btn" data-ng-click="open()">Open me!</button>
                    
                    
                                              <button type="submit" data-ng-click="testPromise()" id="button-ricerca" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" data-toggle="modal" data-target="#caricamento" role="button" style="width: 50%;">
                                                  <span id="ricerca" class="ui-button-text">Promise</span>
                                              </button>                       
                                          </div>
                                                                                                             
                                          <input type="text" data-ng-model="campo" placeholder="valore" />
                    
                                          <input type="text" placeholder="valore" data-ng-model="val" />
                    
                                          <p>{{val}}</p>
                    
                                          <p>{{campo}}</p>
                    -->
                </div>
            </div>
        </div>




        <script src="jquery-ui.js"></script>
        <script type="text/javascript" src="resources/js/table-scroll.min.js"></script>


        <script>



            $("#dialog").dialog({
                autoOpen: false,
                width: 400,
                buttons: [
                    {
                        text: "Ok",
                        click: function() {
                            $(this).dialog("close");
                        }
                    }
                ]
            });

            // Link to open the dialog
            $("#dialog-link").click(function(event) {
                $(function() {
                    $("#dialog-message").dialog({
                        modal: true,
                        autoOpen: true,
                        buttons: {
                            Ok: function() {
                                $(this).dialog("close");
                            }
                        }
                    });
                });
            });

        </script>



    </body>
</html>
