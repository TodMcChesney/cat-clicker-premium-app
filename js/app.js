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
    },
    setCurrentCat: function(clickedCat) {
        model.currentCat = clickedCat;
    },
    incrementCounter: function() {
        model.currentCat.clickCount ++;
        selectedCatView.render();
    }
};

// Views (all visible elements of app)
var catListView = {
    init: function() {
        // Get ul element to add cats to
        catListElement = document.getElementById('cat-list');
        // Call catListView render function
        this.render();
    },
    render: function() {
        // Get array of cats to loop through from octopus
        var cats = octopus.getCats();
        var catListItem;
        // Loop through cats array
        model.cats.forEach(function(cat) {
            // Create a li for each cat with it's name as the text
            catListItem = document.createElement('li');
            catListItem.textContent = cat.name;
            // Attach a click event listener to each cat li
            catListItem.addEventListener('click', function() {
                // Send the octopus the cat that was clicked
                octopus.setCurrentCat(cat);
                // Call selectedCatView render function
                selectedCatView.render();
            });
            // Add each cat li to the ul element
            catListElement.appendChild(catListItem);
        });
    }
};

var selectedCatView = {
    init: function() {
        // Get DOM elements for the cat view
        var catNameElement = document.getElementById('cat-name');
        var catImageElement = document.getElementById('cat-image');
        var counterElement = document.getElementById('cat-counter');
        // Click event listener that increments counter
        catImageElement.addEventListener('click', function() {
            octopus.incrementCounter();
        });
        // Call the selectedCatView render function
        this.render();
    },
    render: function() {
        console.log('selectedCatView.render() was called');
    }
};

// Initialize the app
octopus.init();
