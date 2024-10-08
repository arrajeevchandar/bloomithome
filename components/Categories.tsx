import styles from '../styles/Home.module.css';

const Categories: React.FC = () => {
  const categories = [
    { id: 1, name: 'Flowers', image: '/flowers_category.png' },
    { id: 2, name: 'Plants', image: '/plants_category.png' },
    { id: 3, name: 'Decorations', image: '/decor_category.png' },
    { id: 4, name: 'Gift Baskets', image: '/baskets_category.png' },
  ];

  return (
    <div className={styles.categories}>
      <h2>Categories</h2>
      <div className={styles.categoriesGrid}>
        {categories.map(category => (
          <div key={category.id} className={styles.categoryCard}>
            <img src={category.image} alt={category.name} className={styles.categoryImage} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
