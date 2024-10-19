
function student()
{
    this.name="bala";
    this.gender="male";
}

student.prototype.age=30;

let stu=new student();
console.log(stu.name,stu.gender,stu.age);

let stu1=new student();
console.log(stu1.name,stu1.gender,stu1.age);

let stu2=new student();
console.log(stu2.name,stu2.gender,stu2.age);

