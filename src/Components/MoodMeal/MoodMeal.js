import React, { useEffect, useMemo, useState } from "react";
import './MoodMeal.css';

function MoodMeal() {

  const [moodMeal, setMoodMeal] = useState('All');

  const [filteredMoodMeal, setFilteredOptionMoodMeal] = useState([]);

  const mealData = [
    { type: "happy", meals: ["Fruit salad", "Pasta", "Smoothie"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "sad", meals: ["Ice cream", "Brownie", "Muffins"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "hungry", meals: ["Burger", "Pizza", "Wrap"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "angry", meals: ["Spicy wings", "Tacos", "Hot dog"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "bored", meals: ["Chips", "Trail mix", "Popcorn"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "anxious", meals: ["Chocolate", "Cookies", "Cup noodles"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "tired", meals: ["Coffee", "Oats", "Green tea"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "happy", meals: ["Sushi", "Veg sandwich", "Pancakes"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "sad", meals: ["Instant noodles", "Cheesecake", "Cake"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "hungry", meals: ["Grilled chicken", "Paratha", "Paneer curry"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "angry", meals: ["Fried rice", "Chili paneer", "Spicy noodles"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "bored", meals: ["Biscuits", "Dry fruits", "Granola"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "anxious", meals: ["Milkshake", "Candy", "Donut"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "tired", meals: ["Herbal tea", "Banana", "Toast"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "happy", meals: ["Cupcake", "Corn salad", "Lemonade"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "sad", meals: ["Mac & cheese", "Soft drink", "Bread roll"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "hungry", meals: ["Thali", "Kebab", "Dosa"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "angry", meals: ["Pav Bhaji", "Spicy biryani", "Chili chicken"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "bored", meals: ["Peanuts", "Samosa", "Namkeen"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "anxious", meals: ["Nutella toast", "Pastry", "Hot cocoa"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "tired", meals: ["Smoothie", "Protein bar", "Soup"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "happy", meals: ["Lassi", "Paneer tikka", "Fruit bowl"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "sad", meals: ["Garlic bread", "Chocolate shake", "Nachos"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "hungry", meals: ["Roti sabzi", "Idli", "Rice bowl"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "angry", meals: ["Aloo tikki", "Mirchi bhaji", "Red curry"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "bored", meals: ["Toast", "Cornflakes", "Energy bites"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "anxious", meals: ["Cheese sandwich", "Soft drink", "Snack bar"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "tired", meals: ["Milk", "Eggs", "Khichdi"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "happy", meals: ["Mango juice", "Cake pop", "Lemon tart"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" },
    { type: "sad", meals: ["Custard", "Ice cream", "Dark chocolate"], image: "https://media.istockphoto.com/id/609912098/photo/onam-feast-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=cx4aRZx9jp4xrr9LBode61FoUfWsDKB_4drxI5G17Ok=" }
  ];


  useEffect(() => {
    const filtered = moodMeal === 'All'
      ? mealData
      : mealData.filter(item => item.type === moodMeal);

    setFilteredOptionMoodMeal(filtered);
  }, [moodMeal]);




  return (
    <>

      <div className="filter-conatainer">
        <div className="mood-option">
          <p className="mood-heading">select ur mood</p>
          <select onChange={(e) => setMoodMeal(e.target.value)}>
            <option>All</option>
            <option>happy</option>
            <option>tired</option>
            <option>anxious</option>
            <option>bored</option>
            <option>angry</option>
            <option>hungry</option>
          </select>
        </div>
      </div>
      <div className="mood-meal-container">
        <div className="container mt-4">
          <div className="row">
            {filteredMoodMeal.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="mood-card card">
                  <img
                    src={item.image}
                    className="card-img-top mood-image"
                    alt={`${item.type} mood`}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{item.type} Mood</h5>
                    <p className="card-text">Meals: {item.meals.join(", ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


export default MoodMeal;