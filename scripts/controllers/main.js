'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    $scope.currentUser = {};
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function ( message ) {
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          $scope.messages = response.data;
          $scope.newMessage = "";
        });
      }
    };

    $scope.addUser = function ( user ) {
      if (user) {
        $scope.currentUser = user;
        $scope.user.username = "";
        $scope.user.profileUrl = "";
      }
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
