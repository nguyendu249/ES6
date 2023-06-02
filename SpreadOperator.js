// Spread

var array1 = ['Javascript', 'PHP', 'Ruby'];

var array2 = ['ReactJS', 'Dart'];

var array3 = [...array2, ...array1];

console.log(array3); //[ 'ReactJS', 'Dart', 'Javascript', 'PHP', 'Ruby' ]

var object1 = {
    name: 'ReactJS',
};

var object2 = {
    price: 1000,
};

var object3 = {
    ...object1,
    ...object2,
};
console.log(object3); //{ name: 'ReactJS', price: 1000 }

var array = ['Javascript', 'PHP', 'Ruby', 'React'];
function logger(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]); //[ 'ReactJS', 'Dart', 'Javascript', 'PHP', 'Ruby' ]
    }
}
logger(...array);
