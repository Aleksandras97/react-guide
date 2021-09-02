import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="products/p1">Bok</Link>
        </li>
        <li>
          <Link to="products/p2">Carpet</Link>
        </li>
        <li>
          <Link to="products/p3">Shoose</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
