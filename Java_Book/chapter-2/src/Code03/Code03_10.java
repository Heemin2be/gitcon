package Code03;

import java.util.Scanner;

public class Code03_10 {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int Score;
    System.out.print("필기시함 점수를 입력하세요: ");
    Score = s.nextInt();
    System.out.println(Score >= 70);
    s.close();  

  }
}
