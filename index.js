// Recursion
/*
var a = 0;
function fn() {
    console.log('fn executed: ', a);
    a++;
    if (a < 5) {
        fn();
    }
    console.log('End: ', a);
}
fn();
*/

// Self calling Function
/*(function () {
    console.log('Called!');
})();*/

// Higher Order Functions eg start:
var numbers = [1, 8, 12, 64, 23];
var prodcts = [
    { name: 'Samsung', type: 'Mobile', price: 1235 },
    { name: 'Suzuki', type: 'Car', price: 1234 },
    { name: 'Samsung', type: 'Mobile', price: 928 },
    { name: 'Chair', type: 'Furniture', price: 700 },
    { name: 'Apple', type: 'Mobile', price: 1234 }
];
//filter
/* var filteredProducts = prodcts.filter(function (item, index) {
    // return item.price < 1000;
    // return item.type == 'Mobile';
    return item.price < 1000 && item.type == 'Mobile';
});
console.log('filteredProducts : ', filteredProducts );
*/

/*
//forEach
numbers.forEach(function (item, index) {
    console.log("ITEM: ", item);
});

//map
var mapArr = numbers.map(function (item, i) {
    return item * 2;
});
console.log('numbers: ', numbers);
console.log('mapArr: ', mapArr);
*/

//filter
/*
var filteredArr = numbers.filter(function (item, index) {
    if (item % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log('filteredArr: ', filteredArr);
*/

// Higher Order Functions eg end:

// callback:
/*var name = '';
function myFn(cb){
    console.log("Step 1");
    setTimeout(function(){
        name = 'Taha';
        cb();
    }, 3000);
}
myFn(function(){
    console.log('Name inside cb: ', name);
});
console.log('Name: ', name);
// Element.addEventListner('click', function(){});
*/

//Lambda Functions Examples;
// () => { }
// (a, b) => a+b;
// a => a * 2;

// numbers.forEach(item => {
//     console.log("ITEM: ", item);
// });
// numbers.map(item => item * 2);