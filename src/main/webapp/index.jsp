<%-- 
    Document   : main_jsp
    Created on : 10-feb-2016, 14.28.47
    Author     : Ilir Lazaj
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">

        <!-- librerie bootstrap -->


        <script src="resources/js/jquery-1.10.0.min.js" type="text/javascript"></script>
        <script src="jquery-ui.js" type="text/javascript"></script>
        <link href="jquery-ui.css" rel="stylesheet" type="text/css" />

        <link href="resources/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="resources/css/relocals.css" rel="stylesheet" type="text/css" />
        <script src="resources/js/bootstrap.min.js" type="text/javascript"></script> 


        <!-- altre librerie JS e file CSS CUSTOM -->
        <link href="resources/css/style_lombardia.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="resources/js/angular/angular.min.js"></script>       
        <script type="text/javascript" src="resources/js/angular/angular-resource.js"></script>       
        <script type="text/javascript" src="resources/js/angular/controllers.js"></script>
        <script type="text/javascript" src="resources/js/angular/services.js"></script>
        <script type="text/javascript" src="resources/js/angular/directives.js"></script>
        <script type="text/javascript" src="resources/js/angular/app.js"></script>

        <!--   <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.6.0.js"></script>  -->

        <script>



            $(function() {
                $("#accordion").accordion({
                    collapsible: true, active: false
                });

                $("#nav-accordion").accordion({
                    collapsible: true, active: false
                });

                $("#search").on("click", function() {
                    $("#hRicerca").click();
                });


                $("#button-ricerca").on("click", function() {
                    $("#hResults").click();
                });

                $("#persone").on("click", function() {
                    alert('Done !');
                    //$("#hValori").click();
                });

                $("#inserimento").on("click", function() {
                    $("#hInserimento").click();
                });


                $("#test").on("click", function() {
                    $("#hTest").click();
                });
            });

        </script>



        <title>Relocals</title>
    </head>
    <body data-ng-app="relocalsApp" data-ng-controller="RelocalsController">
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
            <h2 id="sottoTitolo" class="sottotitolo_applicativo">Sistema Intermediazione Telematica</h2>
            <div id="separatore" class="content_separator">&nbsp;</div>

            <!-- AREA UTENTE  -->

            <div id="area_utente">
                <span class="dati_utente">
                    <span class="ico_utente"></span>
                    Utente: da definire
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

        <!-- BARRA A SINISTRA 

        <div id='cssmenu' class="w3-sidenav w3-light-grey w3-border" style="width:15%">
            <ul>
                <li class='has-sub'><a href='#'><span style="line-height: 1em;">Relocals</span></a>
                    <ul>
                        <li><a href='#'><span id="inserimento">Inserimento</span></a></li>
                        <li id="r"><a href='#'><span id="ricerca">Ricerca</span></a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <div id="spera" style="margin-left:15%;">

            <header class="w3-container " id="head" style="height: 2.5em;background-color: #c2ddc0;line-height: 2.5">
                <span style="font-weight: bold">Titolo Pagina</span>
            </header>

            <div id="container1">
                <div id="accordion">
                    <h3 id="hInserimento">Inserimento</h3>
                    <div id="bbb">
                        <p>
                            Sezione Inserimento
                        </p>
                    </div>
                    <h3 id="hRicerca">Ricerca</h3>
                    <div>
                        <p>
                            Sezione Ricerca
                        </p>
                    </div> 
                    
                      <h3 id="hRicedrca">Ricerca</h3>
                    <div>
                        <p>
                            Sezione Ricerca
                        </p>
                    </div> 

                </div>

            </div>

        </div>
        
        -->
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
                <h2 class="demoHeaders">Tabs</h2>
                <div id="tabs">
                    <ul>
                        <li><a href="#tabs-1">First</a></li>
                        <li><a href="#tabs-2">Second</a></li>
                        <li><a href="#tabs-3">Third</a></li>
                    </ul>
                    <div id="tabs-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div id="tabs-2">Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel, aliquet ornare, felis. Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.</div>
                    <div id="tabs-3">Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque nisi urna, interdum eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper augue.</div>
                </div>
            </div>
        </div>
    </div>

    <script>
        $(function() {
            var $altezzaFinestra = $(document).height();
            var $altezzaFinal = $("#final").height();
            var $altezza = $altezzaFinestra - $altezzaFinal;
            $("#contenuto").height($altezza);
            $("#parte_nav").height($altezza);
            $("#parte_contenuto").height($altezza);
            $("#").height($altezza);
        });

        function test() {
        }


    </script>
</body>
</html>
