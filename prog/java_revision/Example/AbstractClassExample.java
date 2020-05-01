public abstract class AbstractClassExample
{
     protected static int numberOfObjects = 0;
     
     public AbstractClassExample(){
         numberOfObjects++;
     }
     
     public abstract int getField1();
}
