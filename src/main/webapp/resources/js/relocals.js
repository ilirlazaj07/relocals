/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {

    $("#but").button();

    $("#unita_dettaglio").button();

    $("#macro_dettaglio").button();

    $(".but").prop("disabled", true);

    $("#unita_dettaglio").prop("disabled", true);

    $("#macro_dettaglio").prop("disabled", true);

    $("#accordion").accordion({
        collapsible: true, active: false
    });

    $("#tabs").tabs();

    $("#tabs2").tabs();


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

$(function() {
    var $altezzaFinestra = $(document).height();
    var $altezzaFinal = $("#final").height();
    var $altezza = $altezzaFinestra - $altezzaFinal;

    $("#contenuto").height($altezza);
    $("#parte_nav").height($altezza);
    $("#parte_contenuto").height($altezza);
    $("#").height($altezza);

});