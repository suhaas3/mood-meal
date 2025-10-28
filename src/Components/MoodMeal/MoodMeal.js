import React, { lazy, useEffect, useState } from "react";
import "./MoodMeal.css";
import { useSelector } from "react-redux";

const FooterSection = lazy(() => import("../../FooterSection/FooterSection"));

function MoodMeal() {
  const [moodMeal, setMoodMeal] = useState("");
  const [filteredMoodMeal, setFilteredOptionMoodMeal] = useState([]);
  const [greetings, setGreetings] = useState("");

  const user = useSelector((state) => state.user);

  const mealData = [
    { type: "happy", meals: ["Fruit salad", "Pasta", "Smoothie"], image: "https://mojo.generalmills.com/api/public/content/bUCmBsXVSUuUFJy_6qQRWQ_gmi_hi_res_jpeg.jpeg?v=9bffdf1f&t=466b54bb264e48b199fc8e83ef1136b4" },
    { type: "sad", meals: ["Ice cream", "Brownie", "Muffins"], image: "https://i.ytimg.com/vi/xN0iyPj4PJI/sddefault.jpg" },
    { type: "hungry", meals: ["Burger", "Pizza", "Wrap"], image: "https://assets.foodhub.com/static/3c650c09816fcbd16728b8b796aaa45e/img/1721159367phpMZ4s08.jpg" },
    { type: "angry", meals: ["Spicy wings", "Tacos", "Hot dog"], image: "https://images.squarespace-cdn.com/content/v1/613bbf5ed2d39e75883d78c2/5c2b9eb5-1e83-4c94-9edc-6d215a0101ce/IMG_3142.jpg" },
    { type: "bored", meals: ["Chips", "Trail mix", "Popcorn"], image: "https://preventionrd.com/wp-content/uploads/2024/07/Popcorn-Trail-Mix-FI.jpg" },
    { type: "anxious", meals: ["Chocolate", "Cookies", "Cup noodles"], image: "https://www.allrecipes.com/thmb/yYmYR71xo-GmDPqGa9D2AubyMIY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9827-chocolate-chocolate-chip-cookies-i--DDMFS-094-2x1-1ea5681d74e549d28ac0254d798a072f.jpg" },
    { type: "tired", meals: ["Coffee", "Oats", "Green tea"], image: "https://thumbs.dreamstime.com/b/matcha-green-tea-breakfast-top-view-white-background-oatmeal-berries-toasts-wooden-tray-nuts-coffee-162949473.jpg" },
    { type: "happy", meals: ["Sushi", "Veg sandwich", "Pancakes"], image: "https://thumbs.dreamstime.com/b/beautifully-decorated-catering-banquet-table-different-food-snacks-appetizers-sandwich-pancakes-fresh-salad-corporate-113283776.jpg" },
    { type: "sad", meals: ["Instant noodles", "Cheesecake", "Cake"], image: "https://www.justonecookbook.com/wp-content/uploads/2024/12/Japanese-Cheesecake-4631-2024-NEW-I-1.jpg" },
    { type: "hungry", meals: ["Grilled chicken", "Paratha", "Paneer curry"], image: "https://assets.box8.co.in/rectangle-19x10/xxhdpi/product/3943" },
    { type: "angry", meals: ["Fried rice", "Chili paneer", "Spicy noodles"], image: "https://thetableofspice.com/wp-content/uploads/2022/09/DSC_2924-1440x960-1.jpg" },
    { type: "bored", meals: ["Biscuits", "Dry fruits", "Granola"], image: "https://i.ytimg.com/vi/5gOYNeAohWY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvaSge8MIQZ6sGrjImAWJxCbmDMA" },
    { type: "anxious", meals: ["Milkshake", "Candy", "Donut"], image: "https://i.ytimg.com/vi/c140jybVt4A/maxresdefault.jpg" },
    { type: "tired", meals: ["Herbal tea", "Banana", "Toast"], image: "https://www.thehealthfactory.in/cdn/shop/articles/Peanut_Butter_Banana_Toast_with_Zero_Maida_Milk_Bread.jpg?v=1747649141" },
    { type: "happy", meals: ["Cupcake", "Corn salad", "Lemonade"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbdARnXj3UzLnx_RAsPUHZrmi25ohCj90gA&s" },
    { type: "sad", meals: ["Mac & cheese", "Soft drink", "Bread roll"], image: "https://i.ytimg.com/vi/eaamS1Zkenk/maxresdefault.jpg" },
    { type: "hungry", meals: ["Thali", "Kebab", "Dosa"], image: "https://cdn.uengage.io/uploads/28289/image-DI1S4Y-1739196356.png" },
    { type: "angry", meals: ["Pav Bhaji", "Spicy biryani", "Chili chicken"], image: "https://c.ndtvimg.com/2019-10/7g6mck6g_biryani-badshah_625x300_25_October_19.jpg" },
    { type: "bored", meals: ["Peanuts", "Samosa", "Namkeen"], image: "https://b.zmtcdn.com/data/dish_photos/f92/6a0428ed373c87324efb69bd44065f92.jpg" },
    { type: "anxious", meals: ["Nutella toast", "Pastry", "Hot cocoa"], image: "https://www.allrecipes.com/thmb/4kO7JBAK5IYzLp-me5Uh7XEw0lE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-239753-nutella-stuffed-french-toast-VAT-4x3-1991e7019b5c49359a49d8be6065d8b4.jpg" },
    { type: "tired", meals: ["Smoothie", "Protein bar", "Soup"], image: "https://crazynutrition.co.uk/cdn/shop/articles/HERO_7ac1f226-6518-4bb4-bee0-21eef3d0c801.png?v=1707737375" },
    { type: "happy", meals: ["Lassi", "Paneer tikka", "Fruit bowl"], image: "https://nfcihospitality.com/wp-content/uploads/2019/04/lassi-1.jpg.webp" },
    { type: "sad", meals: ["Garlic bread", "Chocolate shake", "Nachos"], image: "https://img.taste.com.au/O_5e5BxC/taste/2016/11/tray-baked-nachos-102903-1.jpeg" },
    { type: "hungry", meals: ["Roti sabzi", "Idli", "Rice bowl"], image: "https://maayeka.com/wp-content/uploads/2013/10/soft-idli-recipe.jpg.webp" },
    { type: "angry", meals: ["Aloo tikki", "Mirchi bhaji", "Red curry"], image: "https://ranveerbrar.com/wp-content/uploads/2024/12/aloo-tikki-chaat.jpg" },
    { type: "bored", meals: ["Toast", "Cornflakes", "Energy bites"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSG0DMuNkCG96u1fi6ukW7C7daozA7KTG84g&s" },
    { type: "anxious", meals: ["Cheese sandwich", "Soft drink", "Snack bar"], image: "https://www.tastingtable.com/img/gallery/the-6-best-starbucks-drink-and-food-pairings/intro-1752266265.jpg" },
    { type: "tired", meals: ["Milk", "Eggs", "Khichdi"], image: "https://pepperscale.com/wp-content/uploads/2022/11/Spicy-Masala-Eggs-With-Khichdi_1-1024x768.jpg" },
    { type: "happy", meals: ["Mango juice", "Cake pop", "Lemon tart"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2tlzIUMstEbp5QUvcb0RGjtPZifIjuXg2Q&s" },
    { type: "sad", meals: ["Custard", "Ice cream", "Dark chocolate"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oYKwCWyg7znXzYr9OEOkz6oej4yVRiV_oA&s" }
  ];

  const moodOptions = ["happy", "sad", "hungry", "angry", "bored", "anxious", "tired"];

  // ✅ Health tips based on mood
  const healthTips = {
    happy: [
      "Keep spreading positivity! Stay hydrated and enjoy fresh fruits to keep your energy up. 🍎",
      "Go outdoors for a walk or sunlight exposure — it helps maintain your good mood. 🌞",
      "Listen to your favorite music or dance — it boosts serotonin naturally! 🎶",
    ],
    sad: [
      "Try some comfort food, but balance it with a walk or meditation to lift your mood. 🌤️",
      "Stay connected — talk to a friend or family member about how you feel. 💬",
      "Include mood-boosting foods like dark chocolate or nuts in moderation. 🍫",
    ],
    hungry: [
      "Eat balanced meals with protein, fiber, and healthy fats — avoid skipping breakfast! 🥗",
      "Drink a glass of water before meals to prevent overeating. 💧",
      "Prefer homemade food over processed snacks for steady energy levels. 🍛",
    ],
    angry: [
      "Drink cool water or herbal tea. Avoid spicy or oily foods that might worsen irritation. 🌿",
      "Take slow, deep breaths or go for a short walk to calm your mind. 🌬️",
      "Include magnesium-rich foods like bananas or spinach to ease tension. 🍌",
    ],
    bored: [
      "Keep your hands and mind busy — try cooking something new or exercising lightly. 💪",
      "Snack on crunchy veggies or nuts instead of junk food. 🥕",
      "Try a new hobby or explore a creative outlet to stay engaged. 🎨",
    ],
    anxious: [
      "Breathe deeply and eat magnesium-rich foods like bananas or dark chocolate. 🍌",
      "Limit caffeine and processed sugar — they can increase anxiety. ☕🚫",
      "Practice mindfulness or short breathing exercises daily. 🧘‍♀️",
    ],
    tired: [
      "Take short breaks and hydrate often. Try oats, nuts, and green tea for a quick refresh. ☕",
      "Ensure 7–8 hours of quality sleep — rest is essential for energy. 🌙",
      "Stretch or take a 10-minute walk to improve blood flow and alertness. 🚶‍♀️",
    ],
  };

  useEffect(() => {
    const filtered = mealData.filter((item) => item.type === moodMeal);
    setFilteredOptionMoodMeal(filtered);

    if (moodMeal) {
      setGreetings(`Hi ${user?.firstName || "there"}, here are some ${moodMeal} mood meal ideas!`);
    } else {
      setGreetings("");
    }
  }, [moodMeal, user]);

  return (
    <>
      <div style={{ padding: "20px", fontSize: "20px", fontFamily: "Arial" }}>
        {greetings}
      </div>

      {/* ✅ Mood Selection Buttons */}
      <div className="mood-card-container">
        {moodOptions.map((option, index) => (
          <div
            key={index}
            className={`mood-select-card ${moodMeal === option ? "active" : ""}`}
            onClick={() => setMoodMeal(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </div>
        ))}
      </div>

      {/* ✅ Display Filtered Food Cards */}
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
                    <p className="card-text">Meals: {item.meals.join(", ")}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Aesthetic Health Tips Section */}
      {moodMeal && (
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            marginBottom: "50px",
          }}
        >
          <h3
            style={{
              color: "#ff6600",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            💡 Health Tips for Your {moodMeal.charAt(0).toUpperCase() + moodMeal.slice(1)} Mood
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              padding: "10px 20px",
            }}
          >
            {healthTips[moodMeal].map((tip, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  padding: "15px 20px",
                  width: "280px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  fontSize: "15px",
                  color: "#444",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
                }}
              >
                {tip}
              </div>
            ))}
          </div>
        </div>
      )}

      <FooterSection />
    </>
  );
}

export default MoodMeal;
