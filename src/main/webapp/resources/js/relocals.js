/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {

    $("#passaValori").click();

    $("#idEnte").click();

    $("#but").button();

    $("#unita_dettaglio").button();

    $("#macro_dettaglio").button();

    $("#ok").button();

    $("#ok2").button();

    $("#ok3").button();

    $("#but5").button();


    $("#buttonSvuota").button();

    $("#buttonRicerca").button();

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

    $("#tabs_unita_modifica").tabs();

    $("#tabs_modifica").tabs();

    $("#nav-accordion").accordion({
        collapsible: true, active: false
    });

    $("#search").on("click", function() {
        $("#hRicerca").click();
    });

    $("#parteModifica").on("click", function() {
        $("#scroll_event").click();
    });

    $("#hValori").on("click", function() {
        $("#scroll_event").click();
    });



    $("#hInserimento").on("click", function() {
        $("#scroll_event").click();
    });

    $("#hTest").on("click", function() {
        $("#scroll_event").click();
    });

    $("#scroll_event").on("click", function() {
        $("#strutture").css('height', 50);
        $("#asanScrollbarID3").css('height', 50);
        $("#asanScrollbarID2").css('height', 50);
        $("#asanScrollbarID").css('height', 50);

        $("#strutture").table_scroll({
            rowsInScrollableArea: 2
        });
        $("#asanScrollbarID3").table_scroll({
            rowsInScrollableArea: 5
        });
        $("#asanScrollbarID2").table_scroll({
            rowsInScrollableArea: 5
        });
        $("#asanScrollbarID").table_scroll({
            rowsInScrollableArea: 5
        });

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

    $("#parteModifica").on("click", function() {
               $(".parte_contenuto").width($(".parte_header").width());
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



    // Change the selector if needed
    var $table = $('table.scroll'),
            $bodyCells = $table.find('tbody tr:first').children(),
            colWidth;

// Adjust the width of thead cells when window resizes
    $(window).resize(function() {
        // Get the tbody columns width array
        colWidth = $bodyCells.map(function() {
            return $(this).width();
        }).get();

        // Set the width of thead columns
        $table.find('thead tr').children().each(function(i, v) {
            $(v).width(colWidth[i]);
        });
    }).resize(); // Trigger resize handler

});