class A
{
  a=100;
  display()
  {
    console.log(this.a);
  }


}

class B extends A
{
  
  b=200;
  show()
  {
    console.log(this.b);
  }

}

let bobj=new B();  // creating object for class B

bobj.display();  // 100
bobj.show();    // 200

