class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }

}
Employee.prototype.display=function()
                            {
                                console.log(this.eid, this.ename);
                            }

emp=new Employee(100,"bala")
emp.display();

emp1=new Employee(200,"yesu")
emp1.display();


