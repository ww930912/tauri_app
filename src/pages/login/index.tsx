import "react";
import styles from "./index.module.scss";
import LoginCard from "./loginCard";
import LoginForm from "./loginForm";

export default (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.moderate}>
          <pre className={styles.container}>React18, Mbox and Ant Design5 in Vite.</pre>
      </div>
      <div className={styles.loginPanel}>
        {/* @ts-ignore */}
        <LoginCard>
          <LoginForm />
        </LoginCard>
      </div>
    </div>
  );
};
