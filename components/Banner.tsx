import styles from '../styles/Home.module.css';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerLeft}>
        <h1>BLOOM YOUR WORLD</h1>
        <p>Exclusive Floral Arrangements & Decorations</p>
      </div>
      <div className={styles.bannerRight}>
        <img src="/flower_banner.png" alt="Bloomit Product" className={styles.bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
