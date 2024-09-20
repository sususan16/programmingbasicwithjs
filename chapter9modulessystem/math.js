const PI = 3.14;

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

// Regular code
// module.exports = {minus: minus, add: add, PI: PI};
// Short-hand because key and value have the same name
module.exports = {minus, add, PI};