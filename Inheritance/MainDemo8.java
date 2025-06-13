//Hierarchical Inheritance containing same method name and signiture

package Inheritance;

class Employee8
{
    void showEname(String Ename)
    {
        System.out.println("Employee Name :"+Ename);
    }
}
class Department8 extends Employee8
{
    String dname;
    Department8(String Dname)
    {
        this.dname=Dname;
    }
    void showEname(String Ename)
    {
        super.showEname(Ename);
        System.out.println("Department Name :"+dname);
    }
}
class Company8 extends Employee8
{
    String cname;
    Company8(String Cname)
    {
        this.cname=Cname;
    }
    void showCname(String Ename)
    {
        super.showEname(Ename);
        System.out.println("Company Name: " + cname);
    }
}

public class MainDemo8
{
    public static void main(String[] args)
    {
        Company8 C8 = new Company8("Gentech");
        C8.showCname("Krishna");
        Department8 D8 = new Department8("Development");
        D8.showEname("Radha");
    }
}
