import React from "react";
import logo from "./../images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="title">
        <div>
          <img src={logo} alt="logo" />
          <p>
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p>©2020 Thousand Sunny. All rights reserved</p>
        </div>
        <div>
          <h4>Destinations</h4>
          <p>Africa</p>
          <p>Antarctica</p>
          <p>Asia</p>
          <p>Europa</p>
          <p>America</p>
        </div>
        <div>
          <h4>Shop</h4>
          <p>Destination Guides</p>
          <p>Pictorial & Gifts</p>
          <p>Special Offer</p>
          <p>Delivery Times</p>
          <p>FAQs</p>
        </div>
        <div>
          <h4>Interests</h4>
          <p>Adventure Travel</p>
          <p>Art And Culture</p>
          <p>Wildlife And Nature</p>
          <p>Family Holidays</p>
          <p>Food And Drink</p>
        </div>
      </div>
      <div className="social_icon">
        <i class="lab la-twitter"></i>
        <i class="lab la-facebook-f"></i>
        <i class="lab la-instagram"></i>
        <i class="lab la-linkedin-in"></i>
        <i class="lab la-youtube"></i>
      </div>
    </footer>
  );
}
