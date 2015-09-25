// local path to the library which is loaded
var library = require("./algorithms");

// That is how we call the algorithms
var res = library.algo(2); // 4
var res2 = library.algo2(3); // 9

// Prints in console
console.log(res); 


// use graph library ngraph
var createGraph = require('ngraph.graph');

var g = createGraph();
g.addNode(0,{name: "David", age: 24});
g.addNode(1,{name: "Tomas"});

g.addLink(0,1); // directed edge 0 -> 1

// added new edge
g = library.graphalgo(g);

// print out graph object
console.log(g);