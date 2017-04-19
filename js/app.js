// Constructor function for cat instances
var Cat = function(name, imageURL, counterID, listID) {
    this.name = name;
    this.imageURL = imageURL;
    this.counterID = counterID;
    this.listID = listID;
};

// Render the link for each cat
Cat.prototype.renderCatLI = function () {
    var catList = document.getElementById('cat-list');

    var li = document.createElement('li');
    var linkText = document.createTextNode(this.name);
    li.setAttribute('id', (this.listID));
    li.appendChild(linkText);
    catList.appendChild(li);

    this.clickCatLink();
};

// Render the html for each cat instance
Cat.prototype.renderCatHTML = function() {
    var catDiv = document.querySelector('.cat-div');

    var h2 = document.createElement('h2');
    var nameText = document.createTextNode(this.name);
    h2.appendChild(nameText);
    catDiv.appendChild(h2);

    var img = document.createElement('img');
    img.setAttribute('src', this.imageURL);
    img.setAttribute('id', this.name);
    img.setAttribute('alt', 'cat');
    catDiv.appendChild(img);

    var h3 = document.createElement('h3');
    var counterText = document.createTextNode('Click this Cat to Play!');
    h3.setAttribute('id', this.counterID);
    h3.appendChild(counterText);
    catDiv.appendChild(h3);
};

// Event listener that counts clicks on each cat image
Cat.prototype.clickCounter = function () {
    var catImage = document.getElementById(this.name);
    var counter = document.getElementById(this.counterID);
    var numClicks = 0;

    catImage.addEventListener('click', function() {
        numClicks += 1;
        counter.textContent = 'Number of Clicks: ' + numClicks;
    });
};

// Event listener for clicks on list of cats
Cat.prototype.clickCatLink = function() {
    var catLink = document.getElementById(this.listID);
    var self = this;
    catLink.addEventListener('click', function() {
        document.querySelector('.cat-div').innerHTML = '';
        self.renderCatHTML();
        self.clickCounter();
    });
};

// Create cat #1 instance
var cutie = new Cat('Cutie', 'img/cat-1.jpg', 'cat-1', '1');
cutie.renderCatLI();

// Create cat #2 instance
var sneaky = new Cat('Sneaky', 'img/cat-2.jpg', 'cat-2', '2');
sneaky.renderCatLI();
