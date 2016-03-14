$(document).ready(function() {

    //Stops the submit request
    $("#myAjaxRequestForm").submit(function(e) {
        e.preventDefault();
    });

    //checks for the button click event
    $("#myButton").click(function(e) {

        //get the form data and then serialize that
        dataString = $("#myAjaxRequestForm").serialize();

        //make the AJAX request, dataType is set to json
        //meaning we are expecting JSON data in response from the server
        $.ajax({
            type: "POST",
            url: "DataServlet",
            data: dataString,
            dataType: "json",
            //Dopo la risposta del server
            success: function(data, textStatus, jqXHR) {
                if (data.success) {
                    $("#ajaxResponse").html("");
                    $("#ajaxResponse").append("<b>Password Modificata ! </b> " + "<br/>");
                }
                else {
                    $("#ajaxResponse").html("");
                    $("#ajaxResponse").append("<b>Password Corrente non corretta ! </b> " + "<br/>");
                }

            },
            //Nessuna risposta dal server
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Something really bad happened " + textStatus);
                $("#ajaxResponse").html(jqXHR.responseText);
            },
            beforeSend: function(jqXHR, settings) {
                $('#myButton').attr("disabled", true);
            },
            complete: function(jqXHR, textStatus) {
                $('#myButton').attr("disabled", false);
            }

        });
    });

});