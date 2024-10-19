class Test
{
    static a=10; // static variable
           b=20; // non static variable

    static m1()
    {
        console.log("This is static method");
    }

     m2()
    {
        console.log("This is Non static method");
    }
}

// static members we can call with the help of Class Name
Test.m1();   // This is static method

console.log(Test.a);   // 10,  before re-initializing
Test.a=50;           // re-initializing static variable with the help of class name
console.log(Test.a);  // 50, after re-initializing

// To call non static members we should create object to class and with the help of reference variable we can call non static members

// creating object

let t=new Test();
t.m2();  // This is Non static method

