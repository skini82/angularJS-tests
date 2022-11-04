(function() {
'use strict';

    angular.module("NameCalculatorApp", [])
        .controller("NameCalculatorController", function($scope) {
            $scope.name = "";
            $scope.totalValue = 0;
            $scope.calculateTotal = function() {
                var totalNameValue = calculateNumericFromString($scope.name);
                $scope.totalValue = totalNameValue;
            };

            function calculateNumericFromString(strValue) {
                var totalNameValue = 0;
                for(var i=0; i <strValue.length; i++){
                    totalNameValue += strValue.charCodeAt(i);
                }
            
                return totalNameValue;
            }
        });
        
})(); 