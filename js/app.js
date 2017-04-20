// Model (all cat data)
var model = {
    cats: [
        {
            name: 'Cutie',
            image: 'img/cat-1.jpg',
            clickCount: 0
        },
        {
            name: 'Sneaky',
            image: 'img/cat-2.jpg',
            clickCount: 0
        },
        {
            name: 'Cuddly',
            image: 'img/cat-3.jpg',
            clickCount: 0
        },
        {
            name: 'Sleepy',
            image: 'img/cat-4.jpg',
            clickCount: 0
        },
        {
            name: 'Grumpy',
            image: 'img/cat-5.jpg',
            clickCount: 0
        }
    ]
};

// Octopus (communication hub)
var octopus = {
    init: function() {
        // Initialize the 1st cat as the default currentCat
        model.currentCat = model.cats[0];
        // Initialize both views
        catListView.init();
        selectedCatView.init();
    }
};

// Views (all visible elements of app)
var catListView = {
    init: function() {
        // Get ul element to add cats to
        var catListElement = document.getElementById('cat-list');
        // Call catListView render function
        this.render();
    },
    render: function() {
        console.log('catListView.render() was called');
    }
};

var selectedCatView = {
    init: function() {
        console.log('selectedCatView.init() was called');
    }
};

// Initialize the app
octopus.init();
