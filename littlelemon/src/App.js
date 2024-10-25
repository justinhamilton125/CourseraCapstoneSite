import React from 'react';
import './App.css';
import logo from './icons_assets/Logo.svg';
import ExperienceFragment from './ExperienceFragment';
import restaurantFood from './icons_assets/restauranfood.jpg';
import greekSalad from "./icons_assets/greek salad.jpg";
import lemonDessert from "./icons_assets/lemon dessert.jpg";
import bruchetta from "./icons_assets/bruchetta.svg";

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Little Lemon Logo" />
        <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      </header>
      <main>
        <section class = "section1">
          <div class = "container1">
            <h1>Welcome to Little Lemon</h1>
            <h2>Your favorite restaurant</h2>
            <p>Discover delicious dishes made from the freshest ingredients.</p>
            <button>Reserve a Table</button>
          </div>
          <img src={restaurantFood} alt="Delicious dish" />
        </section>
        <section class = "section2">
          <div class = "container2">
            <h1>This Week's Menu</h1>
            <button>Online Menu</button>
          </div>
          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc={greekSalad}
          />

          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc={bruchetta}
          />

          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc={lemonDessert}
          />
        </section>


        <section>
          <h1>Testimonals</h1>

          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc="path_to_your_image.jpg" // Update with your image path
          />

          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc="path_to_your_image.jpg" // Update with your image path
          />


          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc="path_to_your_image.jpg" // Update with your image path
          />


          <ExperienceFragment
            headline="Gourmet Dinner Experience"
            subtext="Enjoy a special three-course meal crafted by our chef."
            price={49.99}
            buttonText="Book Now"
            imageSrc="path_to_your_image.jpg" // Update with your image path
          />
        </section>


        <section>
          <h1>About</h1>
          <h1>Welcome to Little Lemon</h1>
          <h2>Your favorite restaurant</h2>
          <p>Discover delicious dishes made from the freshest ingredients.</p>
          <button>Reserve a Table</button>
          
          <div className="image-container">
            <img src={logo} alt="Delicious dish" className="image-overlay" />
            <img src={logo} alt="Delicious dish" className="image-base" />
          </div>
        </section>

      </main>
      <footer>
      <img src={logo} alt="Delicious dish" />
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@littlelemon.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
