import styles from './App.module.css';
import BlogSection from './components/BlogSection';
import HeroSection from './components/HeroSection';
import Layout from './Layout';
import { Outlet, Link } from "react-router-dom";
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
