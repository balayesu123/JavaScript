let emeployee=
{
    empname:"Bala",
    empid:123,
    job:"engineer",
    basicsal:50000,
    bonus:function()
          {
            return((this.basicsal*10)/100);

          }

};

//calling property value inside the object
console.log(emeployee.empname)   // Bala

// calling method inside the object
console.log(emeployee.bonus());   // 5000


