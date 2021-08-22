import { Fragment } from "react";
import styles from "./Header.module.css";
import sweetsImage from "../../assets/sweets.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onOpenCart}) => {




  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Sweets</h1>
        <HeaderCartButton onOpen={onOpenCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sweetsImage} alt="sweets" />
      </div>
    </Fragment>
  );
};

export default Header;
