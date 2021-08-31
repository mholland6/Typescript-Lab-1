import Mountain from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: 'Kilimanjaro',
    height: 19341
  },
  {
    name: 'Everest',
    height: 29029
  },
  {
    name: 'Denali',
    height: 20310
  }
]

console.log(mountains);

export function findNameOfTallestMountain(array: Mountain[]): string {
  if (array.length === 0) {
    return "";
  } else {
    let tallestMountain = array[0];
    array.forEach( (item) => {
      if (item.height > tallestMountain.height) {
        tallestMountain = item;
      } 
    })
    return tallestMountain.name
  }
}

console.log(findNameOfTallestMountain(mountains));

 

// const findNameOfTallestMountain = (array: Mountain[]): string => {
//   if (array.length === 0) {
//     return "";
//   } else {
//     let tallestMountain = array[0];
//     array.forEach((item) => {
//       if (item.height > tallestMountain.height) {
//         tallestMountain = item;
//       }
//       return tallestMountain.name;
//     }) 
//   }
// }


