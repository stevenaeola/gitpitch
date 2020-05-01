
public class Concertina
{
    private String maker;
    private int serial;
    private int buttons;
    
    public Concertina(String maker, int serial){
        this.maker = maker;
        this.serial = serial;
    }
    
    public void setButtons(int buttons){
        this.buttons = buttons;
    }
    
    public int getButtons(){
        return buttons;
    }
    
    
    public static void main(String args[]){
        Concertina c = new Concertina("Wheatstone", 29999);
        System.out.println(c);
    }
}
