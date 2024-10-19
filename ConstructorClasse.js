class Student
{

    constructor(sid, sname, grade)
    {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;
    }

    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}

let stu = new Student(101,"Akula", "A+");
stu.display();

let stu1 = new Student(102,"Bala", "A");
stu1.display();

let stu2 = new Student(103,"yesu", "B");
stu2.display();

