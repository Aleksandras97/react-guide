import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const params = useParams();

  return (
    <h1>
      Product Detail
      <p>{params.id}</p>
    </h1>
  );
};

export default ProductsDetail;
