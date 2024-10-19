class Bank
{
    roi()
    {
        return 0;
    }
}

class Axis extends Bank
{
    roi()
    {
        return 10.50;
    }
}

class SBI extends Bank
{
    roi()
    {
        return 12.50;
    }
}

let axis = new Axis();
console.log(axis.roi());  // 10.50

let sbi = new SBI(); 
console.log(sbi.roi());   // 12.50
