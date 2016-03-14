<%-- 
    Document   : index
    Created on : 15-feb-2016, 12.01.49
    Author     : Ilir
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="resources/css/jquery-ui.css" rel="stylesheet" type="text/css" />
        <link href="resources/css/jtable.css" rel="stylesheet" type="text/css" />
        <script src="resources/js/jquery-1.8.2.js" type="text/javascript"></script>
        <script src="resources/js/jquery-ui.js" type="text/javascript"></script>
        <script src="resources/js/jquery.jtable.js" type="text/javascript"></script>
        <link href="resources/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <script src="resources/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="resources/js/selectProvince.js" type="text/javascript"></script>
        <link href="resources/css/customBootstrapForm.css" rel="stylesheet" type="text/css" />
        <title>JSP Page</title>
    </head>
    <body>
        <fieldset>
            <form role="form">
                <div class="form-group">
                        <div style="float: left; width: 25%;padding-right: 10px;" >                
                            <label style="float: right" for="codice_struttura">Codice Struttura </label>
                        </div>
                        <div style="float: left; width: 75%;">
                            <input type="text" class="form-control" id="codice_struttura">
                        </div><br><br>
                        <div style="float: left; width: 25%;padding-right: 10px;" >                
                            <label style="float: right" for="nome_struttura">Nome Struttura </label>
                        </div>
                        <div style="float: left; width: 75%;">
                            <input style="width: 30%" type="text" class="form-control" id="nome_struttura">
                        </div><br><br>
                        <div style="float: left; width: 25%;padding-right: 10px;" >                
                            <label style="float: right" for="popolabile">Sigla Prov. </label>
                        </div>
                        <div style="float: left; width: 10%;padding-right: 10px;">                
                            <select class="form-control" id="popolabile" >
                                <option value="" selected="selected"></option>
                            </select>       
                        </div>
                        <div style="float: left; width: 7%;padding-right: 10px;" >                
                            <label style="float: left" for="slave-popolabile">Località </label>
                        </div>
                        <div style="float: left; width: 58%;padding-right: 10px;">                
                            <select class="form-control" id="slave-popolabile">
                                <option value="" selected="selected"></option>
                            </select>       
                        </div> <br><br>
                        <div style="float: left; width: 25%;padding-right: 10px;" >                
                            <label style="float: right" for="tras_sede">Trasferimento Sede</label>                
                        </div>
                        <div style="float: left; width: 75%;">
                            <select class="form-control" id="tras_sede">
                                <option value="" selected="selected"></option>
                                <option value="1">Sì</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                </div>
            </form>



            <div id="test"></div>


    </body>
</html>
