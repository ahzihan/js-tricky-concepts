//Data Types

/*
Preemptive data type //Immutable
1. number
2. string
3.boolean
4. null
5. undefined
6. symbol
*/
let x = 'hello';
let y = x;
console.log( x, y );
x = 'gelo';
console.log( x, y );
/*
Non-Preemptive data type //depends on reference
7. object
*/
let num = { job: 'IT Executive Officer' };
let num2 = num;
console.log( num, num2 );
num.job = 'Frontend Developer';
console.log( num, num2 );

//javaScript is dynamic typed data type

let a = 25;
let b = 'Md Akbar Hossain';
console.log( typeof a, typeof b );
