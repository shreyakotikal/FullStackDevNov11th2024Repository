//Multilevel Inheritance with parameterized Constructor

package Inheritance;

class Employee4
{
    Employee4(String Name,int Age)
    {
        System.out.println("Employee Name :"+Name);
        System.out.println("Employee Age :"+Age);
    }
}
class Department4 extends Employee4
{
    String Dname;
    Department4(String name,int age,String dname)
    {
        super(name,age);
        Dname=dname;
        System.out.println("Department Name :"+Dname);
    }
}
class Manager4 extends Department4
{
    Manager4(String name,int age,String dname)
    {
        super(name, age, dname);
    }
}

public class MainDemo4
{
    public static void main(String[] args)
    {
        Manager4 D=new Manager4("Krishna",22,"Development");
    }
}
