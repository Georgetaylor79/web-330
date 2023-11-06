// Import product class from product.js
import { Product } from "./product.js";

// Create Appetizer class.
export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}