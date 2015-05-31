/**
 * Created by ssellathurai on 5/30/15.
 */

    'use strict';
    angular.module( 'app' , [] ).controller( 'calcCtrl' , [
            '$scope' , function ($scope) {
                $scope.memory = "0";
                $scope.total = "0";
                $scope.operation = "0";
                $scope.addToMemory = function(btn) {
                    if($scope.memory == "0" || $scope.newNumber) {
                        $scope.memory = btn;
                        $scope.newNumber = false;
                    } else {
                        $scope.memory += String(btn);
                    }
                    $scope.inMemory = parseInt($scope.memory, 10);
                };

                $scope.clear = function() {
                    $scope.inMemory = "0";
                };

                $scope.subtraction = function() {
                    $scope.update('-');
                };

                $scope.addition = function() {
                    $scope.update('+');
                };

                $scope.multiplication = function() {
                    $scope.update('*');
                };

                $scope.division = function() {
                    $scope.update('/');
                };

                $scope.calculate = function(){
                    $scope.update('=');
                }

                $scope.update = function(oper){
                    if($scope.inMemory) {
                        $scope.processOperation();
                    }

                    $scope.operation = oper;
                    $scope.newNumber = true;
                    $scope.inMemory = $scope.total;
                }

                $scope.processOperation = function(){
                    if($scope.total && ($scope.operation == '-') ) {
                        $scope.total -= $scope.inMemory;
                    } else if($scope.total && $scope.operation == '+' ) {
                        $scope.total += $scope.inMemory;
                    }
                    else if($scope.total && $scope.operation == '*' ) {
                        $scope.total = $scope.total * $scope.inMemory;
                    }
                    else if($scope.total && $scope.operation == '/' ) {
                        $scope.total = $scope.total / $scope.inMemory;
                    }else {
                        $scope.total = $scope.inMemory;
                    }
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
