import styles from "./AvailableSweets.module.css";
import SweetItem from "./SweetItem";

const DUMMY_SWEETS = [
  {
    id: "m1",
    name: "Cookie Dough Fudge",
    description:
      "Fudge is known as one of the classic types of sweet, but the modern twist on it includes a very popular, modern flavouring… Cookie dough.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Haribo Giant Strawbs",
    description:
      "Ah, Haribo. Now, while there is a wide variety of everyone’s favourite branded bag of sweets with equally broad opinions of which is the best, we thought we’d play it safe and go with something that everyone can at least agree on is one of Haribo’s best…Their Giant Strawbs.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Jelly Belly Bean Boozled Jelly Beans",
    description:
      "For most people, sweets are nice little sweet or sour indulgence. But for a brave few, it’s all about questionable tastes and humorous facial expressions when a friend gets a nasty surprise!",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Peanut Butter M&M’s",
    description:
      "As difficult as these can be to find for a lot of people in the UK, that hasn’t stumped the nation’s taste for these this lovely spin on the traditional M&M.",
    price: 18.99,
  },
];

const AvailableSweets = () => {
  const sweetsList = DUMMY_SWEETS.map((sweet) => 
    <SweetItem 
        name={sweet.name}
        description={sweet.description}
        price={sweet.price}
    />

  );

  return (
    <section className={styles.sweets}>
      <ul>
      {sweetsList}
      </ul>
    </section>
  );
};

export default AvailableSweets;
