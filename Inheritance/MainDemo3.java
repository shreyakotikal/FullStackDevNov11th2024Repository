//Hierarical Inheritance

package Inheritance;

class Employee2
{
    void Emp(String Name,int Age)
    {
        System.out.println("Employee Name :"+Name);
        System.out.println("Employee Age :"+Age);
    }
}
class Department2 extends Employee2
{
    void Dept(String Dname)
    {
        System.out.println("Department Name :"+Dname);
    }
}
class Manager2 extends Employee2
{
    void Mang(String name,String ID)
    {
        System.out.println("Manager Name :"+name);
        System.out.println("Manager ID :"+ID);
    }
}

public class MainDemo3
{
    public static void main(String[] args) {
        Department2 D=new Department2();
        D.Dept("Development");
        D.Emp("Krishna",22);

        Manager2 M=new Manager2();
        M.Emp("Radha",22);
        M.Mang("Rama","Sita18");
    }
}
