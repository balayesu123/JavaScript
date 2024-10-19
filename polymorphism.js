class Shape
{
    draw()
    {
        return "I am generic shape";
    }
}

class Squar
{
    draw()
    {
        return "I am Squar";
    }
}

class Circle
{
    draw()
    {
        return "I am Circle";
    }
}

sh=new Shape();
console.log(sh.draw());  // I am generic shape

sq=new Squar();
console.log(sq.draw());  // I am Squar

cr=new Circle();
console.log(cr.draw());  // I am Circle

