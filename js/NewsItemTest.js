var NewsItem = require('./NewsItem');
var React = require('react');
var ReactDOM = require('react-dom');

var r = new XMLHttpRequest();

r.open("GET", "/json/items.json");
r.onload = function () {
    if (r.status == 200) {
        var items = JSON.parse(r.responseText);
        console.log('items', items);
        ReactDOM.render(<NewsItem item={items[0]} rank={1}/>, document.getElementById('content'));
    }
};
r.send();