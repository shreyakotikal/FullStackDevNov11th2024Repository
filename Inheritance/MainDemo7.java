//Multilevel Inheritance containing same method name and signature

package Inheritance;

class Employee7
{
    void showEname(String Ename)
    {
        System.out.println("Employee Name :"+Ename);
    }
}
class Department7 extends Employee7
{
    String Dname;
    Department7(String dname,String Ename)
    {
        super.showEname(Ename);
        this.Dname=dname;
    }
    void showEname(String Ename)
    {
        System.out.println("Department Name :"+Dname);
    }
}
class Company7 extends Department7
{
    String Cname;
    Company7(String dname,String Ename,String cname)
    {
        super(dname,Ename);
        this.Cname=cname;
    }
    void showCname()
    {
        System.out.println("Company Name :"+Cname);
    }
}
public class MainDemo7 
{
    public static void main(String[] args) {
       Company7 C7=new Company7("Development","Krishna","Gentech");
       C7.showCname();
       C7.showEname(null);





    }
}
