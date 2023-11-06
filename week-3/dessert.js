// Import product class from product.js
import { Product } from "./product.js";

// Create Dessert class.
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}