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
        <link href="resources/css/relocals.css" rel="stylesheet" type="text/css" />
        <script src="resources/js/bootstrap.min.js" type="text/javascript"></script> 

        <!-- altre librerie JS e file CSS CUSTOM -->
        <link href="resources/css/style_lombardia.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/angular-ui/bower-ui-grid/master/ui-grid.min.css"> 

        <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js"></script>

        <script type="text/javascript" src="resources/js/angular/angular-resource.js"></script>   

        <link rel="stylesheet" href="https://rawgit.com/esvit/ng-table/master/dist/ng-table.min.css">
        <script src="https://rawgit.com/esvit/ng-table/master/dist/ng-table.min.js"></script>        
        <script type="text/javascript" src="resources/js/angular/controllers.js"></script>
        <script type="text/javascript" src="resources/js/angular/services.js"></script>
        <script type="text/javascript" src="resources/js/angular/directives.js"></script>
        <script type="text/javascript" src="resources/js/angular/app.js"></script>


        <script type="text/javascript" src="resources/js/moment.js"></script>
        <script type="text/javascript" src="resources/js/twix.js"></script>

        <script src="https://cdn.rawgit.com/angular-ui/bower-ui-grid/master/ui-grid.min.js"></script> 

        <title>Relocals</title>
        <style>
            .myGrid {
                width: 500px;
                height: 250px;
            }
        </style>
    </head>
    <body data-ng-app="relocalsApp" data-ng-controller="RelocalsController" >



        <div data-ui-grid="{data: myData}" class="myGrid"></div>











    </body>
</html>
