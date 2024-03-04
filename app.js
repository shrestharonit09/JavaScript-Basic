//variable declaration in javascript(let,const,var)
//var is functional scope, it can be call out of function call
//let and const is block scope , it cant be define to out of function call i.e let i if call outside the loop will not be defined under code.
function sayHello(){
    for(var i=0;i<5;i++){
    console.log(i);
    }
    //console.log(i);
}
sayHello();
const a=20;
console.log(a);
const Ronit= {     //to create object and cant be empty decalaration;
    name: "RONITSHRESTHA",
    age: 23,
    id:10,
    isMale: true
};
console.log(Ronit);
//higher order array method in js(foreach)(map and filter are used most in this case)
let user = [
    {name:"Ram",age:18,id:1},
    {name:"shyam",age:19,id:2},
    {name:"hari",age:20,id:3}
];


console.log(user);//to print the data and info under the term user;

for(let j=0;j<user.length;j++){
    console.log(user[j].name);//user ko name print garnalai;
}

//forEach in js
user.forEach(function(user,index,alluser)
{
console.log(user);
console.log(index);
console.log(alluser);
});



//map in js

let userData= user.map(function(user,index,alluser)
{
return index;//to show index,same way we can return user and alluser too by "return user; or return alluser;"
});
console.log(userData);

//forEach as map code in js (thatswhy map is used)
let users= user.forEach(function(user,index,alluser)// this shows results as undefined as forEach loop is used for modification only;
{
return user;//undefined ayo....//....(no new array bro)
});
console.log(users);

//filter in js(in Case we need the particular data from array , we use filter loop)
// to show index 1 data from array user

let filterdata=user.filter(function(data) //in function we can use 3parameters and parameter can be as user choice;
{
return data.name=="shyam";
});
console.log(filterdata);
//user (!) to delete particular array;
//to delete particular array("return data.name!=="shyam";")


//spread operators in js
let arr1=[1,2,3];
let arr2=[...arr1,3,4,5];//here...(3 dot) are used as spread operator to used the data of prev.array in new array;

console.log(arr2);

const ronit={
    id:2,
    name:"RonitShrestha"
};
const ronit1={
    ...ronit,//spread operator to used ronit object data in new object ronit1 
    address:"bhaktapur"
};
console.log(ronit1);

//destructuring in js
const ronit2={
    name:"Ronit2",
    address:{
    city:"bhaktapur2",
    street: "balkot2"},
    id:1,
    hobbies:["flute","football","sing"]
};
console.log(ronit2);//to print all data in ronit2
console.log(ronit2.name);//to print name in ronit2
console.log(ronit2.hobbies[1]);
//normal form
//console.log(ronit2.address.city);
//console.log(ronit2.address.street);

//applying destructing..(to clean up the code it is used)

const{ city,street}=ronit2.address;
console.log(city);
console.log(street);

//classes in js

class Employee{
    constructor(name,id,age){
        this.name=name;
        this.id=id;
        this.age=age;
    }
}
hari = new Employee("hari",1,20);//object create hari
shyam= new Employee("shyam",2,21);
console.log(hari);
console.log(shyam);

class Program extends Employee{
    constructor(name,id,age,langauge){
        super(name,id,age);//inherit employee name id age
    this.langauge=langauge;// own property of class program
    }
}
ronit4= new Program("Ronit",3,23,"React");// object ronit to store data
console.log(ronit4);// to display the data 








