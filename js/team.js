var teamMod = angular.module('team', [])
    .component('team', {
        template: '<h2>Team {{$ctrl.what}} </h2>',
        controller: TeamComponent
    });

function TeamComponent($http) {

    let ctrl = this;
    ctrl.what = "BOOM";
}

export
default teamMod.name;
