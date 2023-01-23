# JS-bootcamp

### LV-13
---
<pre>
  var :
  - Redeclare ( Yes )
  - Access before declaration ( Undefined )
  - Variable Scope Drama [ add the variable to the window opject ] ( Yes )
  - Block and function scope (next lectures)

  let 
  - Redeclare ( No with Error )
  - Access before declaration ( Error )
  - Variable Scope Drama [ add the variable to the window opject ] ( No )
  - Block and function scope (next lectures)

  const 
  - Redeclare ( No with Error )
  - Access before declaration ( Error )
  - Variable Scope Drama [ add the variable to the window opject ] ( No )
  - Block and function scope (next lectures)
</pre>
---
### LV-14 
---
<pre>
Character Escape Sequences 
as : 

\n for new line
\ to ignore anything after
\\ to write \ 

and more of them to know more search [ Character Escape Sequences ]
</pre>
---
### LV-N
---
<pre>
  Apply css on console :

  we use %c to tell that i want to style this using css rules

  console.log('%cHEllo %cworld','color:red; font-size:40px' , "font-size:40px")

  here the first %c will take the first style
  the second %c will take the second style

  if i dont add the second %c the second style will be printed on console also and the first style will applied at the hole first log
</pre>

---
### LV-18
---
<pre>
  Arithmetic Operators:
  + for adding and concatinationg
  - for sub and if i do (10 - 'any string'  will give NaN typeof nan is number also)
  * multiply 
  / divide 
  ** exponintial
  % module
  ++ icrement [pre,post]
  -- decrement [pre,post]
</pre>
---
### LV-19
---
<pre>
  Unary plus and Unary negation 
  by add + or - befor the data to transform it

  + => Unary plus [Return a number if its not a number]
  - => Unary negation [Return a number if its not a number but in negative form]

  console.log(+100)   // 100 
  console.log(+'100')   // 100 
  console.log(+'-100')   //  -100
  console.log(+'osama')   //  NaN
  console.log(+'15.5')   // 15.5  
  console.log(+0xff)   //   255  (hexa number)
  console.log(+null)   //  0
  console.log(+false)   //  0
  console.log(+true)   //  1


  console.log(-100)   // -100 
  console.log(-'100')   // -100 
  console.log(-'-100')   //  100
  console.log(-'osama')   //  NaN
  console.log(-'15.5')   // -15.5  
  console.log(-0xff)   //   -255  (hexa number)
  console.log(-null)   //  -0
  console.log(-false)   //  -0
  console.log(-true)   //  -1
</pre>
---
### LV-20
---
<pre>
  Type Coercion  (الاكراه)

  let a = 'osama'
  let b = '10'
  let c = 20
  let d = true 

  console.log(b + c)  // 1020  (concatination applyed)
  console.log(+b + c) // 30    (we used unary here to do it as mathmatical operation)
  console.log(a - c)  // NaN   no concatination here to applyed, it will autocheck if can do it as unary but also the unary of osama is NaN
  console.log(b - c)  // -10   auto unary here the unary of '10' is 10 
  console.log("" - 2)  // -2     auto unary of "" is 0
  console.log(b + c + d)  // 1020true   first it concat b & c with result 1020 as string then concat true as string also
  console.log(c + d + b) //2110   first add the numbers then concat
  console.log(c + d - b) // 11   first add the numbers then the unary of b 
  console.log(c + d - a) // NaN   first add the numbers then the unary of a is NaN so NaN 
  console.log(+b + c + d)  // 31
</pre>
---
### LV-23
---
<pre>
  Numbers :
  all numbers in javascript called Double Precision

  console.log(1000000)  // 1000000 
  console.log(1_000_000)  // 1000000   (_) called syntactic sugar its ignored and used to make numbers readable
  console.log(1e6)  // 1000000 
  console.log(10 ** 6)  // 1000000 
  console.log(1000000.00)  // 1000000 

  console.log(Number.MAX_VALUE)  // 1.7976931348623157e+308 
  console.log(Number.MAX_VALUE + 1000)  // 1.7976931348623157e+308
  console.log(Number.MAX_SAFE_INTEGER)  // 9007199254740991    AFter this integer the operations are creazy
</pre>
---
### LV-24
---
<pre>
  Numbers Methods :
  Note : i can use two dots instade of () to deal with methods if the number is integer

  - toString()
    console.log(100..toString())  // 100 as string
    console.log(100.1.toString())  // 100.1 as string
    console.log((100).toString()) // 100 as string
  
  - toFixed()
    console.log(100.5555.toFixed(2))  // 100.56  'string' if the number before is 5 or more it will be rounded
    console.log(100.5545.toFixed(2))  // 100.55  'string'
  
  - ParseInt()
    console.log(parseInt('100'))  // 100 as  a number
    console.log(parseInt('100 osama'))  // 100 as  a number
    console.log(+'100 osama')  // NaN
    console.log(parseInt('100.500 osama'))  // 100  a number

  - ParseFloat()
    console.log(ParseFloat('100.500 osama'))  // 100.5  a number

  - Number.isInteger()
    console.log(Number.isInteger('100'))  // false
    console.log(Number.isInteger(100.500))  // false
    console.log(Number.isInteger(100))  // true
  
  - Number.isNaN()
    console.log(Number.isNaN('Osama'))  // true   it unary the thing if nan it will give true if not it will give false
    console.log(Number.isNaN('100'))  // false
    console.log(Number.isNaN(100))  // false
