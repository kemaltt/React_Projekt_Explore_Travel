import React from "react";
import { Link } from "react-router-dom";
import logo from "./../images/logo.png";
import thousand from "./../images/thousand-01 1.jpg";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link className="nav_link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/destinations">
                Destinations
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/partner">
                Partner
              </Link>
            </li>
            <li>
              <Link className="nav_link login" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav_link register" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
        <section>
          <div className="holiday">
            <h1>Explore and Travel</h1>
            <h3>Holiday finder</h3>
            <form action="">
              <div className="input">
                <select name="select" id="">
                  <option value="" selected>
                    Location
                  </option>
                  <option value="deutschland">Deutschland</option>
                  <option value="türkei">Türkei</option>
                  <option value="italy">Italy</option>
                </select>

                <select name="select" id="">
                  <option value="" selected>
                    Activity
                  </option>
                  <option value="deutschland">Deutschland</option>
                  <option value="türkei">Türkei</option>
                  <option value="italy">Italy</option>
                </select>
              </div>
              <div className="input">
                <select name="select" id="">
                  <option value="" selected>
                    Grade
                  </option>
                  <option value="deutschland">Deutschland</option>
                  <option value="türkei">Türkei</option>
                  <option value="italy">Italy</option>
                </select>

                <input className="date" type="date" name="date" id="" />
              </div>

              <input className="btn" type="button" value="Explore" />
            </form>
          </div>

          <img src={thousand} alt="thousand" />
        </section>
      </header>
    </div>
  );
}
