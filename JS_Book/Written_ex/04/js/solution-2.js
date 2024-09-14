// 최대공약수 : Greatest Common Divisor (GCD)

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i; // 최대공약수
    }
  }
  return GCD;
}
