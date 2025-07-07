//Multilevel Inheritance containing same Variable name and datatype

package Inheritance;

class Employee9
{
    void showEname(String Ename)
    {
        System.out.println("Employee Name :"+Ename);
    }
}
class Department9 extends Employee9
{
    String Ename;
    void showDname(String Ename)
    {
        System.out.println("Department Name :"+Ename);
    }
}
class Company9 extends Department9
{
    String Ename;

    void showCname(String Ename)
    {
        System.out.println("Company Name: " + Ename);
    }
}

public class MainDemo9
{
    public static void main(String[] args) {
       Company9 C=new Company9();
       C.showEname("Krishna");
       C.showDname("devp");

    }
}
