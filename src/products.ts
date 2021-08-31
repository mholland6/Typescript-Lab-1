import Product from "./models/Product";

const products: Product[] = [
  {
    name: 'toothbrush',
    price: 2.99
  },
  {
    name: 'toothpaste',
    price: 4.99
  },
  {
    name: 'floss',
    price: 3.99
  }
] 

export function calcAverageProductPrice(array: Product[]): number {
  if (array.length === 0) {
    return 0;
  } else {
    let total = 0;
    array.forEach( (product) => {
      total += product.price
    })
    return total / array.length;
  }
}

console.log(calcAverageProductPrice(products));

 