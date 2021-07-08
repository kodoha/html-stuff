//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

export function decodedValue (arr){
const [a,b, ...extra] = arr
const value1 = COLORS.indexOf(a);
const value2 = COLORS.indexOf(b);
const colorString = `${value1}${value2}`;
 return parseInt(colorString);

};
console.log(decodedValue(['brown','black']));
console.log(decodedValue(['brown','black','grey']));
