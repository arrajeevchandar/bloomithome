import styles from '../styles/Home.module.css';

const FeaturedProducts: React.FC = () => {
  const products = [
    { id: 1, name: 'Beautiful Roses', price: '20.00', image: '/roses.png' },
    { id: 2, name: 'Vibrant Tulips', price: '15.00', image: '/tulips.png' },
    { id: 3, name: 'Sunflower Bouquet', price: '25.00', image: '/sunflowers.png' },
    { id: 4, name: 'Orchid Plant', price: '30.00', image: '/orchids.png' },
  ];

  return (
    <div className={styles.featuredProducts}>
      <h2>Featured Products</h2>
      <div className={styles.productsGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
