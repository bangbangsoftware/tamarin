var menuButMod = angular.module('menuBut', [])
    .component('menuBut', {
       // template: '<md-button hide-gt-sm ng-click="$ctrl.tog()"><img src="./img/not-free/menu.png"></img></md-button',
        template: '<md-button hide-gt-sm ng-click="$ctrl.tog()"><i class="material-icons">reorder</i></md-button',
        controller: MenuButComponent
    });

function MenuButComponent($log,$mdSidenav) {
   var ctrl = this;
   ctrl.tog = function(){
      $mdSidenav("left").toggle();
   }
}

export
default menuButMod.name;
