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
    },
    getCats: function() {
        return model.cats;
    }
};

// Views (all visible elements of app)
var catListView = {
    init: function() {
        // Get ul element to add cats to
        this.catListElement = document.getElementById('cat-list');
        // Call catListView render function
        this.render();
    },
    render: function() {
        // Get array of cats to loop through from octopus
        var cats = octopus.getCats();
        var i;
        var cat;
        var catListItem;
        // Loop through cats array
        for (i = 0; i < cats.length; i++) {
            // Create a li for each cat with it's name as the text
            cat = cats[i];
            catListItem = document.createElement('li');
            catListItem.textContent = cat.name;
            // Add each cat li to the ul element
            this.catListElement.appendChild(catListItem);
        }
    }
};

var selectedCatView = {
    init: function() {
        console.log('selectedCatView.init() was called');
    }
};

// Initialize the app
octopus.init();
