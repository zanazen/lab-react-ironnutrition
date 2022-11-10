import React from 'react';
import { Image } from 'antd';

const FoodBox = ({ calories, image, servings }) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Image width={150} height={100} src={image} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <strong>Total Calories:</strong> {calories * servings} kcal
        </p>
    </div>
  );
};

export default FoodBox;