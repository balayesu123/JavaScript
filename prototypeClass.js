class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }

}
Employee.prototype.sal=50000;

emp=new Employee(123,"bala")
console.log(emp.eid,emp.ename,emp.sal);

emp1=new Employee(100,"yesu")
console.log(emp1.eid,emp1.ename,emp1.sal);

emp2=new Employee(120,"akula")
console.log(emp2.eid,emp2.ename,emp2.sal);

