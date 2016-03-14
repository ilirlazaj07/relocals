/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    //parte di test JQuery
    var url = "DataServlet";
    var mainJSON;
    $.get(url, null, function(data) {
        var listaProvince = $.parseJSON(data);
        mainJSON = listaProvince;
        for (var i = 0; i < listaProvince.length; ++i)
        {
            $("#popolabile").append(new Option(listaProvince[i].nomeProvincia, listaProvince[i].nomeProvincia));
        }
    });

    $("#popolabile").change(function() {
        var selezionato = $("#popolabile option:selected").val();
        $("#slave-popolabile").html("");
        $("#slave-popolabile").append(new Option("", ""));
        for (var i = 0; i < mainJSON.length; ++i)
        {
            if (mainJSON[i].nomeProvincia === selezionato) {
                // Quando viene trovato
                provincia = mainJSON[i];
                listaLocalita = provincia.listaLocalita;
                for (var j = 0; j < listaLocalita.length; ++j) {
                    //  alert(listaLocalita[j].nomeLocalita);
                    $("#slave-popolabile").append(new Option(listaLocalita[j].nomeLocalita, listaLocalita[j].nomeLocalita));
                }
                return false; // esci dal ciclo
            }
        }
    });

});


