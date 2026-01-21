const n = Number(process.argv[2]);
let n = 5;
for (let i = 1; i <= n; i++) {
  let line = '';
  for (let s = 1; s <= n - i; s++) { 
    line += ' '; 
  }
  for (let j = 1; j <= i; j++) {
    line += j;
  }
  console.log(line);
}