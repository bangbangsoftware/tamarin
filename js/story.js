import firebaseConfig from './firebaseConfig';

var storyMod = angular.module('story', [])
    .component('story', {
        templateUrl: './html/storyInput.html',
        controller: StoryComponent
    });

function StoryComponent($log, $mdToast, $firebaseArray, $scope) {

    let ctrl = this;
    const FIREBASE_URL = firebaseConfig();

    ctrl.stories = $firebaseArray(new Firebase(FIREBASE_URL));
    ctrl.display = function(post) {
        return JSON.parse(post.$value);
    }

    $log.debug("These are the stories...");
    ctrl.stories.forEach(function(story) {
        $log.debug(story);
    });

    $scope.$watch('stories', function() {
        ctrl.stories.forEach(function(story) {
            $log.debug(story);
        });
    }, true);

    ctrl.save = function() {
        if (ctrl.storyForm.$invalid) {
            $mdToast.show($mdToast.simple().textContent('Please fix the errors'));
        }
        $log.debug("story is ");
        let story = {
            name: ctrl.storyForm.name.$viewValue,
            description: ctrl.storyForm.description.$viewValue,
            points: ctrl.storyForm.points.$viewValue
        };
        $log.debug(story);
        ctrl.stories.$add(JSON.stringify(story)).then(function(what) {
            $log.debug(what);
        });
    };

}

export
default storyMod.name;
