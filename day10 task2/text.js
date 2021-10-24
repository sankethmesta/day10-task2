// class
class Person{
    constructor(name,age){
        this.name=name;
        this.age = age;
    }
}
var student = new Person("ravi",21)
console.log(student.name);
console.log(student.age);

// getter and setter
class PersonOne{
    constructor(name)
    {
        this.name=name;
    }
    get getter(){
        return this.name;
    }
    set setter(a){
        this.name=a
    }
}
var studentone=new PersonOne("Raju");
console.log(studentone.name)

// using method in class
class PersonTwo{
    constructor(name){
        this.name=name;
        this.hike=function(){
            console.log("hi"+" "+this.name);
        }
    }
}
var studenttwo=new PersonTwo("ajith")
console.log(studenttwo.hike())

// inheritence
class PersonThree{
    constructor(name,sal){
        this.name=name;
        this.sal=sal
    }
    hike(){
        console.log("hi"+" "+this.name+" "+"your hike is"+" "+(this.sal+5000));
    }
}
class Student extends PersonThree{

}
var studentthree=new Student("ajay",20000)
console.log(studentthree.hike())

// overriding
// hike of 20%
class PersonFour{
    constructor(name,sal){
        this.name=name;
        this.sal=sal
    }
    hike(){
        console.log("hi"+" "+this.name+" "+"your hike is"+" "+(this.sal+5000));
    }
}
// hike of 10%
class StudentOne extends PersonFour{
          hike(){
            console.log("hi"+" "+this.name+" "+"your hike is"+" "+(this.sal+2500));
          }
}
var studentten = new PersonFour("suma",30000)
var studentthree=new StudentOne("harsha",20000)
console.log(studentten.hike())
console.log(studentthree.hike())

// super
class PersonFive{
    constructor(name){
        this.name=name;
      
    }
    hike1(){
       console.log("hi"+" "+this.name)
    }
}
class StudentTwo extends PersonFive{
         constructor(name){
             super(name);
         }
}
var studentfour=new StudentTwo("harsha");
console.log(studentfour.hike1())


