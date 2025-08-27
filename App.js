import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const Header = () => {
  return (
    <div className="header">
        <div className="logo-container">
            <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&ss"
             />
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

        </div>
        

    </div>
   
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating, 
    sla
  } = resData || {};

  return (
    <div className="res-card" style={{ backgroundColor:  "#f0f0f0"}}>
      <img 
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4>{name}</h4> 
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    id: "725082",
    name: "Pizza Hut",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/5e386121-e864-4cfc-84ce-12ac9753edba_725082.JPG",
    cuisines: ["Pizzas"],
    avgRating: 4.3,
    sla: { deliveryTime: 25 }
  },
  {
    id: "620953",
    name: "Domino's Pizza",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/b8d58a64-8410-4690-bb3e-62b7d06a94f1_620953.JPG",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    avgRating: 4.3,
    sla: { deliveryTime: 30 }
  },
  {
    id: "1074038",
    name: "Olio - The Wood Fired Pizzeria",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/6/3/faa90f85-1ab7-4346-a897-3dfbdcc7034f_73efb087-714d-4baf-b93c-960a84801975.png_compressed",
    cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
    avgRating: 4.1,
    sla: { deliveryTime: 29 }
  },
  {
    id: "1090415",
    name: "Pizza Wings",
    cloudinaryImageId: "4a3d7519bd4411b9aae95de417920d84",
    cuisines: ["Pizzas", "Italian", "Pastas", "Rolls & Wraps"],
    avgRating: 4.3,
    sla: { deliveryTime: 25 }
  },
  {
    id: "814101",
    name: "Cake Couture",
    cloudinaryImageId: "a9fa5f4ab354eca5c550d1ea4cafa22d",
    cuisines: ["Pizzas", "Pastas", "Burgers", "Italian", "Fast Food", "Bakery", "Desserts"],
    avgRating: 3.2,
    sla: { deliveryTime: 27 }
  },
  {
    id: "1055317",
    name: "La Pizzato Pizza",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/6/10/00b99002-834f-4fd9-94d4-55a9ce9a6f91_b67d2ed6-4c25-405c-95e3-7d7c661d9d1b.jpg",
    cuisines: ["Chinese", "Continental", "Tandoor", "Pizzas", "North Indian"],
    avgRating: 3.1,
    sla: { deliveryTime: 37 }
  },
  {
    id: "933358",
    name: "Crispy Crunch",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2024/7/27/fe7ffdfe-059e-4b70-b11a-d6176bba56b9_17acb9f7-051d-4392-bc54-daa36910d706.jpg",
    cuisines: ["Pizzas", "Pastas", "Burgers"],
    avgRating: 4.3,
    sla: { deliveryTime: 50 }
  },
  {
    id: "254135",
    name: "McDonald's",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/041acbd3-37b1-4d3c-9aa3-9aa86c67d584_254135.JPG",
    locality: "Gardanibagh",
    areaName: "Golambar",
    costForTwo: "₹400 for two",
    cuisines: ["American"],
    avgRating: 4.3,
    sla: { deliveryTime: 23 }
  },
  {
    id: "459192",
    name: "Bikkgane Biryani",
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/6/24/13f250b3-c260-4ca0-bf68-e7c547fbd6c4_b7c5f8cf-cabf-449c-a7ce-7f2839bc64da.jpg",
    locality: "Housing Board Colony",
    areaName: "Kankarbagh",
    costForTwo: "₹350 for two",
    cuisines: [
      "Biryani",
      "Hyderabadi",
      "Andhra",
      "South Indian",
      "North Indian",
      "Mughlai",
      "Kebabs"
    ],
    avgRating: 4.3,
    sla: {deliveryTime: 22}
  },


];

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
}
   
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />

   
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);