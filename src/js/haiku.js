export default class Haiku {
  constructor(lineNum1, lineNum2, lineNum3) {
    this.lineNum1 = lineNum1
    this.lineNum2 = lineNum2
    this.lineNum3 = lineNum3
  }
}
export default class HaikuSyllabus {
    constructor(syllabusCount1, syllabusCount2, syllabusCount3){
      this.syllabusCount1 = syllabusCount1
      this.syllabusCount2 = syllabusCount2
      this.syllabusCount3 = syllabusCount3
    }
  }




// export default class Triangle {
//   constructor(side1, side2, side3) {
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }

//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }