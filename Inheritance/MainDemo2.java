//Hybrid Inheritance

package Inheritance;

class Employee1
{
    void Emp(String Name,int Age)
    {
        System.out.println("Employee Name :"+Name);
        System.out.println("Employee Age :"+Age);
    }
}
class Department1 extends Employee1
{
    void Dept(String Dname)
    {
        System.out.println("Department Name :"+Dname);
    }
}
class Manager1 extends Employee1
{
    void Mang(String name,String ID)
    {
        System.out.println("Manager Name :"+name);
        System.out.println("Manager ID :"+ID);
    }
}
class Company extends Manager1
{
    void Comp(String name,String location,int Pincode)
    {
        System.out.println("Company Name :"+name);
        System.out.println("Company location :"+location);
        System.out.println("City Pincode :"+Pincode);
    }
}

public class MainDemo2
{
    public static void main(String[] args) {
        Department1 D=new Department1();
        D.Emp("Krishna",22);
        D.Dept("Development");

        Company C=new Company();
        C.Emp("Radha",22);
        C.Mang("Rama","Sita18");
        C.Comp("Gentech","Bangalore",586103);
    }
}
