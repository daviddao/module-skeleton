// That is how we export them
module.exports = {
  algo : algorithm,
  algo2 : algorithm2,
  graphalgo : algorithm3
};



// Algorithm
function algorithm(input) {
  return input * 2;
}

// Algorithm2
function algorithm2(input) {
  return input * input;
}

// Algorithm3
function algorithm3(graph) {
  graph.addLink(0,3);
  return graph;
}