import React, { useState } from "react";

const initialFoodItems = [
  { id: "fw_hkahsfhkhsksfg", createdAt: new Date(), updatedAt: new Date() },
  { id: "fw_hkhjksdhyuirnsf", createdAt: new Date(), updatedAt: new Date() },
  { id: "fw_sfuirmnsisdfmri", createdAt: new Date(), updatedAt: new Date() },
  { id: "fw_sfdlksdfjijrmffgd", createdAt: new Date(), updatedAt: new Date() },
  { id: "fw_sfdlkjklfssjhdfs", createdAt: new Date(), updatedAt: new Date() },
  { id: "fw_sfdlksdjfgsdhjnf", createdAt: new Date(), updatedAt: new Date() }
];

function FoodItemComponent({ foodItem }) {
  return (
    <div className="food-item">
      <img src="/assets/public/food_image.png" alt="Food" className="food-image" />
      <p>FOOD</p>
      <p className="date">{foodItem.createdAt.toLocaleString()}</p>
      <p>ID: {foodItem.id}</p>
      <p>Updated: {foodItem.updatedAt.toLocaleString()}</p>
      <p className="joke-text">Chuck Norris doesn't believe in ravioli. He stuffs a little turtle with beef and smothers it in pig's blood.</p>
    </div>
  );
}

function FoodList() {
  const [foodItems] = useState(initialFoodItems);
  
  return (
    <div className="food-list">
      <h4>Food, Career, Celebrity, Dev</h4>
      <ul>
        {foodItems.map((foodItem) => (
          <li key={foodItem.id} className="food-list-item">
            <FoodItemComponent foodItem={foodItem} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
