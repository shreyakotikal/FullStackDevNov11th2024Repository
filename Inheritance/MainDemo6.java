//Hybrid Inheritance contains Parameterized Constructor,instance Variables and methods

package Inheritance;

class Employee6
{
    String ename;
    int age;
    Employee6(String ename,int age)
    {
        this.ename = ename;
        this.age = age;
    }
    void displayEmpdetails()
    {
        System.out.println("Employee Name :"+ename);
        System.out.println("Employee Age :"+age);
    }
}
class Department6 extends Employee6
{
    String dname;
    Department6(String ename,int age,String dname)
    {
        super(ename, age);
        this.dname = dname;
    }
    void displayDept()
    {

        System.out.println("Department Name :"+dname);
    }
}
class Manager6 extends Employee6
{
    String mname;
    int id;
    Manager6(String ename,int age,String mname,int id)
    {
        super(ename, age);
        this.mname = mname;
        this.id = id;
    }
    void display()
    {

        System.out.println("Manager Name :"+mname);
        System.out.println("Manager ID :"+id);
    }
}

class Company6 extends Manager6
{
    String cname;
    String Location;
    Company6(String ename,int age,String mname,int id,String cname,String Location)
    {
        super(ename, age, mname, id);
        this.cname = cname;
        this.Location = Location;
    }
    void displaycomp()
    {

        System.out.println("Company Name :"+cname);
        System.out.println("Company Location :"+Location);
    }
}

public class MainDemo6
{
    public static void main(String[] args) {
        Company6 C=new Company6("Krishna",22,"Rama",1817,"Gentech Acadamy","Bangalore");
        C.displayEmpdetails();
        C.display();
        C.displaycomp();
        System.out.println("***************");
        Department6 D=new Department6("Radha",22,"Development");
        D.displayEmpdetails();
        D.displayDept();
    }
}
