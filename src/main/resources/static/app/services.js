/**
 * Created by t.gieselmann on 11/8/16.
 */

(function (angular) {
    var TournamentFactory = function ($resources) {
        return $resource('/tournament/:id', {
            id: '@id'
        });
    };
    TournamentFactory.$inject = ['$resource'];
    angular.module("tournamentApplication.services").factory("Tournament", TournamentFactory)
});
