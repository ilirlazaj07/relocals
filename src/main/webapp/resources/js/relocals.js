/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {

    $("#but").button();

    $("#unita_dettaglio").button();

    $("#macro_dettaglio").button();

    $("#ok").button();

    $("#ok2").button();

    $("#ok3").button();

    $("#but5").button();

    $("#buttonRicerca").button();

    $("#buttonSvuota").button();

    $(".but").prop("disabled", true);

    $("#unita_dettaglio").prop("disabled", true);

    $("#macro_dettaglio").prop("disabled", true);

    $("#accordion").accordion({
        collapsible: true,
        active: false
    });

    $("#tabs").tabs();

    $("#tabs2").tabs();

    $("#tabs_unita").tabs();

    $("#nav-accordion").accordion({
        collapsible: true, active: false
    });

    $("#search").on("click", function() {
        $("#hRicerca").click();
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