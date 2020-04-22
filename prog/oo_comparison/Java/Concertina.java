
public class Concertina
{
    private String maker;
    private int serial;
    
    public Concertina(String maker, int serial){
        this.maker = maker;
        this.serial = serial;
    }
    
    public static void main(String args[]){
        Concertina c = new Concertina("Wheatstone", 29999);
        System.out.println(c);
    }
}
