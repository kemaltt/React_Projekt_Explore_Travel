import React from "react";
import thousand2 from "./../images/Thousand-02 1.jpg";

export default function Home() {
  return (
    <div className="home_page">
      <img src={thousand2} alt="thousand2" />
      <div>
        <h2>A new way to explore the world </h2>
        <p>
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>

        <input className="btn" type="button" value="Learn more" />
      </div>
    </div>
  );
}
