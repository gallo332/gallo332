import java.util.stream.IntStream;
 
public class FizzBuzz 
{
  public static void main(String[] args) 
  {
    fizzBuzzImplementation(100);
  
  }
 
  private static void fizzBuzzImplementation(int num) 
  {
    for (int i = 1; i <= num; i++) 
    {
      if (((i % 5) == 0) && ((i % 3) == 0))
      {
        // Is it a multiple of 5 & 3?
        System.out.println("fizzbuzz");

      } 
      else if ((i % 3) == 0)
      {
        // Is it a multiple of 3?
        System.out.println("fizz");
      } 
      else if ((i % 5) == 0)
      {
        // Is it a multiple of 5?
        System.out.println("buzz");
      } 
      else
      {
        System.out.println(i); // Not a multiple of 5 or 3
      
      }
    }
  }
 
