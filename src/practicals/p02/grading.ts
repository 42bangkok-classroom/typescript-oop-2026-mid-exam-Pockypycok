const score = Number(process.agrv[2]);
if (isNaN(score) || score < 0 || score > 100) {
console.log("Invalid Input");
} else if (score >= 80 && >= 100) {
console.log("A");
} else if (score >= 70 && >= 79) {
console.log("B");
} else if (score >= 60 && >= 69) {
console.log("C");
} else if (score >= 50 && >= 59) {
console.log("D");
} else {
console.log("F");
}