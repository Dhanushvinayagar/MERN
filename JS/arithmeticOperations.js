console.log("+ will concat with string others will perform arithmetic operation with string");

console.log(1+1 , 1-1 , 1*1,1/1,1%1);
console.log(1.01+1 , 1-1 , 1*1,1/1,1%1);

console.log('1'+1 , '1'-1 , '1'*1 , '1'/1 , 1%'1');

console.log(1+1+'1', '1'+'1'-1 );

let n1= parseInt('11.0') 
let n2 = parseFloat('11.0')
console.log(n1 , typeof n1);
console.log(n2 , typeof n2);

//.toFixed returns a string
let n3 =parseFloat('11.0').toFixed(2) 
console.log(n3 , typeof n3);