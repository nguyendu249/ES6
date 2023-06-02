// Destructuring
function logger({ name, price, ...rest }) {
    // console.log(obj.name);
    // console.log(obj.price)
    console.log(name); //React
    console.log(price); // 1000
    console.log(rest); //{ descriptions: 'Descriptions content' }
}
logger({
    name: 'React',
    price: 10000,
    descriptions: 'Descriptions content',
});

function logger2([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
logger2([2, 6, 1, 1, 2, 4, 6, 6]); //[ 1, 1, 2, 4, 6, 6 ]
