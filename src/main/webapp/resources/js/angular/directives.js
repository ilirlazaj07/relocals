var asanDirectives = angular.module('relocalsApp.directives', []);

asanDirectives.directive('asanSubmit', function() {
    return {
        template: function(elem, attr) {
            return '<button type="submit" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" style="width: 80px;">' +
                    '<span id="ricerca" class="ui-button-text">' + attr.nome + '</span>' +
                    '</button>';
        },
        restrict: 'EA'
    };
});

asanDirectives.directive('asanStato', function() {
    return {
        template: function(elem, attr) {
            return '<div style="float: left;margin-right: 0.5em;" id="circle' + attr.stato + '"></div>';
        },
        restrict: 'EA'
    };
});

asanDirectives.directive('onRepeatCompletata', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatCompletata');
                });
            }
        }
    };
});
