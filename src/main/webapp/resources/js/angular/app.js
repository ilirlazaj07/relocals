/* 
 *Funzionalità esistenti:
 *
 *1: Impostazione dell'applicazione in moduli, controller e factory/servizi
 *2: Factory di REST GET (*all)
 *3: Factory di promise per scenari diversi: GET, disattivazione MODAL
 *4: Gestione SELECT
 *5: Form submission (usare data-ng-submit)-
 *6: Uso di: $scope.$apply
 *7: Uso delle direttive custom
 *
 */



angular.module('relocalsApp', ['ngTable','ngResource', 'relocalsApp.services',
    'relocalsApp.controllers', 'relocalsApp.directives']).config(function($httpProvider) {
    $httpProvider.interceptors.push('asanInterceptor');
});
