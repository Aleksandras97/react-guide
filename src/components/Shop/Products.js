import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "Test 1",
    desciption: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 16,
    title: "Test 2",
    desciption: "This is a first product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.desciption}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
