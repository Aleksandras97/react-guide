import classes from "./AvailableSweets.module.css";
import SweetsItem from "./SweetsItem/SweetsItem";
import Card from "../UI/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const AvailableSweets = () => {
  const [sweets, setSweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSweets = () => {
    setIsLoading(true);
    axios
      .get(
        "https://sweets-order-app-default-rtdb.europe-west1.firebasedatabase.app/sweets.json"
      )
      .then((res) => {
        const data = res.data;
        let loadedSweets = [];

        for (const key in data) {
          loadedSweets.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setSweets(loadedSweets);
      })
      .catch((err) => {
        setError(err.message);
      });

    setIsLoading(false);
  };

  useEffect(() => {
    getSweets();
  }, []);

  let sweetsList = <p>No sweets found...</p>;

  if (sweets.length > 0) {
    sweetsList = sweets.map((sweet) => (
      <SweetsItem
        key={sweet.id}
        id={sweet.id}
        name={sweet.name}
        description={sweet.description}
        price={sweet.price}
      />
    ));
  }

  let content = sweetsList;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <section className={classes.sweets}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableSweets;
