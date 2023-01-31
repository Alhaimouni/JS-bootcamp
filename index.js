let { log } = console;


// this variable comes from html because (hello) is an id for an element 

// console.log(hello);
// hello.style.color = 'red';
// hello.innerText = 'i change the text for the element from this line';



//------------------------------------------------------------------------------

// console.log(Number.MAX_SAFE_INTEGER.toString().length)

//------------------------------------------------------------------------------

// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57

//------------------------------------------------------------------------------

// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2


//------------------------------------------------------------------------------


// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let str = 'abcdef';

// let x = arr.indexOf(1,arr.length)
// console.log(arr.indexOf('d', 3))
// console.log(arr.lastIndexOf('d', 1))

// console.log(arr.slice(arr.length-4, arr.length-2));
// console.log(arr.includes('c'));
// console.log(str.includes('def'));


//------------------------------------------------------------------------------

// let x = document.getElementById('hello');
// let y = document.querySelector('button');

// console.log(x);



// let k = x.getAttributeNode('id');
// let m = x.attributes.id.value;


// console.log(m)

//------------------------------------------------------------------------------


// let x = setTimeout(one, 1000,'ali');
// let y = setTimeout(() => { console.log('meow2') }, 1000);
// let z = setTimeout(() => { console.log('meow3') }, 1000);

// console.log(x);
// console.log(y);
// console.log(z);

// function one(name) {
//   console.log(`helo ${name}`)
// }


//------------------------------------------------------------------------------


// document.querySelector('.test .screen').style.backgroundColor = localStorage.color;
// let buttons = document.querySelectorAll('.colors span');

// buttons.forEach(span => {
//   if (span.dataset.color == localStorage.color) {
//     span.className = 'active';
//   };
//   span.onclick = (e) => {
//     span.parentElement.childNodes.forEach(span => span.className = '')
//     span.className = 'active'
//     span.parentElement.nextElementSibling.style.backgroundColor = e.target.dataset.color;
//     window.localStorage.color = e.target.dataset.color
//   }
// })

//------------------------------------------------------------------------------

// let x = [1, 1, 1, 3, 5, 2];
// log(x);

// let y = new Set(x);
// log(y);


//==============================================================================

class Human {
  static counter = 0;
  constructor(a, b, c) {
    this.name = a;
    this.age = b;
    this.country = c;
    Human.counter++;
  }
  sayHello() {
    return (`${this.name} says hello`)
  }
  static count() {
    return Human.counter;
  }
}

class Doctor extends Human {
  #ks
  constructor(a, b, c, d, e, k) {
    super('ali');
    this.special = a;
    this.university = b;
    this.#ks = k;
  }
  meow(){
    console.log(this.#ks);
  }
}


let h1 = new Human('ali', 26, 'jordan');
let h2 = new Human('mhmd', 28, 'UAE');
let d1 = new Doctor('Teeth', 'Jordainian', 'ttes','Teeth', 'Jordainian', 'secrey');


console.log(d1.sayHello());
console.log(d1.meow());
console.log(h1.sayHello());
console.log(h2.sayHello());
console.log(Human.count());
