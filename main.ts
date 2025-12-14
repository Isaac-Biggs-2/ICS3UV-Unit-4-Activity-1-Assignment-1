/**
 * @author Isaac Biggs
 * @version 1.0.0
 * @date 2025-12-10
 * @fileoverview This program will calculate the average of a set of provided marks
*/
//variables 
let numberGrades = 0;
let total = 0;

// Ask how many grades the user wants to enter
const inputCount = prompt("How many grades do you want to enter?");

//get marks for numebr of grades then calculate average
if (inputCount !== null) {
  numberGrades = Number(inputCount);

  for (let i = 1; i <= numberGrades; i++) {
    const gradeInput = prompt(`Enter grade ${i}:`);

    if (gradeInput !== null) {
      const grade = Number(gradeInput);
      total += grade;
    }
  }

  const average = total / numberGrades;
  console.log(`You have entered ${numberGrades} marks. The student's average is ${average.toFixed(2) }% `);

  //if statements
  if (average <= 49){
    console.log("Student is failing")
  }

  if (average >= 50 && average <= 69) {
    console.log("The student's performance is just under average.");
  }

  if (average >= 70 && average <= 79) {
    console.log("The student's performance is average.");
  }

  if (average >= 50 && average <= 69) {
    console.log("The student is on the honour roll.");
  }


}






console.log("\nDone.")