import styles from './App.module.css';
import Layout from './Layout';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
