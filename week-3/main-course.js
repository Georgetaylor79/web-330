// Import product class from product.js
import { Product } from "./product.js";

// Create MainCourse class.
export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}