
export class CartComponent extends HTMLElement
{
    constructor()
        {
            super();
        }

        // Adding web component for Shopping Cart icons.
        connectedCallback() 
        {
            this.innerHTML = 
                `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
        }
}

customElements.define("cart-component", CartComponent);