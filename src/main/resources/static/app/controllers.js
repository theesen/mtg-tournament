/**
 * Created by t.gieselmann on 11/8/16.
 */
(function(angular) {
    var TournamentController = function($scope, Tournament) {
        Tournament.query(function(response) {
            $scope.tournaments = response ? response : [];
        });
        //
        // function findAllTasks(){
        //     $http.get('/tournament').
        //     success(function (data) {
        //         if (data._embedded != undefined) {
        //             $scope.tournaments = data._embedded.tournaments;
        //         } else {
        //             $scope.tournaments = [];
        //         }
        // };
        $scope.

        $scope.addTournament = function(name) {
            new Tournament({
                name: name
            }).$save(function(tournament) {
                $scope.tournaments.push(tournament);
            });
            $scope.newTournament = "";
        };
    };

    TournamentController.$inject = ['$scope', 'Tournament'];
    angular.module("tournamentApplication.controllers").controller("TournamentController", TournamentController);
}(angular));
