//Multilevel Inheritance contains Constructor Overloading

package Inheritance;

class Employee5
{
    Employee5(String Name,int Age)
    {
        System.out.println("Employee Name :"+Name);
        System.out.println("Employee Age :"+Age);
    }
    Employee5(int sal)
    {
        System.out.println("Employee Salary :"+sal);
    }
}

class Department5 extends Employee5
{
    String Dname;
    Department5(String name,int age,String dname)
    {
        super(name,age);
        Dname=dname;

        System.out.println("Department Name :"+dname);

    }
    Department5(int sal)
    {
        super(sal);
    }
}
class Manager5 extends Department5
{
    Manager5(String name,int age,String dname)
    {
        super(name, age, dname);
    }
    Manager5(int sal)
    {
        super(sal);
    }
}
public class MainDemo5
{
    public static void main(String[] args)
    {
        Manager5 D=new Manager5("Krishna",22,"Development");
        Manager5 D1=new Manager5(123);


    }
}
