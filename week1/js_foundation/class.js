// //callbacks, map ,filter, find sort

class animal {
  // class is blueprint of anything  ++++ logical identity
  constructor(name, legcount, speaks) {
    this.name = name;
    this.legcount = legcount;
    this.speaks = speaks;
  }
  static mytype(){
        console.log("animal");   //this is function
  }
  speak() {
    console.log("hi there " + this.speaks);   //not a function can be done with a object
  }
}

let dog = new animal("dog", 4, "bhow-bhow"); //object of that class given +++physical identity
let cat = new animal("cat", 4, "meow-meow");

animal.mytype();    // can be done without initiating an object

dog.speak(); //cal function on object   <here we have to initiate an object like dog is obect of animal class


// class vehicle{
//     constructor
// }

///static functions which are not associated to function it associated to class it self
