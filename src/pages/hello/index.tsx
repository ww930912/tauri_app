import "react";
import styles from "./index.module.scss";
import Card from "./components/card";

export default (props) => {
  return (
    <div className={styles.content}>
      {/* <div className={styles.title}>Tiny React</div> */}
      <div className={styles.infoBoard}>
        <Card />
      </div>
    </div>
  );
};
