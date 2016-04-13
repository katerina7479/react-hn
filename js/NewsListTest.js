var NewsList = require('./NewsList');
var React = require('react');
var ReactDOM = require('react-dom');

var r = new XMLHttpRequest();

r.open('GET', "/json/items.json");
r.onload = function(){
    if (r.status == 200){
        var items = JSON.parse(r.responseText);
        ReactDOM.render(<NewsList items={items}/>, document.getElementById('content'));
    }
};
r.send();
