package Code02;

import java.util.Scanner;


public class Code02_10 {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    System.out.print("정수를 입력하세요 : ");
    int num;
    num = s.nextInt();
    System.out.println("사용자가 입력한 값 ==> "+num);
    s.close();
  }
}
