import { FunctionComponent } from "react";
import styles from "./styles.module.scss";

export const Loading: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content} />

      <div className={styles.indicator}>
        <div className={styles.point1} />
        <div className={styles.point2} />
        <div className={styles.point3} />
      </div>
    </div>
  );
};
