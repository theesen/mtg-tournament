/**
 * Created by t.gieselmann on 11/8/16.
 */

angular.module('tournament', [])
    .controller('TournamentController',function($scope, $http) {
        $http.get('http://localhost:8080/tournament').
            then(function (response) {
                $scope.tournament = response.data;
        });
    });
