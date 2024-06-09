var insuranceApp = angular.module('insuranceApp', []);
insuranceApp.controller('insuranceController', function($scope) {
  $scope.policyNumber = "";
  $scope.policyType = "";
  $scope.customerName = "";
  $scope.policyIndex = -1;
  $scope.newPolicyValid = $scope.policyNumber && $scope.policyType && $scope.customerName;
  $scope.policies = [
    {
      policyNumber: '12345',
      policyType: 'Health Insurance',
      customerName: 'John Doe'
    }, {
      policyNumber: '67890',
      policyType: 'Auto Insurance',
      customerName: 'Jane Smith'
    }
  ];
  $scope.removePolicy = function(index) {
    $scope.policies.splice(index, 1);
  };
  $scope.savePolicy = function(){
    var newPolicy = {
      policyNumber: $scope.policyNumber,
      policyType: $scope.policyType,
      customerName: $scope.customerName,
    }
    if($scope.policyIndex != -1){
      $scope.policies[$scope.policyIndex] = newPolicy;
    } else {
      $scope.policies.push(newPolicy);
    }
    $scope.cleanNewPolicy();
  }
  $scope.editPolicy = function(index){
    var editPolicy = $scope.policies[index];
    $scope.policyNumber = editPolicy.policyNumber;
    $scope.policyType = editPolicy.policyType;
    $scope.customerName = editPolicy.customerName;
    $scope.policyIndex = index;
  }
  $scope.cleanNewPolicy = function(){
    $scope.policyNumber = "";
    $scope.policyType = "";
    $scope.customerName = "";
    $scope.policyIndex = -1;
    $scope.insuranceForm.$setPristine();
  }
});
