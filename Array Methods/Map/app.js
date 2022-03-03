
// Map creates a NEW array with the results of calling a callback on every element in the array
// it is similar to forEach() but instead of just performing the operation, it makes a new array with the operations' results

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t){
    return t.toUpperCase();
})
texts; //['rofl', 'lol', 'omg', 'ttyl']
caps; //['ROFL', 'LOL', 'OMG', 'TTYL']
