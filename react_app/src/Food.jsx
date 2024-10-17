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
    <div>
      <img src="/assets/public/food_image.png" alt="Food"/>
      <p>FOOD</p>
      <p className="date">{foodItem.createdAt.toLocaleString()}</p>
      <p>ID: {foodItem.id}</p>
      <p>Updated: {foodItem.updatedAt.toLocaleString()}</p>
      <p>Chuck Norris doesn't believe in ravioli. He stuffs a little turtle with beef and smothers it in pig's blood.</p>
    </div>
  );
}

function FoodList() {
  const [foodItems] = useState(initialFoodItems);
  
  return (
    <>
      <h4>Food, Career, Celebrity, Dev</h4>
      <ul>
        {foodItems.map((foodItem) => (
          <div key={foodItem.id}>
            <FoodItemComponent foodItem={foodItem} />
          </div>
        ))}
      </ul>
    </>
  );
}

export default FoodList;
