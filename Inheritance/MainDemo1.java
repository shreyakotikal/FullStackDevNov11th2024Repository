//Multilevel Inheritance

package Inheritance;

class Employee
{
    void Emp(String Name,int Age)
    {
        System.out.println("Employee Name :"+Name);
        System.out.println("Employee Age :"+Age);
    }
}
class Department extends Employee
{
    void Dept(String Dname)
    {
        System.out.println("Department Name :"+Dname);
    }
}
class Manager extends Department
{
    void Mang(String name,String ID)
    {
        System.out.println("Manager Name :"+name);
        System.out.println("Manager ID :"+ID);
    }
}

public class MainDemo1
{
    public static void main(String[] args) {
        Manager M=new Manager();
        M.Emp("Krishna",22);
        M.Dept("Development");
        M.Mang("Rama","Sita18");
    }
}
