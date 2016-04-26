var leftNavMod = angular.module('leftNav', [])
    .component('leftNav', {
        templateUrl: 'navLeft.html',
        controller: LeftNavComponent
    });

function LeftNavComponent($log,$mdSidenav) {
   var ctrl = this;
   ctrl.tog = function(){
      $mdSidenav("left").toggle();
   }
}

export
default leftNavMod.name;
