import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

// concrete class
public class Example extends AbstractClassExample implements InterfaceExample, Comparable<Example>
{
    // fields
    // primitive type
    private int field1;
    // object type, type parameter
    private ArrayList<String> field2;

    // constructors
    public Example(int field1){
        super();
        // field field1 is not visible
        this.field1 = field1;
        field2 = new ArrayList<String>();
    }

    // methods
    // get method (accessor)
    public int getField1(){
        return field1;
    }

    // modifier method
    public void addToField2(String toAdd){
        field2.add(toAdd);
    }

    // overloaded method
    public void addToField2(int toAdd){
        // operator overloading
        field2.add("Number " + toAdd);
    }

    // overriden method from Object
    public String toString(){
        String stuff = "A lovely object " + field1;
        for(String thing: field2){
            stuff += thing;
        }
        return stuff;
    }

    public int compareTo(Example other){
        return this.getField1() - other.field1;
    }
    
    
    public static void main(String[] args){
        // referring to static (class) variable
        System.out.println(Example.numberOfObjects + " objects");
        // polymorphism: dynamic type <> static type
        List<Example> objects = new ArrayList<Example>();
        for(int i = 0; i<args.length; i++ ){
            objects.add(new Example(new Integer(args[i])));
        }
        // calling static (class) method
        Collections.sort(objects);
        System.out.println(objects);
        System.out.println(Example.numberOfObjects + " objects");
    }
}
