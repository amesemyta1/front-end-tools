let sum = 0;

for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 === 1) {
    console.log("Found");
    sum += i;
    console.log(i, " ", sum);

    if (sum * 5 > 5000) {
      console.log("Bigger");
    } else {
      console.log("Smaller or equal");
    }
    console.log(sum * 5);
  }
}

let summ = 0;
let d = 0;
let m = 0;

for (let i = 1; i <= 1000; i += 1) {
  summ += i;
}

d = Math.round(summ / 1234);
m = summ % 1234;

console.log(summ);
console.log(d);
console.log(m);

console.log(d > m);