</pre>
---
### LV-25
---
<pre>
  Math Object

    Math.round()    // round the number to integer Math.round(100.56) => 101 , Math.round(100.46) => 100
    Math.ceil()     // Math.ceil(10.1)  => 11
    Math.floor()    // Math.floor(10.6)   => 10
    Math.random()   // any random number between 0 - 0.9999
    Math.min()      // Math.min(5,6,7,8,-1) => -1
    Math.max()      // Math.max(5,6,7,8,-1) => 8
    Math.pow()      // the  power of number Math.pow(10,6)  == (10 ** 6)
    Math.trunc()    // ignore the part after the dot and keep the number integer  Math.trunc(100.9) => 100
</pre>
---
### LV-27
---
<pre>
  String Methods

  let x= 'ahmad'
    
    - Access by index              // x[0] = a
    - Access by charAt() method   // x.charAt(0)  = a
    - length                     // x.length = 5
    - trim() to remove the spaces BEFORE and AFTER the string ONLY let y = '  ah mad '  => y.trim() = 'ah mad'
    - toUpperCase()
    - toLowerCase()
    - 
</pre>
---
### LV-28
---
<pre>
  String Methods

  Note : mand from mandatory and opt from optional

  let x = 'Hello people this is war'

  - indexOf(value [mand] , start [Opt] default is 0)  //  x.indexOf('this') =>  13  (if no result it will give -1)
  - lastIndexOf(value [mand] , end [Opt] default is length) // x.indexOf('o') =>  8 find the index of first o from the last 
  - slice(start [mand] , end [opt] not included )
      x.slice(2,10)  => 'llo peop'
      x.slice(-7,-3) => ' is '   //slice in negative deal with length not index and from the end
  - repeat(Times)
  - split(seperator [opt],limit [opt])
      x.split() => ['Hello people this is war'] ,
      x.split('') => ['H', 'e', 'l', 'l', 'o', ' ', 'p', 'e', 'o', 'p', 'l', 'e', ' ', 't', 'h', 'i', 's', ' ', 'i', 's', ' ', 'w', 'a', 'r']
      x.split(' ') => ["Hello" , "people" , "this" , "is" , "war"]
      x.split(' ' ,2) => ["Hello" , "people"]
</pre>
---
### LV-29
---
<pre>
  String Methods

  - subString()
  - subStr()
  - includes(value [mand], start [opt] default 0)
  - startWith(value [mand], start [opt] default 0)
  - endWith(value [mand], length [opt] default full length)
</pre>
---
### LV-36
---
<pre>
  Logical Or ||
    if the value is one of the following :
    Null / undefined / any false value (0 ,"",false)
    it will take the next side.

      console.log(Null || 'Hello')  // 'Hello'
      console.log(0 || 'Hello')  // 'Hello'
  
  Nullish coalescing Operator ??
    if the value is only (Null / undefined)
    it will take the next side

      onsole.log(Null ?? 'Hello')  // 'Hello'
      console.log(0 ?? 'Hello')  // 0
</pre>
---
### LV-38
---
<pre>
  Switch
  
  - switch condition is type sensitive 
    switch ('10') is not like switch(10)
    that means it will take the case with the same type and value 

  - break word usage 
    if i dont use break after each case it will take all the casses for the same value

    switch('hello') {

      case 'hello': 
      console.log('meow');
      break ;

      case 'hello' :
      console.log('meow');
      break ;
    }

    the output here is 'meow' one time

    switch('hello') {

      case 'hello' :
      console.log('meow');

      case 'hello' :
      console.log('meow');
      break ;
    }

    the output here is 'meow' two time

  - we can use defalut case any where but if i dont use it in the end we must add break also to avoid more one output
</pre>
---
### LV-40
---
<pre>
  if we do typeof any array the result is object

  we can use Array.isArray() to check the arrays by true and false answer
  let x = [1,2,3]
  Array.isArray(x)  // true
</pre>
---
### LV-41/42/43
---
<pre>
  Arrays Methods :

  - unshift(value1 , value2 ..etc)  
  - push(value1 , value2 ..etc)
  - shift()
  - pop()
  - includes()
  - indexOf(value[mand], start index [opt] default is 0)
  - lastIndexOf(value[mand], length by index [opt] default is last index)
</pre>
---