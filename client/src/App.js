import styles from './App.module.css';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <HeroSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
