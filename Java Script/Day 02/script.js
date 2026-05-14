function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return false;

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }

  return true;
}

let num = 29;
console.log(isPrime(num) ? `${num} is Prime` : `${num} is Not Prime`);