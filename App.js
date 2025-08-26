import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const Header = () => {
  return (
    <div className="header">
        <div className="logo-container">
            <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"
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
  const { resName, cusine } = props;
  return (
    <div className="res-card" style={{ backgroundColor:  "#f0f0f0"}}>

      <img 
      className="res-logo"
      alt="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/b8d58a64-8410-4690-bb3e-62b7d06a94f1_620953.JPG"
      />

      <h4>{props.resName}</h4> 
      <h4>{props.cusine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>

    </div>
  );
};

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard 
        resName="Meghna Food" 
        cusine = "Pizza , Biryani"   
        />
        <RestaurantCard 
        resName= "KFC"
        cusine = "Burger , Fast Food"
        />
       


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