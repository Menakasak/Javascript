console.log('Hello Menaka');
console.log('hello Mithran');
console.log(2+2);
let name='Sakthivel';
console.log(name);
//objects
let user ={

    name :'priya',
    age :30

};
console.log(user);

//1.dot notataion

console.log(user.name);
console.log(user.age);
user.age= 35;
console.log(user.age);
//2.using bracket notation
user['name'] = 'marry';
console.log(user.name);
//Arrays
//list of objects
let language =['java','javascript'];
console.log(language);
console.log(language.length);
language [2]= 'ruby';
console.log(language);
console.log(language(1));

//functions
function getname(){
console.log('This is my function name')
}
//call the function
getname();
//parameter base function

function greet(name){
console.log('Hello '+name)
}
greet('sivaraj');

function greetage(name,age){
    console.log('Hello '+name+ ' '+ age)
    }
    greetage('sivaraj', 73);

    //Return from function
function add(num1, num2){
    return num1+num2;
}    
let sum = add(20,30);
console.log(sum);
console.log(add(40,50));

function multply (number){

    let mul= number*number;
    return mul;
}
console.log(multply(5));


