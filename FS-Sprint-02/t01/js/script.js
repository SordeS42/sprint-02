let number = 42;
const bigInt = 1234567890123456789012345678901234567890n;
let string = "O.Pryshchepa"
let Bool = true;
let Null = null;

let Undefined;

let object = {
    name: "Oleksandra",
    age: 19
}

let symbol = Symbol("symbol");
let func =  function showMessage() {
    alert( 'Всем привет!' );
}
// alert(typeof(number));
//  alert (typeof(bigInt));
//  alert(typeof(string));
//  alert(typeof(Bool));
//  alert(typeof(Null));
//  alert(typeof(Undefined));
//  alert(typeof(object));
//  alert(typeof(symbol));
//  alert(typeof(func))

 alert(`number is ${typeof(number)}
bigInt is ${typeof(bigInt)}
string is ${typeof(string)}
Bool is ${typeof(Bool)}
Null is ${typeof(Null)}
Undefined is ${typeof(Undefined)}
object is ${typeof(object)}
symbol is ${typeof(symbol)}
func is ${typeof(func)}`)