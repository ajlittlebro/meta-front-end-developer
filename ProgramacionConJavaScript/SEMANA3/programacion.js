class Product {
  constructor(name, price, size, quantity) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.quantity = quantity;
  }
}

const products = [];

const addProduct = (product) => {
  try {
    if (
      product.name === "" ||
      product.price === 0 ||
      product.size === "" ||
      product.quantity === 0 ||
      typeof product.name !== "string" ||
      typeof product.price !== "number" ||
      typeof product.size !== "string" ||
      typeof product.quantity !== "number"
    ) {
      throw new Error("Product cannot be empty");
    }

    const existingProduct = products.find(
      (productInInventory) => productInInventory.name === product.name
    );

    if (existingProduct) {
      existingProduct.quantity += product.quantity;
      console.log(
        `The quantity of product ${product.name} has been increased by ${product.quantity} units.`
      );
    } else {
      products.push(product);
      console.log(`Product ${product.name} has been added to the inventory.`);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const removeProduct = (productName) => {
  try {
    if (productName === "") {
      throw new Error("Product name cannot be empty");
    }

    const productIndex = products.findIndex(
      (product) => product.name === productName
    );

    if (productIndex !== -1 || products.length === 0 || products === undefined) {
      products.splice(productIndex, 1);
      console.log(
        `Product ${productName} has been removed from the inventory.`
      );
    } else {
      console.log(`Product ${productName} is not found in the inventory.`);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const showInventory = () => {
  if (products.length === 0) {
    console.log("Inventory is empty.");
  } else {
    console.log("Current inventory:");
    products.forEach((product) => {
      console.log(
        `- ${product.name} (${product.size}): ${product.quantity} units - Price: $${product.price}`
      );
    });
  }
};

const calculateTotalPrice = (price) => {
  const totalPrice = Math.floor(price * 1.16);
  console.log(`The total price with IVA is: $${totalPrice}`);
};

const product1 = new Product("Shirt", 50, "M", 10);
const product2 = new Product("Pants", 75, "L", 5);

addProduct(product1);
addProduct(product2);
showInventory();

calculateTotalPrice(product1.price * product1.quantity);

removeProduct("Shoes");
removeProduct("Shirt");
showInventory();