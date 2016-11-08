/**
 * Created by t.gieselmann on 11/8/16.
 */
(function(angular) {
    angular.module("tournamentApplication.controllers", []);
    angular.module("tournamentApplication.services", []);
    angular.module("tournamentApplication", ["ngResource", "tournamentApplication.controllers", "tournamentApplication.services"]);
}(angular));
