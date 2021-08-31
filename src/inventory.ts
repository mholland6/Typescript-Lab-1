import InventoryItem from "./models/Inventory";

const inventory: InventoryItem[] = [
  {
    product: {
    name: 'motor',
    price: 10.00
    },
    quantity: 10
  },
  {
    product: {
    name: 'sensor',
    price: 12.50
    },
    quantity: 4
  },
  {
    product: {
    name: 'LED',
    price: 1.00
    },
    quantity: 20
  }
] 

console.log(inventory);

function calcInventoryValue(array: InventoryItem[]): number {
  if (array.length === 0) {
    return 0;
  } else {
    let total = 0;
    array.forEach( (item) => {
      total += item.product.price * item.quantity 
    })
    return total;
  }
}

console.log(calcInventoryValue(inventory));