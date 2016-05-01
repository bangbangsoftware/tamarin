import angular from "angular";

import '../node_modules/@angular/router/angular1/angular_1_router';

import mat from 'angular-material';
import mess from 'angular-messages';
import story from './story';
import team from './team';
import menuBut from './menu-but';
import leftNav from './left-nav';

import firebase from 'firebase';
import angularfire from 'angularfire';

//import '../bower_components/angular-material/angular-material.css';

import "../node_modules/angular-material/angular-material.min.css"
import "../node_modules/angular-material/angular-material.min.js"
import "../css/taz.css"
 
console.log(angular.version);

var app = angular.module('tamarin', ['firebase','ngComponentRouter', mat, mess, story, team,menuBut,leftNav])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    });

app.value('$routerRootComponent', 'app');



app.component('app', {
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [{
        path: 'story',
        name: 'Story',
        component: 'story',
        useAsDefault: true
    }, {
        path: 'team',
        name: 'Team',
        component: 'team'
    }]
});

export default app.name;
