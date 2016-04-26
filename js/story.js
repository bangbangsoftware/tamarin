var storyMod = angular.module('story', [])
    .component('story', {
        templateUrl: 'storyInput.html',
        controller: StoryComponent
    });

function StoryComponent($log,$mdToast) {

    let ctrl = this;
    ctrl.what = "BOOM";
 

    ctrl.save = function() {
        if (ctrl.storyForm.$invalid){
            $mdToast.show($mdToast.simple().textContent('Please fix the errors'));
        }    
        $log.debug("story is ");
        $log.debug("'"+ctrl.storyForm.name.$viewValue+"'.");
        $log.debug("'"+ctrl.storyForm.description.$viewValue+"'.");
        $log.debug("with "+ctrl.storyForm.points.$viewValue+" story points.");
    };

}

export
default storyMod.name;
