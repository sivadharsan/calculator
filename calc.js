/**
 * Created by ssellathurai on 5/30/15.
 */

    'use strict';
    angular.module( 'app' , ['ngRoute' , 'ngSanitize'] ).controller( 'calcCtrl' , [
            '$scope' , function ($scope) {
                $scope.memory;
                $scope.addToMemory = function(btn) {
                    if($scope.memory == "0" || $scope.newNumber) {
                        $scope.memory = btn;
                        $scope.newNumber = false;
                    } else {
                        $scope.memory += String(btn);
                    }
                    $scope.inMemory = parseInt($scope.memory, 10);
                };
            }
        ] )
        .directive( 'calc' , function () {
            return {
                restrict    : 'E' ,
                scope       : {} ,
                transclude  : true ,
                templateUrl : 'calc.html' ,
                link        : function (scope , element , attrs) {
                    // console.clear();

                    $scope.result = 100;

                    scope.calcAddInput = function (char) {
                        $scope.result += 100;
                    }
                }
            };
        } );
