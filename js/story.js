var storyMod = angular.module('story', [])
    .service('storyService', StoryService)

.component('story', {
    template: '<h2>Story </h2><ng-outlet>',
    $routeConfig: [{
        path: '/',
        name: 'StoryList',
        component: 'storyList',
        useAsDefault: true
    }, {
        path: '/:id',
        name: 'StoryDetail',
        component: 'storyDetail'
    }]
})

.component('storyList', {
    templateUrl: 'storyInput.html',
    bindings: {
        $router: '<'
    },
    controller: StoryListComponent,
    $canActivate: function($nextInstruction, $prevInstruction) {
        console.log('$canActivate', arguments);
    }
})

.component('storyDetail', {
    templateUrl: 'storyDetail.html',
    bindings: {
        $router: '<'
    },
    controller: StoryDetailComponent
});


function StoryService($q) {
    var storiesPromise = $q.when([{
        id: 1,
        name: 'Princess Held Captive'
    }, {
        id: 2,
        name: 'Dragon Burning Cities'
    }, {
        id: 3,
        name: 'Giant Asteroid Heading For Earth'
    }, {
        id: 4,
        name: 'Release Deadline Looms'
    }]);

    this.getStories = function() {
        return storiesPromise;
    };

    this.save = function() {
        console.log("story is ");
        console.log(story);
        alert("ashdgfjszdfjhgjsdf");
    };

    this.getStory = function(id) {
        return storiesPromise.then(function(stories) {
            for (var i = 0; i < stories.length; i++) {
                if (stories[i].id == id) return stories[i];
            }
        });
    };
}

function StoryListComponent(storyService) {
    var selectedId = null;
    var ctrl = this;

    this.story = {
        description: 'Nuclear Missile Defense System',
        rate: 500
    };

    this.save = function() {
        console.log("story is ");
        console.log(story);
        alert("ashdgfjszdfjhgjsdf");
    };

    this.$routerOnActivate = function(next) {
        console.log('$routerOnActivate', this, arguments);
        // Load up the stories for this view
        storyService.getStories().then(function(stories) {
            ctrl.stories = stories;
            selectedId = next.params.id;
        });
    };

    this.isSelected = function(story) {
        return (story.id == selectedId);
    };

    this.onSelect = function(story) {
        this.$router.navigate(['StoryDetail', {
            id: story.id
        }]);
    };
}

function StoryDetailComponent(storyService, dialogService) {
    var ctrl = this;
    this.$routerOnActivate = function(next) {
        // Get the story identified by the route parameter
        var id = next.params.id;
        storyService.getStory(id).then(function(story) {
            if (story) {
                ctrl.editName = story.name;
                ctrl.story = story;
            } else { // id not found
                ctrl.gotoStories();
            }
        });
    };

    this.$routerCanDeactivate = function() {
        // Allow synchronous navigation (`true`) if no story or the story is unchanged.
        if (!this.story || this.story.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return dialogService.confirm('Discard changes?');
    };

    this.cancel = function() {
        ctrl.editName = ctrl.story.name;
        ctrl.gotoStories();
    };

    this.save = function() {
        ctrl.story.name = ctrl.editName;
        ctrl.gotoStories();
    };

    this.gotoStories = function() {
        var storyId = ctrl.story && ctrl.story.id;
        // Pass along the hero id if available
        // so that the StoryListComponent can select that hero.
        this.$router.navigate(['StoryList', {
            id: storyId
        }]);
    };
}

export
default storyMod.name;
