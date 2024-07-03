alert ('Percentage Calculator');

var totalMarks=400;
var PhysicsMarks= +prompt('Enter Physics Marks');
console.log("Your Phyiscs Marks Are " + PhysicsMarks);

var MathMarks= +prompt('Enter Maths Marks');
console.log("Your Math Marks Are " + MathMarks);

var EngMarks= +prompt('Enter English Marks');
console.log("Your Eng Marks Are " + EngMarks);

var SciMarks= +prompt('Enter Science Marks');
console.log("Your Science Marks Are " + SciMarks);

var ObtainedMarks= PhysicsMarks+MathMarks+EngMarks+SciMarks;
console.log("You Got >>"+ObtainedMarks+"Marks");

var Percentage=ObtainedMarks/totalMarks*100;
console.log("your percentage is>>" +Percentage + '%');