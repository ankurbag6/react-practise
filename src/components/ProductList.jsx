import { formatPrice } from "../utils/helper";

/*
**Drill 3: Render a list from an array**

Build a `ProductList` component that takes a `products` prop and renders each product's name and price. Use this data to test it:

```jsx
const products = [
  { id: "p1", name: "Keyboard", price: 49.99, inStock: true },
  { id: "p2", name: "Mouse", price: 19.5, inStock: false },
  { id: "p3", name: "Monitor", price: 189, inStock: true },
];
```

It should:

1. Use a stable key for each item.
2. Show prices as currency with two decimals, like "$19.50".
3. Show "Out of stock" next to items that aren't in stock.
4. Show "No products" when the array is empty.
5. Show a total count above the list, like "3 products".

Target time: 5 minutes. Before you paste, add `console.log` checks for your price formatting with `49.99`, `19.5`, and `189`, and say what you expect each to print.

Follow-up to be ready for: why is using the array index as a key a problem?

Paste your code when you're done.
*/
const NO_PRODUCT = "No products";
const OUT_OF_STOCK = "Out of stock";
function ProductList({ products = [] }) {
  if(products.length === 0) return <p>No products</p>;

  const label = products.length > 1 ? "products" : "product";

  return (
    <div>
      <h2>{products.length} {label}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} | <span>{formatPrice(product.price)}</span>{" "}
            {!product.inStock && <span> | {OUT_OF_STOCK}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
