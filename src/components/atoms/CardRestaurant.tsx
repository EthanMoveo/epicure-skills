import React from 'react';

// import styles from './card-restaurant.module.scss';
import fullStar from './../../assets/icons/star-full.svg';
import emptyStar from './../../assets/icons/star-empty.svg';

interface CardRestaurantProps {
  picture: string;
  restaurantName: string;
  chefName: string;
  rating: number; 
}

const CardRestaurant: React.FC<CardRestaurantProps> = ({ picture, restaurantName, chefName, rating }) => {
  
  const stars = Array(5).fill(0).map((_, index) => (
    <img
      key={index}
      src={index < rating ? fullStar : emptyStar}  
      alt={index < rating ? "Full Star" : "Empty Star"}
    //   className={styles.star}
    />
  ));

  return (
    // <div className={styles.cardContainer}>
    //   <div className={styles.imageContainer}>
    //     <img className={styles.cardImage} src={picture} alt={restaurantName} />
    //   </div>
    //   <div className={styles.cardContent}>
    //     <h3 className={styles.restaurantName}>{restaurantName}</h3>
    //     <p className={styles.chefName}>{chefName}</p>
    //     <div className={styles.starsContainer}>
    //       {stars}  
    //     </div>
    //   </div>
    // </div>
    <>
    </>
  );
};

export default CardRestaurant;