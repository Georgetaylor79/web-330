// Import product class from product.js
import { Product } from "./product.js";

// Create Beverage class.
export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}