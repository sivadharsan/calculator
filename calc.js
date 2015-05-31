/**
 * Created by ssellathurai on 5/30/15.
 */

    'use strict';
    angular.module( 'app' , [] )
        .controller( 'calcCtrl' , [
            '$scope' , function ($scope) {
            }
        ] )
        .directive( 'calc' , function () {
            return {
                restrict    : 'E' ,
                scope: {
                    control: '=',
                    theme: '@theme'
                },
                templateUrl : 'calc.html' ,
                link        : function (scope , element , attrs) {

                    scope.memory = "0";
                    scope.total = "0";
                    scope.operation = "0";
                    scope.addToMemory = function(btn) {
                        if(scope.memory == "0" || scope.newNumber) {
                            scope.memory = btn;
                            scope.newNumber = false;
                        } else {
                            scope.memory += String(btn);
                        }
                        scope.inMemory = parseInt(scope.memory, 10);
                    };

                    scope.clear = function() {
                        scope.operation = "";
                        scope.newNumber = true;
                        scope.inMemory = "0";
                    };

                    scope.square = function() {
                        scope.update('sq');
                    };

                    scope.subtraction = function() {
                        scope.update('-');
                    };

                    scope.addition = function() {
                        scope.update('+');
                    };

                    scope.multiplication = function() {
                        scope.update('*');
                    };

                    scope.division = function() {
                        scope.update('/');
                    };

                    scope.calculate = function(){
                        scope.update('=');
                    }

                    scope.update = function(oper){
                        if(scope.inMemory) {
                            scope.processOperation();
                        }

                        scope.operation = oper;
                        scope.newNumber = true;
                        scope.inMemory = scope.total;
                    }

                    scope.processOperation = function(){
                        if(scope.total && (scope.operation == '-') ) {
                            scope.total -= scope.inMemory;
                        } else if(scope.total && scope.operation == '+' ) {
                            scope.total += scope.inMemory;
                        }
                        else if(scope.total && scope.operation == '*' ) {
                            scope.total = scope.total * scope.inMemory;
                        }
                        else if(scope.total && scope.operation == '/' ) {
                            scope.total = scope.total / scope.inMemory;
                        }
                        else if(scope.total && scope.operation == 'sq' ) {
                            scope.total = Math.sqrt(scope.inMemory);
                        }
                        else {
                            scope.total = scope.inMemory;
                        }
                    };
                }
            };
        } );
