package Inheritance;

class Emp
{
    String Ename;
    Emp(String ename)
    {
        Ename = ename;
    }
    void Empdet()
    {
        System.out.println("Emp:"+Ename);
    }

}
class Dept extends Emp
{
    String dname;
    Dept(String dname,String Ename)
    {
        super(Ename);
        this.dname = dname;
    }
    void Deptdet()
    {
        System.out.println("Dept :"+dname);
    }

}
class Mang extends Dept
{
    String Mname;
    Mang(String mnane,String dname,String Ename)
    {
        super(dname, Ename);
        Mname = mnane;
    }
    void Mangdet()
    {
        System.out.println("Mang :"+Mname);
    }

}

public class MainDemo10
{
    public static void main(String[] args) {
        Mang M=new Mang("Krishna","devp","radha");
        M.Empdet();
        M.Deptdet();
        M.Mangdet();
    }
}
