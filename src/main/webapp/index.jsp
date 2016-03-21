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


        <script src="jquery-ui.js"></script>

        <!-- librerie bootstrap -->


        <link href="jquery-ui.css" rel="stylesheet" type="text/css" />

        <link href="resources/css/relocals.css" rel="stylesheet" type="text/css" />

        <!-- altre librerie JS e file CSS CUSTOM -->
        <link href="resources/css/style_lombardia.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="resources/js/angular/angular.min.js"></script>     

        <script src="https://rawgit.com/dwmkerr/angular-modal-service/master/dst/angular-modal-service.js"></script>
        <script type="text/javascript" src="resources/js/angular/angular-resource.js"></script>       
        <script type="text/javascript" src="resources/js/angular/controllers.js"></script>
        <script type="text/javascript" src="resources/js/angular/services.js"></script>
        <script type="text/javascript" src="resources/js/angular/directives.js"></script>
        <script type="text/javascript" src="resources/js/angular/app.js"></script>
        <script type="text/javascript" src="resources/js/relocals.js"></script>


        <script type="text/javascript" src="resources/js/moment.js"></script>
        <script type="text/javascript" src="resources/js/twix.js"></script>




        <title>Relocals</title>
    </head>
    <body class="container" data-ng-app="relocalsApp" data-ng-controller="RelocalsController">
        <div class="container">
            <h2>Modal Example</h2>
            <!-- Trigger the modal with a button -->
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>


        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

       
    </body>
</html>
