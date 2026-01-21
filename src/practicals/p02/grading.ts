const score = Number(process.agrv[2]);
if (isNaN(score) || score < 0 || score > 100) {
console.log("Invalid Input");
} else if (score >= 80 && >= 100) {
console.log("A");
} else if (score >= 70) {
console.log("B");
} else if (score >= 60) {
console.log("C");
} else if (score >= 50) {
console.log("D");
} else {
console.log("F");
}