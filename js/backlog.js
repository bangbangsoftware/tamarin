var backlogMod = angular.module('backlog', [])
    .component('backlog', {
        template: '<h2>Backlog {{$ctrl.what}} </h2>',
        controller: BacklogComponent
    });

function BacklogComponent($http) {

    let ctrl = this;
    ctrl.what = "BOOM";
    $http.get('https://github.com/angular/tactical/commits.atom').then(function(data){
       console.log(data);
    });
}

export
default backlogMod.name;
