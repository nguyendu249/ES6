var name = 'Nguyen Du';
var price = 1000;

// var course = {
//     name: name,
//     price: price,
//     getName: function() {
//         return name;
// }
// }

// ES6
// Enhanced object literals
// var course = {
//     name,  // (
//     price, //  Định nghĩa key: value cho object)
//     getName() { // Định nghĩa method cho object
//         return name;
//     }
// };
// console.log(course); // { name: 'Nguyen Du', price: 1000 }
// console.log(course.getName()); //Nguyen Du

// Định nghĩa key cho object dưới dạng biến
var fieldName = 'New-Name';
var fieldPrice = 'Price';

const course = {
    name: 'Javascript',
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000,
};
console.log(course); // { Name: 'Javascript', Price: 1000}

//Ex
function arrToObj(arr) {
    return arr.reduce((obj, item) => {
        obj[item[0]] = item[1];
        return obj;
    }, {});
}
const obj1 = arrToObj([
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi'],
]);
console.log(obj1); // { name: 'Son Dang', age: 21, address: 'Ha Noi' }
